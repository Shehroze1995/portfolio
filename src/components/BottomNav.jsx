import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobally } from "../myContext/MyContext";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { navLinks } from "../data/data";

const BottomNav = () => {
  const [currentLink, setCurrentLink] = useState(0);
  const bottomNavRef = useRef();
  const { isDarkActive, toggleDark } = useGlobally();

  window.onscroll = () => {
    if (window.scrollY > 100) {
      bottomNavRef.current.classList.add("showBottomNav");
    } else {
      bottomNavRef.current.classList.remove("showBottomNav");
    }
  };

  return (
    <div
      ref={bottomNavRef}
      className={`fixed left-[50%] translate-x-[-50%] flex items-center gap-4 capitalize text-xl py-[15px] px-10 rounded-full transition-all duration-500 opacity-0 -bottom-[100%] invisible z-10 clashFont max-[500px]:px-6 max-[500px]:gap-3 max-[400px]:text-base max-[350px]:py-2 max-[350px]:px-4 max-[350px]:text-sm ${
        isDarkActive
          ? "bg-[var(--lightColor)] text-[var(--darkColor)]"
          : "bg-[var(--darkColor)] text-[var(--lightColor)]"
      }`}
    >
      {navLinks.map((link) => {
        const { id, title } = link;
        return (
          <Link
            to={title == "home" ? "/portfolio/" : title}
            onMouseOver={() => setCurrentLink(id)}
            onMouseLeave={() => setCurrentLink(0)}
            className="overflow-hidden"
            key={id}
          >
            {title}
            <div
              className={`w-full border-b-[3px] transition-all duration-300 ${
                isDarkActive
                  ? "border-[var(--darkColor)]"
                  : "border-[var(--lightColor)]"
              } ${
                currentLink == id
                  ? "translate-x-0"
                  : "-translate-x-[100%] invisible"
              }`}
            />
          </Link>
        );
      })}
      {isDarkActive ? (
        <MdNightlight
          onClick={() => toggleDark()}
          className="-rotate-45 text-3xl cursor-pointer max-[370px]:text-xl max-[370px]:-mt-1"
        />
      ) : (
        <MdLightMode
          onClick={() => toggleDark()}
          className="text-3xl cursor-pointer max-[370px]:text-xl max-[370px]:-mt-1"
        />
      )}
    </div>
  );
};

export default BottomNav;
