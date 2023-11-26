import { useEffect } from "react";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import Skills from "../components/Skills";
import { useGlobally } from "../myContext/MyContext";

const Home = () => {
  const { isDarkActive } = useGlobally();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className={`min-h-screen clashFont overflow-hidden transition-all duration-300 ${
        isDarkActive
          ? "bg-[var(--darkBg)] text-[var(--lightColor)]"
          : "bg-[var(--lightBg)] text-[var(--darkColor)]"
      }`}
    >
      <HeroSection />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Home;
