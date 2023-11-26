import { useEffect } from "react";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import Aos from "aos";
import "aos/dist/aos.css";
import heroImg from "../assets/heroImg.jpg";
import developerImg from "../assets/developer.jpg";
import pakImg from "../assets/pak.jpg";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <section data-aos="fade-up" className="w-11/12 max-w-7xl m-auto text-[50px] pt-44 relative max-[1000px]:text-[35px] max-[1000px]:pt-20 max-[500px]:text-[30px]">
        <p>
          Hi there, my name is{" "}
          <span className="border-b-[3px] border-gray-500">Shehroze</span>.{" "}
          <span className="inline-block w-10 h-10 -mb-1 transition-all duration-500 hover:scale-[5]">
            <img
              className="rounded-full"
              src={heroImg}
              alt="hero section image"
            />
          </span>
        </p>
        <p>
          I&apos;m a Frontend Developer{" "}
          <span className="inline-block w-10 h-10 -mb-1 transition-all duration-500 hover:scale-[5]">
            <img
              className="rounded-full"
              src={developerImg}
              alt="hero section image"
            />
          </span>{" "}
          based in Pakistan.{" "}
          <span className="inline-block w-10 h-10 -mb-1 transition-all duration-500 hover:scale-[5]">
            <img
              className="rounded-full"
              src={pakImg}
              alt="hero section image"
            />
          </span>
        </p>
        <p>I love to make new web experiences for the people.</p>
        <div className=" absolute -bottom-40 right-0 flex flex-col gap-4 items-center w-12 max-[400px]:-bottom-48">
          <p className=" rotate-90 -translate-y-10 tracking-[.8rem] text-base">
            SCROLL
          </p>
          <LiaLongArrowAltDownSolid className="text-3xl" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
