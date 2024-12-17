import Link from "next/link";
import { siGithub, siLinkedin } from "simple-icons";

import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

const Header = () => {
  const resumeUrl = `${process.env.PUBLIC_URL}/pdf/Nathan_Card_Resume.pdf`;

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <nav className="flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Blog
          </Link>
          <a
            href={resumeUrl}
            download="Nathan_Card_Resume.pdf"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="http://www.github.com/natecard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
              >
                <path d={siGithub.path} />
              </svg>
            </Button>
          </a>
          <a
            href="http://www.linkedin.com/in/nathan-card-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="currentColor"
              >
                <path d={siLinkedin.path} />
              </svg>
            </Button>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
