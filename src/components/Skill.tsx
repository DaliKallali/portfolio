"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
  src: string;
  tech: string;
  score: number;
};

export const Skill = ({ directionLeft, src, score, tech }: Props) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? 100 : -100,
          opacity: 0,
        }}
        transition={{ duration: 2 }}
        animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
        onViewportEnter={() => {
          if (!hasAnimated) {
            setHasAnimated(true);
          }
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src={src}
        className="rounded-full border border-gray-500 object-cover  w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 filter group-hover:grayscale transition duration-300 ease-in-out -z-10"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[radial-gradient(circle,_var(--tw-gradient-stops))]  from-emerald-300 to-sky-400 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 z-0 rounded-full">
        <div className="flex items-center justify-center h-full">
          <p className="flex flex-col items-center text-xs md:text-base justify-center font-bold opacity-100 text-black max-w-full truncate">
            <span>{tech}</span>
            {score}%
          </p>
        </div>
      </div>
    </div>
  );
};
