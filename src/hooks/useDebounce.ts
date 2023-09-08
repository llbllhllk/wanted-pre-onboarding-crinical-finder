import { useEffect, useRef } from 'react';

export const DEFAULT_DELAY = 500;

const useDebounce = (value: string, callback: () => Promise<void>, delay: number) => {
  const searchTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = window.setTimeout(async () => {
      await callback();
    }, delay);
  }, [value]);
};

export default useDebounce;
