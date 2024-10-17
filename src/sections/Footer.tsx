import { FaLinkedin, FaGithub } from "react-icons/fa";
import ArrowRightIcon from "@/assets/icons/arrow-up-right.svg";
export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] pointer-events-none -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 text-sm flex flex-col md:flex-row md:items-center md:justify-center items-center gap-8 z-10">
          <div className="text-white/40 md:justify-between">
            &copy;2024. All rights reserved.
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 z-10">
            <a
              href="https://www.linkedin.com/in/mohamed-ali-kallali-engineering"
              target="_blank"
              rel="noopener noreferrer"
              className="md:m-7 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>LinkedIn</span>
              <FaLinkedin size={30} />
              <ArrowRightIcon />
            </a>
            <a
              href="https://github.com/DaliKallali/"
              target="_blank"
              rel="noopener noreferrer"
              className=" md:m-7 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Github</span>
              <FaGithub size={30} />
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
