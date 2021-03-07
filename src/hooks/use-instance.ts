import { useRef } from "react";

export function useInstance(initialFunction: Function) {
  const ref = useRef();
  if (!ref.current) {
    ref.current = initialFunction();
  }
  return ref.current;
}
