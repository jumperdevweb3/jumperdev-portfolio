import { a, useTrail } from "@react-spring/web";
import React, { ReactNode } from "react";

export const SpringTrail = ({
  open,
  children,
}: {
  children: ReactNode;
  open: boolean;
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 80,
    height: "auto",
    from: { opacity: 0, x: 80, height: "auto" },
    delay: 700,
  });
  return (
    <>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </>
  );
};
