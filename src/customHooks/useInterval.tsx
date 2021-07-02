import { useEffect, useRef } from 'react';

/**
 * Custom hook for pooling.
 * @param {Function} callback Function callback
 * @param {number} delay Delay between pools
 */
const useInterval = (callback: any, delay: number) => {
  const savedCallback: any = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    /**
     * tick
     */
    function tick() {
      savedCallback.current();
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};

export default useInterval;
