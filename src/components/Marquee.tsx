"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  speed?: number;
};

export default function Marquee({
  children,
  className,
  style,
  speed = 40,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);
  const [overflows, setOverflows] = useState(false);
  const [duration, setDuration] = useState(10);

  useEffect(() => {
    const check = () => {
      const wrap = wrapperRef.current;
      const content = contentRef.current;
      if (!wrap || !content) return;
      const w = content.scrollWidth;
      const isOverflowing = w > wrap.clientWidth + 1;
      setOverflows(isOverflowing);
      if (isOverflowing) {
        const d = Math.max(6, (w + 32) / speed);
        setDuration(d);
      }
    };
    check();
    const ro = new ResizeObserver(check);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, [children, speed]);

  return (
    <div
      ref={wrapperRef}
      className={"relative overflow-hidden " + (className ?? "")}
      style={style}
    >
      {overflows ? (
        <div
          className="flex w-max whitespace-nowrap"
          style={{
            animation: `marquee ${duration}s linear infinite`,
          }}
        >
          <span ref={contentRef} className="pr-8">
            {children}
          </span>
          <span className="pr-8" aria-hidden="true">
            {children}
          </span>
        </div>
      ) : (
        <span
          ref={contentRef}
          className="block truncate whitespace-nowrap"
        >
          {children}
        </span>
      )}
    </div>
  );
}
