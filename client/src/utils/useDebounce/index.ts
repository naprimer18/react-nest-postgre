import { useRef, useCallback } from 'react';

import { TDebounceCallback } from './models';

const DEFAULT_DELAY = 1000;

export const useDebounce = (
  callback: TDebounceCallback,
  delay: number = DEFAULT_DELAY
) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debounceCallback = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback();
    }, delay);
  }, [callback, delay]);

  return debounceCallback;
};
