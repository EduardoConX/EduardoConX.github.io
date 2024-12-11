import React, { useEffect, useRef } from "react";
import { useStars } from "../hooks/useStars";
import { useMeteors } from "../hooks/useMeteors";
import type { Star } from "../interfaces";

const StarryNight: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { stars } = useStars(80);
  const { meteors } = useMeteors();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star: Star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      // Draw meteors
      meteors.forEach((meteor) => {
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(
          meteor.x + meteor.length * Math.cos(meteor.angle),
          meteor.y + meteor.length * Math.sin(meteor.angle)
        );
        ctx.strokeStyle = `rgba(255, 255, 255, ${meteor.opacity})`;
        ctx.lineWidth = meteor.size;
        ctx.stroke();

        meteor.x += meteor.speed * Math.cos(meteor.angle);
        meteor.y += meteor.speed * Math.sin(meteor.angle);
        meteor.opacity -= 0.02;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [stars, meteors]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 w-full h-full bg-black" />
  );
};

export default StarryNight;
