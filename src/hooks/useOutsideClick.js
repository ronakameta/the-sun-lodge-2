import { useEffect, useRef } from "react";

export function useOutsideClick(handler, isHandleCapture = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClick, isHandleCapture);

      return () =>
        document.removeEventListener("click", handleClick, isHandleCapture);
    },
    [handler, isHandleCapture]
  );
  return ref;
}
