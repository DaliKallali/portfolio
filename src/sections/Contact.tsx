import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { HiOutlineMail } from "react-icons/hi";
export const ContactSection = () => {
  return (
    <div className="py-16 pt-12">
      <div className="container">
        <div
          className="relative bg-gradient-to-r from-emerald-300 
         to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left overflow-hidden z-0"
        >
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-8">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together.
              </h2>
              <p className="text-sm md:text-base mt-2 text-justify">
                Ready to turn your dream project into something exceptional?
                Let&apos;s chat and discuss how I can help you achieve your
                goals.
              </p>
            </div>
            <a
              href="mailto:kallali.mohamedali@gmail.com"
              className="inline-flex items-center gap-2 border border-white/15 text-white bg-gray-900 h-12 px-6 rounded-xl cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail size={32} color="emerald" />
              <span className="text-nowrap">Contact Me</span>
              <ArrowUpRightIcon className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
