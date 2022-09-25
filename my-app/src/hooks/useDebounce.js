// custom hook useDebounce
import { useRef, useCallback } from "react";

export default function useDebounce(callBack, delay) {
  const timer = useRef();

  return useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callBack(...args);
      }, delay);
    },
    [callBack, delay]
  );
}
