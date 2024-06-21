import { useEffect, useCallback, useRef } from "react";

export const useInfiniteScroll = ({
  data,
  fetchNextData,
  hasReachedLimit = false,
}) => {
  const lastProductIndex = data?.length - 1;
  const lastIndex = useRef(0);

  const onVisible = useCallback(
    (inView, lIndex) => {
      if (inView && lastIndex.current < lIndex && !hasReachedLimit) {
        lastIndex.current = lIndex;
        fetchNextData(lIndex + 1);
      }
    },
    [fetchNextData, hasReachedLimit]
  );

  const onScroll = useCallback(() => {
    const container = document.documentElement || document.body;
    const scrollPosition = container.scrollTop;
    const containerHeight = container.clientHeight;
    const contentHeight = container.scrollHeight;

    if (
      scrollPosition + containerHeight >= contentHeight - 50 &&
      lastIndex.current < lastProductIndex
    ) {
      lastIndex.current = lastProductIndex;
      fetchNextData(lastProductIndex + 1);
    }
  }, [fetchNextData, lastProductIndex]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return { onVisible, lastProductIndex };
};
