import "react";
import SideBar from "./components/SideBar";
import { motion } from "framer-motion";
import TechBox from "./components/TechBox";
import ProjectsSection from "./components/ProjectSection";

export default function App() {
  const technologies = [
    {
      name: "typescript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "mongodb",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "react",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "tailwindcss",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "nodejs",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "express",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "rust",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
    },
    {
      name: "c",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "c++",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "react native",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "java",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "postgresql",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "git",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "github",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "nextjs",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "linux",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      name: "supabase",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    },
  ];
  const randomPositions = technologies.map(() => ({
    x: ((Math.random() > 0.5 ? -1 : 1) * Math.random() * window.innerWidth) / 2,
    y: (Math.random() > 0.5 ? -1 : 1) * Math.random() * 75 - 800,
    rotate: (Math.random() > 0.5 ? -1 : 1) * (Math.random() * 30),
  }));

  return (
    <div className="flex bg-black text-white_smoke overflow-x-hidden relative">
      <SideBar />
      <div className="flex md:ml-72 ml-0 flex-col w-full mb-4 h-fit">
        <section id="home" className="h-screen flex p-4">
          <div className="m-auto flex flex-col md:flex-row justify-center items-center text-center md:text-left">
            <img
              src="/images/avatar.png"
              alt="avatar"
              className="w-1/2 my-4 md:my-auto"
            />
            <div className="flex flex-col my-auto px-3">
              <p className="text-2xl md:text-3xl font-normal">hey there, im</p>
              <p className="text-5xl md:text-8xl font-extrabold">NotARoomba</p>
              <p className="text-xl md:text-xl font-normal">
                a full-stack developer who does a bit of everything
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen relative px-4 md:px-8 py-8 md:py-16"
        >
          <div className="sticky top-0 z-10 bg-black/50 backdrop-blur-sm p-4 md:p-6 rounded-xl max-w-2xl">
            <h2 className="font-extrabold text-5xl lg:text-8xl mb-4">
              about me
            </h2>
            <p className="font-medium text-base md:text-lg lg:text-xl">
              current high school senior. im into full-stack development,
              embedded programming, and pcb design. i am an avid
              musician/composer where i play piano, cello and drums. in my free
              time i usually read, listen to music, or create obscenities with
              code.
            </p>
          </div>

          <div className="h-[75vh] relative">
            {technologies.map((tech, index) => {
              const floatX = (Math.random() - 0.5) * 300;
              const floatY = (Math.random() - 0.5) * 300;
              const rotate = (Math.random() - 0.5) * 90;

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={{
                    x: randomPositions[index].x * 2,
                    y: randomPositions[index].y * 2,
                    rotate: randomPositions[index].rotate,
                  }}
                  animate={{
                    x: [
                      randomPositions[index].x,
                      randomPositions[index].x + floatX,
                      randomPositions[index].x,
                    ],
                    y: [
                      randomPositions[index].y + 300,
                      randomPositions[index].y + 300 + floatY,
                      randomPositions[index].y + 300,
                    ],
                    rotate: [
                      randomPositions[index].rotate,
                      randomPositions[index].rotate + rotate,
                      randomPositions[index].rotate,
                    ],
                  }}
                  transition={{
                    duration: 30,
                    delay: index * 0.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                  style={{
                    left: `${50 + ((index % 3) - 1) * 20}%`,
                    top: `${30 + Math.floor(index / 3) * 25}%`,
                  }}
                >
                  <TechBox src={tech.src} name={tech.name} />
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen relative">
          <div className="sticky top-0 pt-8 px-4 md:px-8 z-10 bg-black/30 backdrop-blur-sm mb-10">
            <h2 className="text-5xl lg:text-8xl font-extrabold mb-4">
              projects
            </h2>
          </div>
          <div className="flex flex-col h-full flex-wrap w-full gap-4 md:gap-8 px-4 md:px-8">
            {/* {projects.map((project, index) => (
              <IsometricPage key={index} url={project.url} />
            ))} */}
            <ProjectsSection />
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="flex h-screen relative px-4 md:px-8 pt-8 md:pt-14 w-full"
        >
          <p className="absolute text-6xl lg:text-8xl font-extrabold">
            contact
          </p>
          <div className="flex flex-col gap-12 m-auto md:mx-0 md:mt-64">
            <a
              href="https://github.com/notaroomba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 md:gap-6 text-5xl hover:text-argentinian_blue transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <p className="my-auto">github</p>
            </a>

            <a
              href="https://linkedin.com/in/notaroomba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 md:gap-6 text-5xl hover:text-argentinian_blue transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <p className="my-auto">linkedin</p>
            </a>

            <a
              href="https://youtube.com/@notaroomba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 md:gap-6 text-5xl hover:text-argentinian_blue transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
              <p className="my-auto">youtube</p>
            </a>
          </div>
        </section>
      </div>
      <footer className="text-center w-full text-neutral-500 text-sm p-4 absolute bottom-0 left-1/2 -translate-x-1/2">
        &copy; 2025 Nathan Alspaugh
      </footer>
    </div>
  );
}
