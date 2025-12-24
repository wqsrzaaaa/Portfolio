"use client";

import { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { SkillBubble } from "./SkillBubble";
import Image from "next/image";

const skills = [
  "htmll.png",
  "js.png",
  "ts.png",
  "react.png",
  "next.png",
  "css.png",
  "tailwind.png",
  "botstrap.png",
  "Gsap.png",
  "github.png",
  "node-js.png",
  "exp.png",
  "mongodb.png",
  "PostMan.png",
  "frammer.webp",
];

export default function TechCloud() {
  return (
    <div className="slider">
      <div className="slide-track">
        {[...skills , ...skills].map((imgs , i )=> (
          <div key={i} className="slide">
            <Image src={`/${imgs}`} alt="" width={100} height={100} className="skillsimg" />
          </div>
        ))}
      </div>
    </div>

  );
}
