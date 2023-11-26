import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdLightMode, MdNightlight } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useGlobally } from "../myContext/MyContext";
import { navLinks } from "../data/data";

const Header = () => {
  const { isDarkActive, toggleDark } = useGlobally();
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <header
      className={`py-8 text-xl clashFont transition-all duration-300 ${
        isDarkActive
          ? "bg-[var(--darkColor)] text-[var(--lightColor)]"
          : "bg-[var(--lightColor)] text-[var(--darkColor)]"
      }`}
    >
      <nav data-aos="zoom-in" className="flex items-center justify-between w-11/12 m-auto max-w-7xl">
        <Link to={"/portfolio/"}>
          <p>Shehroze Ahmad</p>
          <p>Frontend Developer</p>
        </Link>
        <ul className="flex items-center gap-6 max-[1000px]:hidden">
          {navLinks.map((link) => {
            const { id, title } = link;
            return (
              <li key={id}>
                <Link
                  to={title == "home" ? "/portfolio/" : title}
                  className={`capitalize py-4 px-6 border-[3px] rounded-full transition-all duration-200 ${
                    isDarkActive
                      ? "border-[var(--lightColor)] hover:bg-[var(--lightColor)] hover:text-[var(--darkColor)]"
                      : "border-[var(--darkColor)] hover:bg-[var(--darkColor)] hover:text-[var(--lightColor)]"
                  }`}
                >
                  {title}
                </Link>
              </li>
            );
          })}
          <button
            onClick={() => toggleDark()}
            className={`w-14 h-14 border-[3px] rounded-full flex items-center justify-center transition-all duration-300 outline-none ${
              isDarkActive
                ? "border-[var(--lightColor)] hover:bg-[var(--lightColor)]"
                : "border-[var(--darkColor)] hover:bg-[var(--darkColor)]"
            }`}
            type="button"
          >
            {isDarkActive ? (
              <MdNightlight
                className={`w-14 h-14 p-3 -rotate-45 ${
                  isDarkActive
                    ? "hover:text-[var(--darkColor)]"
                    : "hover:text-[var(--lightColor)]"
                }`}
              />
            ) : (
              <MdLightMode
                className={`w-14 h-14 p-3 ${
                  isDarkActive
                    ? "hover:text-[var(--darkColor)]"
                    : "hover:text-[var(--lightColor)]"
                }`}
              />
            )}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
