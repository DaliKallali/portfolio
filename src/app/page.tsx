import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { TapeSection } from "@/sections/Tape";

// export default function Home() {
//   return (
//     <div>
//       <Header />
//       <HeroSection />
//       <ProjectsSection />
//       <TapeSection />
//       <Skills />
//       <AboutSection />
//       <ContactSection />
//       <Footer />
//     </div>
//   );
// }
export default function Home() {
  return (
    <div>
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <TapeSection />
      <Skills />
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
