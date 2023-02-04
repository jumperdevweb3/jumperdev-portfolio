import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  offset?: number;
  scrollDistanceMultiplier?: number;
};

export const SideScroll = ({
  children,
  offset = 0,
  scrollDistanceMultiplier = 1,
}: Props) => {
  const scrollListenerRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef(null);
  const scrollingContentRef = useRef<HTMLDivElement>(null);
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollListenerRef,
  });

  const onResizeScrollRange = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setScrollRange(
        entry.contentRect.width +
          (window.innerWidth - document.documentElement.clientWidth)
      );
    }
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      onResizeScrollRange(entries)
    );
    scrollingContentRef &&
      scrollingContentRef.current &&
      resizeObserver.observe(scrollingContentRef.current);
  }, [onResizeScrollRange]);

  const onResize = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    ghostRef && ghostRef.current && resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0 + offset, -scrollRange + viewportW - offset]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 100 };
  const spring = useSpring(transform, physics);

  return (
    <div
      className={
        "relative after:pointer-events-none after:absolute after:top-0 after:left-0 after:h-full after:w-full after:content-['']"
      }
      ref={scrollListenerRef}
    >
      <div
        ref={stickyContainerRef}
        className={
          "sticky top-0 left-0 right-0 overflow-x-hidden will-change-transform"
        }
      >
        <motion.section
          style={{ x: spring }}
          className={
            "relative top-0 flex h-[calc(var(--vh)_*_100)] w-max items-center gap-4"
          }
          ref={scrollingContentRef}
        >
          {children}
        </motion.section>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollRange * scrollDistanceMultiplier }}
        className={"w-screen"}
      />
    </div>
  );
};
