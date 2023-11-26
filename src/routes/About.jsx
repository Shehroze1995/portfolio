import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useGlobally } from "../myContext/MyContext";
import Footer from "../components/Footer";

const About = () => {
  const { isDarkActive } = useGlobally();

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div
      className={`min-h-[calc(100vh-120px)] clashFont transition-all duration-300 ${
        isDarkActive
          ? "bg-[var(--darkColor)] text-[var(--lightColor)]"
          : "bg-[var(--lightColor)] text-[var(--darkColor)]"
      }`}
    >
      <div data-aos="fade-up" className="w-11/12 max-w-7xl m-auto py-20">
        <h2 className="text-xl">
          🚀 About Me: Aspiring Frontend Developer Ready to Transform Ideas into
          Digital Reality
        </h2>
        <div className="text-4xl grid gap-8 py-12 max-[370px]:text max-[800px]:text-2xl">
          <p>
            Hello there! I&apos;m Shehroze Ahmad, a passionate and dedicated
            frontend developer on the brink of an exciting journey in the tech
            universe. With a solid foundation in vanilla coding and a flair for
            crafting interactive experiences using React, I bring a fresh
            perspective to the world of web development.
          </p>
          <p>
            Despite being in the early stages of my career, I&apos;ve already
            embarked on some thrilling projects that showcase my creativity and
            technical prowess. From building sleek user interfaces to
            implementing seamless interactions, I thrive on turning concepts
            into tangible, visually appealing digital experiences.
          </p>
          <p>
            While I may lack formal experience, my enthusiasm and commitment
            make up for it. I am currently on the lookout for an internship or
            job opportunity that will not only allow me to contribute to
            innovative projects but also provide me with the chance to learn and
            grow alongside seasoned professionals.
          </p>
          <p>
            Intrigued by the endless possibilities of frontend development, I am
            excited to bring my skills to a dynamic team where I can further
            refine my craft, contribute meaningfully, and evolve into a
            proficient developer. Let&apos;s collaborate and create something
            extraordinary together! 🌟
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;
