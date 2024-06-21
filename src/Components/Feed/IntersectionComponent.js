import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const IntersectionComponent = ({ children, onVisible, lastProductIndex }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    onVisible(inView, lastProductIndex);
  }, [inView, onVisible, lastProductIndex]);

  return <div ref={ref}>{children}</div>;
};
