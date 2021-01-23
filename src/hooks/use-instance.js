import { useRef } from "react";

export function useInstance(initialFunction) {
  const ref = useRef();
  if (!ref.current) {
    ref.current = initialFunction();
  }
  return ref.current;
}
