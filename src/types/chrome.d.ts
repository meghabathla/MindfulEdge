// This is the standard way to add type definitions for browser APIs that aren't included in the default TypeScript definitions

declare global {
  interface Window {
    chrome?: {
      tabs?: {
        create: (options: { url: string }) => void;
      };
    };
  }
}

export {};
