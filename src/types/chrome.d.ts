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
