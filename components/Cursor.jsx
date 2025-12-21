"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef([]);
  const numBlobs = 5;

  useEffect(() => {
    cursorRef.current = cursorRef.current.slice(0, numBlobs);

    const mouse = { x: 0, y: 0 };
    const positions = Array(numBlobs).fill({ x: 0, y: 0 });

    const moveCursor = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      let prev = { x: mouse.x, y: mouse.y };
      cursorRef.current.forEach((blob, i) => {
        positions[i] = {
          x: positions[i].x + (prev.x - positions[i].x) * 0.45, 
          y: positions[i].y + (prev.y - positions[i].y) * 0.45,
        };
        const scale = 1 - i * 0.15; 
        blob.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px) scale(${scale})`;
        prev = positions[i];
      });
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", moveCursor);
    animate();

    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="Cursor">
      {[...Array(numBlobs)].map((_, i) => (
        <span key={i} ref={(el) => (cursorRef.current[i] = el)}></span>
      ))}
    </div>
  );
}
