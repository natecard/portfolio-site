import os
import re
from datetime import datetime
from threading import Timer

from watchdog.events import FileSystemEventHandler
from watchdog.observers import Observer


class MarkdownHandler(FileSystemEventHandler):
    def __init__(self):
        self.recently_processed = set()
        self.debounce_time = 1  # seconds

    def process_file(self, file_path):
        if file_path in self.recently_processed:
            return

        self.recently_processed.add(file_path)
        file_name = os.path.basename(file_path)

        try:
            with open(file_path, "r") as file:
                content = file.read()

            has_frontmatter = bool(re.search(r"^---\s*[\s\S]*?^---\s*$", content, re.MULTILINE))

            if not content or not has_frontmatter:
                frontmatter = f"""---
title: {os.path.splitext(file_name)[0].replace("-", " ").title()}
excerpt:
coverImg:
date: {datetime.now().isoformat()}
author: Nathan Card
slug: {os.path.splitext(file_name)[0]}
tags:
---

{content}"""
                with open(file_path, "w") as file:
                    file.write(frontmatter)
                print(f"Added frontmatter to: {file_name}")

            # Remove from processed set after delay
            Timer(self.debounce_time, lambda: self.recently_processed.remove(file_path)).start()
        except (IOError, OSError) as e:
            print(f"Error processing {file_name}: {str(e)}")

    def on_created(self, event):
        from pathlib import Path

        if event.is_directory or Path(event.src_path).suffix != ".mdx":
            return
        Timer(0.5, lambda: self.process_file(event.src_path)).start()


def watch_directory():
    """
    Watches the specified directory for new markdown files and processes them.

    This function sets up a watchdog observer to monitor the "./public/lib" directory
    for the creation of new markdown (.mdx) files. When a new markdown file is detected,
    it triggers the MarkdownHandler to add frontmatter to the file.

    Usage:
        Call this function to start watching the directory. It will run indefinitely
        until interrupted by a KeyboardInterrupt (Ctrl+C).

    Raises:
        KeyboardInterrupt: Stops the observer when the user interrupts the process.
    """
    path = "./public/lib"
    event_handler = MarkdownHandler()
    observer = Observer()
    observer.schedule(event_handler, path, recursive=False)
    observer.start()

    try:
        while observer.is_alive():
            observer.join(timeout=1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join()


if __name__ == "__main__":
    watch_directory()
