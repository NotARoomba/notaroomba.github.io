import { Canvas } from "@react-three/fiber";
import BackgroundEffect from "../components/BackgroundEffect";
import RotatingButton from "../components/RotatingButton";
import Computer from "../components/Computer";
import { OrbitControls } from "@react-three/drei";
import { NoToneMapping } from "three";
import CardCarousel from "../components/CardCarousel";
import ProjectCard from "../components/ProjectCard";
import { Suspense, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [index, setIndex] = useState([0, 0]);
  const children = [
    <ProjectCard
      title="Niveles De Niveles"
      desc={
        "An early warning application that mitigate the consequences of natural disasters. This project made it to the finals of the XVII Concurso Nacional de Programación in Colombia. It is made with react-native with the use of websockets to provide aid to people in dsaster prone areas. The app is free and published to the App Store and Google Play store."
      }
      image={"/img/niveles.png"}
      code={"https://github.com/NotARoomba/NivelesDeNiveles"}
      website={"https://nivelesdeniveles.org"}
    />,
    <ProjectCard
      title="Tubb"
      desc={
        "Tubb is a utility bot with a multitude of useful commands as well as\
      a music system for your enjoyment. Commands are straight forward\
      unlike the complications you have to deal with in other bots. Tubb\
      is still being constantly worked on, so please send any bugs to the\
      GitHub repository. Feature suggestions are welcome."
      }
      image={"/img/tubb.png"}
      code={"https://github.com/NotARoomba/TubbBot"}
      website={"https://top.gg/bot/750123677739122819"}
    />,
    <ProjectCard
      title="RoombaOS"
      desc={
        "A test operating system to learn Assembly and low level C. Planned\
      feature include, porting Asteroids and WordleCLI, FAT filesystem,\
      and some more commands. You can try out RoombaOS by downloading the\
      binary from the releases or look at the code to compile."
      }
      image={"/img/roomba.png"}
      code={"https://github.com/NotARoomba/RoombaOS"}
    />,
    <ProjectCard
      title="Asteroids"
      desc={
        "Another asteroids clone out of millions by aspiring developers to\
    join their favorite game company by learning SDL, OpenGL, or any\
    myriad of graphics libraries."
      }
      image={"/img/asteroids.png"}
      code={"https://github.com/NotARoomba/Asteroids"}
      website={"https://asteroids.notaroomba.dev"}
    />,
    <ProjectCard
      title="Wordle"
      desc={
        "A special product of desperation, boredom, and the desire to fit\
  in comes this Cli version of the (decently) popular Wordle game. After a few revisions now brings my version of Wordle to the web! It\
  has more features and cool css wizardry."
      }
      image={"/img/wordle.png"}
      code={"https://github.com/NotARoomba/Wordle"}
      website={"https://wordle.notaroomba.dev"}
    />,
    <ProjectCard
      title="Chess"
      desc={
        "Chess! A game that has been played for centuries now arrives to your\
      terminal! WIth the power of C++ and 3.5 braincells comes this\
      facinating take on the popular game."
      }
      image={"/img/chess.png"}
      code={"https://github.com/NotARoomba/Chess"}
    />,
    <ProjectCard
      title="Gravity Simulator"
      desc={
        "Originally a gravity simulator made with Python then ported to C++\
      finally reaches the web browser! This simulation is powered by a\
      rust WebAssembly backend that uses a naive implementation where all\
      the bodies have gravittional force on eachother along with a Barnes-Hut quad-tree implementation."
      }
      image={"/img/gravity.png"}
      code={"https://github.com/NotARoomba/Gravity-Simulator"}
      website={"https://gravity.notaroomba.dev"}
    />,

    <ProjectCard
      title="Devoided"
      desc={
        "Devoided is an RPG game that was developed in a hackathon and got\
      2nd place. The game is about a quantum engineer explores space-time\
      in search of traces of a deck of ancient Earth, but in his search he\
      becomes trapped in the past and future so he does everything\
      possible to repair his time clock to return to the present and\
      reunite. the letters to discover the mystery of the origin of the\
      universe."
      }
      image={"/img/devoided.png"}
      code={"https://github.com/NotARoomba/Devoided"}
      website={"https://devoided.notaroomba.dev"}
    />,
    <ProjectCard
      title="Bounce"
      desc={
        " A 2 player pong game made with C++ and SDL2. Player 1 conrols are Up\
      and Left arrow Player 2 Controls are Right and Down arrow. Complile\
      it or look at the releases to run."
      }
      image={"/img/bounce.png"}
      code={"https://github.com/NotARoomba/Bounce"}
    />,

    <ProjectCard
      title="GrindHub"
      desc={
        "GrindHub will help you turn your procrastination into your habits!\
      We built an intuitive platform where you can challenge yourself and\
      do different daily missions and receive rewards, that will help you\
      increase your level! Using GrindHub will be fun and rewarding at the\
      end of the year."
      }
      image={"/img/grindhub.png"}
      code={"https://github.com/NotARoomba/GrindHub"}
      website={"https://grindhub.notaroomba.dev"}
    />,
    <ProjectCard
      title="Koombia"
      desc={
        "Koombia lets you turn text from your science, spanish, history or\
      ethics lessons into songs for you to memorize the contents of your\
      quiz faster and easier. Using Koombia is as easy as copy, pasting,\
      and clicking. Paste your lesson into the text area and select a\
      genre for your song. It will generate a random beat with chord\
      progressions based on the genre and a text to speech will sing the\
      song."
      }
      image={"/img/koombia.png"}
      code={"https://github.com/NotARoomba/Koombia"}
      website={"https://koombia.notaroomba.dev"}
    />,
    <ProjectCard
      title="Simple Music Player"
      desc={
        "Just a music player mini-project to get more familliar with C#. Its\
      features are: play a file, play files from a directory (recursive),\
      and play files from a directory shuffled. Compile it or look at the releases to run."
      }
      image={"/img/cmd.png"}
      code={"https://github.com/NotARoomba/Simple-Music-Player"}
    />,
    <ProjectCard
      title="Simple Music Player 2"
      desc={
        "Its back, the application no-one asked for... Simple Music Player 2!\
      Filled with nothing but learning attempts even I'm surprised it\
      could build. Check out the releases for this absolute unit of an attempt."
      }
      image={"/img/music.png"}
      code={"https://github.com/NotARoomba/Simple-Music-Player-2"}
    />,
  ];
  return (
    <AnimatePresence>
      <div className="bg-black text-white w-full flex flex-col">
        <div id="home" className="h-screen w-full flex snap-center">
          <div className="m-auto justify-center  flex flex-col">
            {/* <div className="w-screen h-96 z-0 mx-auto justify-center">
        <Canvas
          className="w-screen h-96 justify-items-start z-10"
          camera={{ position: [-10, 4, 8] }}
          gl={{ antialias: true, toneMapping: NoToneMapping }}
          flat
        >
          <Roomba />
          <pointLight
            intensity={100}
            color={"#ef4444"}
            position={[-6, 5, -5]}
          />
          <pointLight
            intensity={100}
            color={"#f97316"}
            position={[6, 5, 5]}
          />
          <pointLight
            intensity={100}
            color={"#3b82f6"}
            position={[-6, 5, 5]}
          />
          <pointLight
            intensity={100}
            color={"#8b5cf6"}
            position={[6, 5, -5]}
          />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
          />
        </Canvas></div> */}
            <img
              src="/img/profile.png"
              className="w-44 lg:w-72 mx-auto z-20 my-2"
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 0.75 } }}
              className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl text-center font-bold mb-2"
            >
              NotARoomba
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.75, delay: 0.5 },
              }}
              className="mx-auto"
            >
              <RotatingButton title={"Start"} to="about" />
            </motion.div>
          </div>
        </div>
        <div className="h-screen w-screen flex flex-col snap-center">
          <div
            id="about"
            className="m-auto w-full justify-center flex flex-col-reverse lg:flex-row "
          >
            <div className="flex flex-col justify-center text-center lg:w-1/2 gap-y-4 mx-auto">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.75 } }}
                className="text-4xl 2xs:text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-bold text-center lg:text-right -mt-2 sm:mt-0"
              >
                About Me
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.75, delay: 0.5 },
                }}
                className="text-lg md:text-xl lg:w-2/4 mx-auto lg:mr-0 text-center lg:text-right w-screen px-4"
              >
                I'm a high school student who likes to write code, read, play
                music, and learn about new topics for fun. My proficient
                programming languages are JavaScript, Typescript, C++, and Java.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.75, delay: 1 },
                }}
                className="mx-auto lg:ml-auto lg:mr-0 z-20"
              >
                <RotatingButton title="Continue" to="projects" />
              </motion.div>
            </div>
            <div className="flex flex-col justify-center text-center w-full lg:w-1/2 h-72 lg:h-screen mx-auto">
              <Suspense
                fallback={
                  <img
                    className="rounded-full w-96 mx-auto"
                    src="/img/profile.png"
                  />
                }
              >
                <Canvas
                  className="w-screen justify-items-start z-10"
                  camera={{ position: [-10, 4, 8] }}
                  gl={{ antialias: true, toneMapping: NoToneMapping }}
                  flat
                >
                  {/* <ambientLight intensity={1} /> */}
                  <pointLight
                    intensity={100}
                    color={"#ef4444"}
                    position={[-6, 5, -5]}
                  />
                  <pointLight
                    intensity={100}
                    color={"#f97316"}
                    position={[6, 5, 5]}
                  />
                  <pointLight
                    intensity={100}
                    color={"#3b82f6"}
                    position={[-6, 5, 5]}
                  />
                  <pointLight
                    intensity={100}
                    color={"#8b5cf6"}
                    position={[6, 5, -5]}
                  />
                  <Computer />
                  <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    enableRotate={true}
                  />
                </Canvas>
              </Suspense>
            </div>
          </div>
        </div>
        <div className="h-screen w-screen flex snap-center">
          <div
            id="projects"
            className="m-auto align-middle w-full justify-center flex flex-col  "
          >
            <div className="flex flex-col text-center  relative ">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.75 } }}
                className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-bold mb-4"
              >
                Projects
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.75, delay: 0.5 },
                }}
                className=" text-2xl lg:text-4xl mb-14"
              >
                {index[0] + 1} / {children.length}
              </motion.p>
              <CardCarousel index={index}>
                {children.map((v, i) => (
                  <div key={i}>{v}</div>
                ))}
              </CardCarousel>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 0.75, delay: 1.5 },
                }}
                className="flex gap-4 mx-auto z-20"
              >
                <AnimatePresence>
                  {index[0] > 0 && (
                    <RotatingButton
                      title="<"
                      func={() => setIndex([index[0] - 1, index[0]])}
                    />
                  )}
                </AnimatePresence>
                <RotatingButton title={"Home"} to="home" />
                <AnimatePresence>
                  {index[0] < children.length - 1 && (
                    <RotatingButton
                      title=">"
                      func={() => setIndex([index[0] + 1, index[0]])}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
        <BackgroundEffect />
      </div>
    </AnimatePresence>
  );
}
