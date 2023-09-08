import { useEffect } from "react";
import React from "react";

function useClickOutside(
  ref: React.MutableRefObject<HTMLInputElement | null>,
  callback: () => void,
) {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);
}

export default useClickOutside;
