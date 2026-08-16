import React, { useState, useEffect, useRef } from 'react';

export const AnimatedCounter = ({ target, suffix = '', textDisplay }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let start = 0;
          const end = parseInt(target, 10);
          if (isNaN(end) || end === 0) {
            setCount(target);
            return;
          }

          const duration = 1500; // 1.5s count duration
          const incrementTime = Math.max(Math.floor(duration / end), 40);

          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
              clearInterval(timer);
            }
          }, incrementTime);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  if (textDisplay && count >= target) {
    return <span ref={ref}>{textDisplay}</span>;
  }

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};
