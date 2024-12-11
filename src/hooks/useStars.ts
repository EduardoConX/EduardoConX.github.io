import { useState, useEffect } from "react";
import type { Star } from "../interfaces";

export const useStars = (count: number) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < count; i++) {
        newStars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2,
          opacity: Math.random(),
        });
      }
      setStars(newStars);
    };

    generateStars();
    window.addEventListener("resize", generateStars);

    return () => {
      window.removeEventListener("resize", generateStars);
    };
  }, [count]);

  return { stars };
};
