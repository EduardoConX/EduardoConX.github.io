import { useState, useEffect } from "react";
import type { Meteor } from "../interfaces";

export const useMeteors = () => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        const meteor: Meteor = {
          x: Math.random() * window.innerWidth,
          y: 0,
          length: 100 + Math.random() * 150,
          opacity: 1,
          angle: Math.PI / 4 + (Math.random() * Math.PI) / 8,
          speed: 15 + Math.random() * 10,
          size: 1 + Math.random() * 2,
        };
        setMeteors((prev) => [...prev, meteor]);
      }

      setMeteors((prev) => prev.filter((meteor) => meteor.opacity > 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { meteors };
};
