import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useGlobally } from "../myContext/MyContext";
import { projects } from "../data/data";
import Footer from "../components/Footer";

const Projects = () => {
  const { isDarkActive } = useGlobally();

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div
      className={`min-h-[calc(100vh-120px)] clashFont overflow-hidden transition-all duration-300 ${
        isDarkActive
          ? "bg-[var(--darkBg)] text-[var(--lightColor)]"
          : "bg-[var(--lightBg)] text-[var(--darkColor)]"
      }`}
    >
      <div className="w-11/12 max-w-7xl m-auto pt-20">
        <h2 className="text-4xl">Projects</h2>
        <p className="text-xl">I have build</p>
        <section className="my-20 grid grid-cols-3 gap-8 max-[700px]:grid-cols-1 max-[1020px]:grid-cols-2">
          {projects.map((project) => {
            const { id, title, desc, img, liveURL, sourceCode } = project;
            return (
              <article data-aos="fade-up" className="flex flex-col" key={id}>
                <img src={img} alt={title} />
                <div className="grid p-4 gap-3 flex-1 items-start">
                  <p className="text-2xl underline max-[370px]:text-xl">
                    {title}
                  </p>
                  <p className="text-xl max-[370px]:text-base">{desc}</p>
                  <div className="grid gap-3 text-center text-xl self-end max-[370px]:text-base">
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
      </div>
        <Footer/>
    </div>
  );
};

export default Projects;
