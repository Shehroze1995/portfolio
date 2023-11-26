import { useEffect } from "react";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoGithub,
} from "react-icons/io";
import { SiRedux, SiReactrouter, SiTailwindcss } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import Aos from "aos";
import "aos/dist/aos.css";

const skills = [
  { id: 1, title: "HTML", svg: <IoLogoHtml5 className="text-orange-500" /> },
  { id: 2, title: "CSS", svg: <IoLogoCss3 className="text-blue-500" /> },
  { id: 3, title: "Javascript", svg: <IoLogoJavascript className="text-yellow-500" /> },
  { id: 4, title: "React", svg: <IoLogoReact className="text-blue-500" /> },
  { id: 5, title: "Redux Toolkit", svg: <SiRedux className="text-purple-500" /> },
  { id: 6, title: "React Router", svg: <SiReactrouter className="text-red-500" /> },
  { id: 7, title: "Tailwind", svg: <SiTailwindcss className="text-blue-500" /> },
  { id: 8, title: "Github", svg: <IoLogoGithub className="text-gray-500" /> },
];

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <div data-aos="fade-up" className="w-11/12 max-w-7xl m-auto pt-24">
      <p className="text-5xl">Technologies</p>
      <p className="text-xl pl-3">I have worked with</p>
      <section className="grid grid-cols-4 gap-y-8 py-20 max-[500px]:pb-0 max-[500px]:grid-cols-2 max-[1000px]:grid-cols-3 ">
        {skills.map((skill) => {
          const { id, title, svg } = skill;
          return (
            <article className=" flex flex-col items-center justify-center" key={id}>
              <div className=" flex items-center justify-center text-5xl">{svg}</div>
              <p className="text-xl">{title}</p>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Skills;
