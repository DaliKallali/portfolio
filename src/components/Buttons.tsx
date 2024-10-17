"use client";
import ArrowDown from "@/assets/icons/arrow-down.svg";

type Props = {};

export const Buttons = (props: Props) => {
  return (
    <div className="flex flex-col items-center mt-8 gap-3 pointer-events-auto">
      <button
        type="button"
        className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
        onClick={(e) => {
          e.preventDefault();
          document
            ?.getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="font-serif">Explore My Work</span>
        <ArrowDown className="size-4" />
      </button>
      <button
        type="button"
        className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-grab"
        onClick={(e) => {
          e.preventDefault();
          document
            ?.getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span>👋</span>
        <span className="semi-bold">Let&apos;s Connect</span>
      </button>
    </div>
  );
};
