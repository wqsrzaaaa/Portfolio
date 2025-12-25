"use client"

import { useEffect, useRef } from "react";
import styles from "../components/snow404.module.css";
import Link from "next/link";

export default function Snow404() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;

    const ctx = el.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = [];

    const Particle = function () {
      this.x = this.y = this.dx = this.dy = 0;
      this.reset();
    };

    Particle.prototype.reset = function () {
      this.y = Math.random() * height;
      this.x = Math.random() * width;
      this.dx = Math.random() * 1 - 0.5;
      this.dy = Math.random() * 0.5 + 0.5;
    };

    const createParticles = (count) => {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      el.width = width;
      el.height = height;

      createParticles((width * height) / 10000);
    };

    const updateParticles = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#f6f9fa";

      particles.forEach((particle) => {
        particle.y += particle.dy;
        particle.x += particle.dx;

        if (particle.y > height) particle.y = 0;
        if (particle.x > width) {
          particle.reset();
          particle.y = 0;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 5, 0, Math.PI * 2, false);
        ctx.fill();
      });

      requestAnimationFrame(updateParticles);
    };

    onResize();
    updateParticles();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className={styles.content}>
      <canvas ref={canvasRef} className={styles.snow} id="snow" />
      <div className={styles.mainText}>
        <h2 className="font-extrabold text-4xl">Sorry, Page not found </h2>
        <div className="flex gap-5 flex-wrap justify-center text-[22px] font-bold pt-5">
          <Link href={'/'}>← Back to Home</Link>
        <Link href={'/portfolio'}>← Back to Project</Link>
        </div>
      </div>
      <div className={styles.ground}>
        <div className={styles.mound}>
          <div className={styles.moundText}>404</div>
          <div className={styles.moundSpade}></div>
        </div>
      </div>
    </div>
  );
}
