import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
import { useGlobally } from "../myContext/MyContext";

const Contact = () => {
  const { isDarkActive } = useGlobally();

  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div
      className={`min-h-[calc(100vh-120px)] clashFont transition-all duration-300 ${
        isDarkActive
          ? "bg-[var(--darkBg)] text-[var(--lightColor)]"
          : "bg-[var(--lightBg)] text-[var(--darkColor)]"
      }`}
    >
      <div
        data-aos="fade-up"
        className="w-11/12 max-w-7xl m-auto py-20 text-4xl grid gap-10 max-[375px]:text-xl max-[800px]:text-2xl "
      >
        <h3>
          📩{" "}
          <span
            className={`border-b-[3px] ${
              isDarkActive
                ? "border-b-[var(--lightColor)]"
                : "border-b-[var(--darkColor)]"
            }`}
          >
            Get in Touch!
          </span>
        </h3>
        <p>
          I&apos;m thrilled that you want to connect! Whether you have a project
          in mind, a question, or just want to say hello, I&apos;d love to hear
          from you. Feel free to drop me an email or connect through social
          media. Let&apos;s turn your ideas into reality!
        </p>
        <div className="grid gap-4">
          <p>
            📧{" "}
            <span
              className={`border-b-[3px] ${
                isDarkActive
                  ? "border-b-[var(--lightColor)]"
                  : "border-b-[var(--darkColor)]"
              }`}
            >
              Email:
            </span>
          </p>
          <a
            className="text-blue-500"
            href="mailto:shehrozeahmad@yahoo.com"
            rel="noreferrer"
          >
            shehrozeahmad@yahoo.com
          </a>
        </div>
        <div className="grid gap-4">
          <p>
            🌐{" "}
            <span
              className={`border-b-[3px] ${
                isDarkActive
                  ? "border-b-[var(--lightColor)]"
                  : "border-b-[var(--darkColor)]"
              }`}
            >
              Social Media:
            </span>
          </p>
          <p>
            Connect with me on{" "}
            <a
              className="text-blue-500"
              href="https://www.linkedin.com/in/shehroze-ahmad-772586284/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            and{" "}
            <a
              className="text-blue-500"
              href="https://www.instagram.com/mr.shehrox/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            . I&apos;m always ready for new conversations and exciting
            collaborations!
          </p>
        </div>
        <p>Looking forward to hearing from you.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
