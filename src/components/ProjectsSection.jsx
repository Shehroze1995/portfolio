import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { projects } from "../data/data";
import { useGlobally } from "../myContext/MyContext";

const ProjectsSection = () => {
  const { isDarkActive } = useGlobally();
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <div data-aos="fade-up" className="py-32 w-11/12 max-w-7xl m-auto">
      <h2 className="text-5xl mb-20">Projects</h2>
      <section className="grid gridCols gap-8">
        {projects.slice(0, 3).map((project) => {
          const { id, title, desc, img, liveURL, sourceCode } = project;
          return (
            <article className="flex flex-col" key={id}>
              <div className="">
                <img
                  className="rounded-xl w-full h-full object-contain"
                  src={img}
                  alt={title}
                />
              </div>
              <div className="grid p-4 gap-3 flex-1 items-start">
                <p className="text-2xl underline">{title}</p>
                <p className="text-xl">{desc}</p>
                <div className="grid gap-3 text-center text-xl self-end">
                  <Link
                    to={liveURL}
                    target="_blank"
                    className={`border-[3px] transition-all duration-300 rounded-full py-2 ${
                      isDarkActive
                        ? "border-[var(--lightColor)] hover:bg-[var(--lightColor)] hover:text-[var(--darkColor)]"
                        : "border-[var(--darkColor)] hover:bg-[var(--darkColor)] hover:text-[var(--lightColor)]"
                    }`}
                    type="button"
                  >
                    Live
                  </Link>
                  <Link
                    to={sourceCode}
                    target="_blank"
                    className={`border-[3px] transition-all duration-300 rounded-full py-2 ${
                      isDarkActive
                        ? "border-[var(--lightColor)] hover:bg-[var(--lightColor)] hover:text-[var(--darkColor)]"
                        : "border-[var(--darkColor)] hover:bg-[var(--darkColor)] hover:text-[var(--lightColor)]"
                    }`}
                    type="button"
                  >
                    Source Code
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>
      <Link to={`projects`}
        className={`text-xl border-[3px] inline-block w-full text-center my-8 py-3 rounded-full transition-all duration-200 ${
          isDarkActive
            ? "border-[var(--lightColor)] hover:bg-[var(--lightColor)] hover:text-[var(--darkColor)]"
            : "border-[var(--darkColor)] hover:bg-[var(--darkColor)] hover:text-[var(--lightColor)]"
        }`}
      >
        View All Projects
      </Link>
    </div>
  );
};

export default ProjectsSection;
