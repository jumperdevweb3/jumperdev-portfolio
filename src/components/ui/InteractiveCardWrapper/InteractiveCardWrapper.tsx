import { useRef, useState, useEffect, ReactNode } from "react";
import styled from "styled-components";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { interpolate } from "@popmotion/popcorn";

const Container = styled.div`
  border-radius: 0.5rem;
  transform-style: preserve-3d;
  transform: perspective(921px);
  height: auto;
  width: auto;
`;

const Content = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  transform-style: preserve-3d;
  perspective: 800px;
  backface-visibility: hidden;
`;

const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 800px;
  backface-visibility: hidden;
`;

const Gradient = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.5s ease;
`;

export function InteractiveCardWrapper({
  height = 250,
  width = 270,
  children,
}: {
  children: ReactNode;
  width?: number;
  height?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [tapped, setTapped] = useState(false);

  const centerPoint = [width / 2, height / 2];
  const xy = useMotionValue(centerPoint);

  const tx = 0.05;

  const transformX = interpolate([0, width], [width * tx, width * tx * -1]);
  const rotateY = useTransform(xy, ([x]) => transformX(x));

  const transformY = interpolate(
    [0, height],
    [height * tx * -1, height * tx * 1]
  );
  const rotateX = useTransform(xy, ([, y]) => transformY(y));

  const config = {
    stiffness: 150,
    damping: 20,
  };

  const springX = useSpring(rotateX, config);
  const springY = useSpring(rotateY, config);

  const gradientOpacity = useTransform(xy, ([, y]) => {
    return interpolate([0, height], [0, 0.3])(y);
  });

  const gradientOpacitySpring = useSpring(gradientOpacity, config);

  const gradient = useTransform(gradientOpacitySpring, (opacity) => {
    let [x, y] = xy.get();
    if (y === centerPoint[1]) {
      y = centerPoint[1] + 1;
    }

    const angle = Math.atan2(y - centerPoint[1], x - centerPoint[0]);
    const degree =
      ((angle > 0 ? angle : 2 * Math.PI + angle) * 360) / (2 * Math.PI) - 90;
    return `linear-gradient(${degree}deg, rgba(0,0,0,${opacity}), rgba(0,0,0,0) 50%)`;
  });

  function onMouseOver(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    if (tapped) return;
    const rect = e.currentTarget.getBoundingClientRect();
    xy.set([e.clientX - rect.left, e.clientY - rect.top]);
  }

  function hoverStart() {
    setHover(true);
  }

  function hoverEnd() {
    setHover(false);
  }

  useEffect(() => {
    if (!hover) {
      xy.set(centerPoint);
    }
  }, [hover, xy, centerPoint]);

  return (
    <Container ref={ref} style={{ height: `${height}px`, width: `${width}px` }}>
      <Content
        style={{
          scale: 1,
          rotateX: springX,
          rotateY: springY,
        }}
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.97,
        }}
        onTapCancel={(e: any) => {
          setTapped(false);
          onMouseOver(e);
        }}
        onTapStart={() => {
          setTapped(true);
        }}
        onTap={(e) => {
          setTapped(false);
        }}
        onHoverStart={hoverStart}
        onHoverEnd={hoverEnd}
        onMouseMove={onMouseOver}
      >
        <RelativeContainer>{children}</RelativeContainer>
        <Gradient
          style={{
            background: gradient,
          }}
        />
      </Content>
    </Container>
  );
}
