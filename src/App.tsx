import "react";
import SideBar from "./components/SideBar";
import { motion, useScroll, useTime, useTransform } from "motion/react";
import TechBox from "./components/TechBox";
import { Isometric, IsometricContainer, IsometricGrid } from "isometric-react";
import IsometricPage from "./components/IsometricPage";
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
  ];
  const projects = [
    "https://gravity.notaroomba.dev",
    "https://nivelesdeniveles.org",
    "https://asteroids.notaroomba.dev",
    "https://supdoc.org",
    "https://makinator.notaroomba.dev",
  ];
  const time = useTime();
  const { scrollYProgress } = useScroll();

  // Array to store random values
  const randomValues: {
    randomXFrom: number;
    randomXTo: number;
    randomYFrom: number;
    randomYTo: number;
    randomRotateFrom: number;
    randomRotateTo: number;
  }[] = [];

  return (
    <div className="flex bg-black text-white_smoke">
      <SideBar />
      <div className="flex ml-72 flex-col w-full mb-4">
        <div id="home" className="h-[100vh] flex">
          <div className="m-auto flex justify-center">
            <img
              src="/images/avatar.png"
              alt="avatar"
              className="w-1/4 my-auto"
            />
            <div className="flex flex-col my-auto">
              <p className="text-3xl font-normal">hey there, im</p>
              <p className=" text-8xl font-extrabold">NotARoomba</p>
              <p className="text-xl font-normal">
                a full-stack developer who does a bit of everything
              </p>
            </div>
          </div>
        </div>
        <div id="about" className="h-[100vh] px-8 relative">
          <div className="absolute z-50 top-0 left-0 flex flex-col w-1/2 gap-4 backdrop-blur-sm p-8 rounded-xl">
            <p className="font-extrabold text-8xl">about me</p>
            <p className="font-medium text-xl">
              current high school senior. im into full-stack development,
              embedded programming, and pcb design. i am an avid
              musician/composer where i play piano, cello and drums. in my free
              time i usually read, listen to music, or create obscenities with
              code.
            </p>
          </div>
          <motion.div className="flex justify-center absolute h-1/2 w-full left-0 top-1/2 flex-wrap gap-x-8 ">
            {technologies.map((tech, index) => {
              // Generate random values for X, Y, and rotation
              let randomXFrom =
                (Math.random() > 0.5 ? -1 : 1) * Math.random() * 200;
              let randomYFrom =
                (Math.random() > 0.5 ? -1 : 1) * Math.random() * 100;
              let randomXTo =
                (Math.random() > 0.5 ? -1 : 1) * Math.random() * 200;
              let randomYTo =
                (Math.random() > 0.5 ? -1 : 1) * Math.random() * 100;
              let randomRotateFrom =
                (Math.random() > 0.5 ? -1 : 1) * (Math.random() * 60 + 1);
              let randomRotateTo =
                (Math.random() > 0.5 ? -1 : 1) * (Math.random() * 60 + 1);

              //check if the random values are already overlapping with the previous ones and if so, generate new ones
              let i = 0;
              while (
                randomValues.some((value) => {
                  return (
                    (randomXFrom > value.randomXFrom &&
                      randomXFrom < value.randomXTo) ||
                    (randomXTo > value.randomXFrom &&
                      randomXTo < value.randomXTo) ||
                    (randomYFrom > value.randomYFrom &&
                      randomYFrom < value.randomYTo) ||
                    (randomYTo > value.randomYFrom &&
                      randomYTo < value.randomYTo)
                  );
                }) &&
                i < 200
              ) {
                randomXFrom =
                  (Math.random() > 0.5 ? -1 : 1) * Math.random() * 200;
                randomYFrom =
                  (Math.random() > 0.5 ? -1 : 1) * Math.random() * 100;
                randomXTo =
                  (Math.random() > 0.5 ? -1 : 1) * Math.random() * 200;
                randomYTo =
                  (Math.random() > 0.5 ? -1 : 1) * Math.random() * 100;
                i++;
              }

              // Store the random values in the array
              randomValues.push({
                randomXFrom,
                randomXTo,
                randomYFrom,
                randomYTo,
                randomRotateFrom,
                randomRotateTo,
              });

              // Log the random values
              console.log(randomValues);

              return (
                <motion.div
                  key={index}
                  style={{
                    x: useTransform(
                      scrollYProgress,
                      [0, 1],
                      [randomXFrom, randomXTo], // Use randomXFrom and randomXTo
                    ),
                    y: useTransform(
                      scrollYProgress,
                      [0, 1],
                      [randomYFrom, randomYTo], // Use randomYFrom and randomYTo
                    ),
                    rotate: useTransform(
                      time,
                      [0, 1000 * 50],
                      [randomRotateFrom, randomRotateTo],
                      { clamp: false },
                    ),
                  }}
                >
                  <TechBox src={tech.src} name={tech.name} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <div id="projects" className="h-[100vh] relative px-8">
          <p className="text-8xl font-extrabold">projects</p>
          <div className="gap-8 flex">
            <IsometricContainer>
              <Isometric className="flex flex-wrap w-full h-full gap-8 overflow-y-scroll">
                {projects.map((project, index) => (
                  <IsometricPage key={index} url={project} />
                ))}
              </Isometric>
            </IsometricContainer>
          </div>
        </div>
        <div id="contact" className="h-[100vh] relative px-8 pt-14">
          <p className="text-8xl font-extrabold">contact</p>
        </div>
      </div>
    </div>
  );
}
