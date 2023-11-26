import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobally } from "../myContext/MyContext";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  const { isDarkActive } = useGlobally();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="pt-40 w-11/12 max-w-7xl m-auto">
      <p className="text-xl">Words about myself</p>
      <div className="text-[40px] max-w-5xl py-8 max-[1000px]:text-4xl max-[500px]:text-3xl">
        <p>
          I am a passionate and dedicated frontend developer on the brink of an
          exciting journey in the tech universe. With a pretty solid foundation
          in vanilla coding and a flair for crafting interactive experiences
          using React, I bring a fresh perspective to the world of web
          development.
        </p>
        <Link
          to={`about`}
          className={`border-[3px] py-2 px-8 rounded-full mt-4 text-xl transition-all duration-200 ${
            isDarkActive
              ? "border-[var(--lightColor)] hover:bg-[var(--lightColor)] hover:text-[var(--darkColor)]"
              : "border-[var(--darkColor)] hover:bg-[var(--darkColor)] hover:text-[var(--lightColor)]"
          }`}
          type="button"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
