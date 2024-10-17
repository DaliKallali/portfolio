"use client";
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Function to handle smooth scroll to section
  const handleScroll = (sectionId: string) => {
    document?.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  // Add event listener to handle section in view for active nav item
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["home", "projects", "about", "contact"];
      let currentSection = activeSection;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const bounding = element.getBoundingClientRect();
          if (bounding.top <= window.innerHeight && bounding.bottom >= 0) {
            currentSection = section;
          }
        }
      });
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, [activeSection]);

  return (
    <div className="flex justify-center items-center my-3 w-full sticky top-0 z-50">
      <nav className="flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          className={`nav-item ${
            activeSection === "home"
              ? "bg-white text-gray-900  hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScroll("home");
          }}
        >
          Home
        </a>
        <a
          href="#projects"
          className={`nav-item ${
            activeSection === "projects"
              ? "bg-white text-gray-900  hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScroll("projects");
          }}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`nav-item ${
            activeSection === "about"
              ? "bg-white text-gray-900  hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScroll("about");
          }}
        >
          About
        </a>
        <a
          href="#contact"
          className={`nav-item ${
            activeSection === "contact"
              ? "bg-white text-gray-900  hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleScroll("contact");
          }}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
