// components/TechSlider.jsx
"use client";

import React, { useEffect, useState } from "react";
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
  "frammer.webp"
];

const TechSlider = () => {
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const width = skills.length * 3 * 80 + skills.length * 3 * 48; 
    setTrackWidth(width);
  }, []);

  return (
    <div className="w-full py-6 relative select-none">
      <h2 className="text-4xl font-extrabold md:pl-10 pl-5">
        /Technologies I Use
      </h2>

      <div className="slider relative overflow-hidden mt-6">
        <div className="absolute left-0 top-0 h-full w-16 pointer-events-none z-10">
          <div className="h-full w-full bg-linear-to-r from-cyan-100 to-transparent" />
        </div>

        <div className="absolute right-0 top-0 h-full w-16 pointer-events-none z-10">
          <div className="h-full w-full bg-linear-to-l from-cyan-100 to-transparent" />
        </div>

        <div
          className="slide-track flex items-center gap-12"
          style={{ width: `${trackWidth}px`, animation: "scroll 80s linear infinite" }}
        >
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div key={`${skill}-${index}`} className="slide shrink-0">
              <Image
                src={`/${skill}`}
                alt={`${skill.split(".")[0]} logo - Waqas Raza wqsrz web developer`}
                width={80}
                height={80}
                className="img"
              />
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default TechSlider;
