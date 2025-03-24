"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function SideBar() {
  const [active, setActive] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-7 right-4 z-50 p-2 bg-black/80 rounded-md"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed h-full bg-black/95 z-40 transition-all duration-300 ${
          isMobile
            ? isOpen
              ? "w-full right-0"
              : "w-full -right-full"
            : "w-[260px] left-0"
        }`}
      >
        <div className="h-full flex flex-col justify-center">
          <div className="flex flex-col gap-y-12 text-center">
            {/* <NavItem to="home" label="home" />
            <NavItem to="about" label="about" />
            <NavItem to="projects" label="projects" />
            <NavItem to="contact" label="contact" /> */}
            <Link
              spy={true}
              smooth={true}
              duration={500}
              to="home"
              offset={-20}
              isDynamic={true}
              onSetActive={() => setActive("home")}
              onClick={() => isMobile && setIsOpen(false)}
              className={`text-3xl md:text-4xl lg:text-5xl font-semibold group cursor-pointer max-w-fit mx-auto duration-300 transition-all ${
                active === "home"
                  ? "text-white_smoke"
                  : "text-white_smoke/70 hover:text-white_smoke"
              }`}
            >
              home
              <span
                className={`block transition-all duration-500 h-1 bg-argentinian_blue ${
                  active === "home"
                    ? "max-w-full"
                    : "max-w-0 group-hover:max-w-full"
                }`}
              ></span>
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              to="about"
              offset={-20}
              isDynamic={true}
              onSetActive={() => setActive("about")}
              onClick={() => isMobile && setIsOpen(false)}
              className={`text-3xl md:text-4xl lg:text-5xl font-semibold group cursor-pointer max-w-fit mx-auto duration-300 transition-all ${
                active === "about"
                  ? "text-white_smoke"
                  : "text-white_smoke/70 hover:text-white_smoke"
              }`}
            >
              about
              <span
                className={`block transition-all duration-500 h-1 bg-argentinian_blue ${
                  active === "about"
                    ? "max-w-full"
                    : "max-w-0 group-hover:max-w-full"
                }`}
              ></span>
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              to="projects"
              offset={-20}
              isDynamic={true}
              onSetActive={() => setActive("projects")}
              onClick={() => isMobile && setIsOpen(false)}
              className={`text-3xl md:text-4xl lg:text-5xl font-semibold group cursor-pointer max-w-fit mx-auto duration-300 transition-all ${
                active === "projects"
                  ? "text-white_smoke"
                  : "text-white_smoke/70 hover:text-white_smoke"
              }`}
            >
              projects
              <span
                className={`block transition-all duration-500 h-1 bg-argentinian_blue ${
                  active === "projects"
                    ? "max-w-full"
                    : "max-w-0 group-hover:max-w-full"
                }`}
              ></span>
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              to="contact"
              offset={-20}
              isDynamic={true}
              onSetActive={() => setActive("contact")}
              onClick={() => isMobile && setIsOpen(false)}
              className={`text-3xl md:text-4xl lg:text-5xl font-semibold group cursor-pointer max-w-fit mx-auto duration-300 transition-all ${
                active === "contact"
                  ? "text-white_smoke"
                  : "text-white_smoke/70 hover:text-white_smoke"
              }`}
            >
              contact
              <span
                className={`block transition-all duration-500 h-1 bg-argentinian_blue ${
                  active === "contact"
                    ? "max-w-full"
                    : "max-w-0 group-hover:max-w-full"
                }`}
              ></span>
            </Link>
          </div>
          <span className="absolute right-0 h-5/6 top-1/2 -translate-y-1/2 w-0.5 bg-white/30" />
        </div>
      </div>
    </>
  );
}
