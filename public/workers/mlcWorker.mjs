/// <reference lib="webworker" />
import { WebWorkerMLCEngineHandler } from "@mlc-ai/web-llm";

// Initialize the handler
const handler = new WebWorkerMLCEngineHandler();
// Register the message handler for worker communication
self.onmessage = (event) => {
  handler.onmessage(event);
};

// Handle any errors that occur in the worker
self.onerror = (event) => {
  console.error("Worker error:", event);
  return true; // Prevents the error from propagating
};

// Handle unhandled promise rejections
self.onunhandledrejection = (event) => {
  console.error("Unhandled rejection:", event.reason);
  handler.engine.unload();
};

// Optional: Handle cleanup when worker is terminated
self.addEventListener("unload", () => {
  handler.engine.unload();
});
