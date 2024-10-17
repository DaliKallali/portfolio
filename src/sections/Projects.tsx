import winperksLandingPage from "@/assets/images/winperks.png";
import hezzmakeltekLandingPage from "@/assets/images/hezzmakeltek.png";
import echoverseLandingPage from "@/assets/images/echoverse.png";
import syncmanagerLandingPage from "@/assets/images/syncmanager.png";

import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";

const portfolioProjects = [
  {
    company: "Winperks",
    year: "2022",
    title: "Winperks | The World’s Leading Sports Predictions Platform",
    results: [
      { title: "Design of the web application" },
      { title: "Features and functionalities" },
      { title: " Data processing and prediction algorithm" },
      { title: "User-friendly and efficient solutions" },
    ],
    link: "https://winperks.info",
    image: winperksLandingPage,
  },
  {
    company: "",
    year: "2024",
    title: "HezzMakeltek | Food Ordering App",
    results: [
      { title: "Entreprise-level MERN App" },
      { title: "Features and functionalities" },
      { title: "Continuous Integration and Continuous Deployment (CI/CD)" },
      { title: "Learning Experience" },
    ],
    link: "https://hezzmakeltek-mern-frontend.onrender.com",
    image: hezzmakeltekLandingPage,
  },
  {
    company: "",
    year: "2024",
    title: "Echoverse | Social Media App",
    results: [
      { title: "Enhanced user experience" },
      { title: "Features and functionalities" },
      { title: "Practical Application" },
    ],
    link: "https://echoverse-react.netlify.app",
    image: echoverseLandingPage,
  },
  {
    company: "",
    year: "2024",
    title: "SyncManager | Dashboard (Front-end only)",
    results: [
      { title: "Implementing of features and functionalities" },
      { title: " User-friendly and efficient solutions" },
      { title: "Learning Experience" },
    ],
    link: "https://syncmanager.netlify.app ",
    image: syncmanagerLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow=" Real-world Results"
          title="Featured Projects"
          description="See how I transoformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt- gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${index * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>

                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      type="button"
                      className="bg-white text-gray-950 h-10 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-3"
                    >
                      <span>Visit Live Site </span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
