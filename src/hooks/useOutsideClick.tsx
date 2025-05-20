import { useEffect, useRef } from "react";

export const useOutsideClick = (onOutsideClick: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);
  //learn and explore
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onOutsideClick]);

  return {
    ref,
  };
};
