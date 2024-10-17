"use client";
import { SectionHeader } from "@/components/SectionHeader";
import book7HImage from "@/assets/images/7habits.jpg";
import bookRWNImage from "@/assets/images/RealWorldNext.jpg";
import { Card } from "@/components/Card";
import Image from "next/image";
import mapImage from "@/assets/images/map.png";
import { CardHeader } from "@/components/CardHeader";
import { motion } from "framer-motion";
import { useRef } from "react";
const hobbies = [
  { title: "Space", emoji: "🧑‍🚀" },
  { title: "Sports", emoji: "⛹️" },
  { title: "Art", emoji: "🎨" },
  { title: "Chess", emoji: "♟️" },
  { title: "Fitness", emoji: "🏋️" },
  { title: "Gaming", emoji: "🎮" },
  { title: "Music", emoji: "🎵" },
  { title: "Reading", emoji: "📖" },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-8 lg:py-12">
      <div className="container py-8 lg:py-16">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspsires me"
        />
        <div className="mt-14 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
            <Card className="h-[320px] col-span-full md:h-[380px] mx-auto w-full  md:col-span-3">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="flex flex-row items-center gap-4 mt-0">
                <div className="w-40 mx-auto mt-0">
                  <Image src={bookRWNImage} alt="book cover" />
                </div>
                <div className="w-40 mx-auto mt-0">
                  <Image src={book7HImage} alt="book cover" />
                </div>
              </div>
            </Card>
            <Card className="h-[320px] col-span-full md:h-[380px] md:col-span-4 p-0 flex-col">
              <CardHeader
                title="Beyond the Code"
                description="Explore my Interest and Hobbies beyond the digital realm."
                className="px-6 pt-6"
              />

              <div
                className="flex-1 space-x-2 md:space-x-4 space-y-1"
                ref={constraintRef}
              >
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.title}
                    className={`inline-flex items-center cursor-move gap-5 px-8 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-2 md:py-3 ${
                      index === 0 ? "ml-2" : ""
                    }`}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950 ">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
          <Card className="h-[320px] p-0">
            <Image
              src={mapImage}
              alt="map"
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out active:scale-150"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};
