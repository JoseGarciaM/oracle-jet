export {};

declare global {
  namespace preact.JSX {
    interface IntrinsicElements {
      'hello-world': {}
    }
  }
}