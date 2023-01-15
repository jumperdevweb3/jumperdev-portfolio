import { ReactNode, useEffect, useState } from "react";
import { useTrail, a } from "@react-spring/web";
import React from "react";
export const HomeBannerContent = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <div
      className={
        "flex h-auto max-h-[250px] min-h-[200px] flex-col gap-2 text-center font-inter text-4xl font-bold md:text-left"
      }
    >
      <Trail open={open}>
        <p>Hi, 🫣</p>
        <p>My name is </p>
        <p>
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-[transparent]">
            Filip
          </span>
        </p>
        <p>I build things</p>
        <p>
          ...and i love{" "}
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-[transparent]">
            web3
          </span>
        </p>
      </Trail>
    </div>
  );
};

const Trail = ({ open, children }: { children: ReactNode; open: boolean }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 80,
    height: "auto",
    from: { opacity: 0, x: 20, height: 0 },
    delay: 900,
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};
