import { motion } from "framer-motion";

export function SkillBubble({ skill, initialX, initialY, constraintsRef }) {
  return (
    <motion.img
      src={`/${skill}`}
      alt={skill}
      className="absolute w-16 h-16 cursor-grab"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      animate={{
        x: [0, initialX, -90, 0],
        y: [0, initialY, 90, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
      drag
      dragConstraints={constraintsRef}
      draggable={false}
    />
  );
}
