import { Canvas } from "@react-three/fiber";
import BackgroundEffect from "../components/BackgroundEffect";
import RotatingButton from "../components/RotatingButton";
import Computer from "../components/Computer";
import { OrbitControls } from "@react-three/drei";
import { NoToneMapping } from "three";
import CardCarousel from "../components/CardCarousel";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div
      className="bg-black text-white w-full flex flex-col snap-always snap-mandatory"
      id="home"
    >
      <div
        id="start"
        className="h-screen w-full flex snap-center snap-always snap-mandatory"
      >
        <div className="m-auto justify-center  flex flex-col">
          <p className="text-8xl text-center font-bold mb-2">NotARoomba</p>
          <RotatingButton title={"Start"} to="about" />
        </div>
      </div>
      <div id="about" className="h-screen w-full flex snap-center">
        <div className="m-auto justify-center flex ">
          <div className="flex flex-col justify-center text-center w-1/2 gap-y-4">
            <p className="text-8xl font-bold text-right">About Me</p>
            <p className="text-xl w-2/4 ml-auto text-right">
              I'm a high school student that likes to explore code for fun. My
              main programming languages are JavaScript, Typescript, C++, and
              Java.
            </p>
          </div>
          <div className="flex flex-col justify-center text-center w-1/2 h-screen">
            <Canvas
              className="h-full w-full justify-items-start z-10"
              camera={{ position: [-10, 2, 8] }}
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
          </div>
        </div>
      </div>
      <div className="h-screen w-full flex snap-center">
        <div className="m-auto justify-center  flex flex-col ">
          <div className="flex flex-col text-center gap-16">
            <p className="text-8xl font-bold">Projects</p>
            <CardCarousel>
              <ProjectCard
                title="Niveles De Niveles"
                desc={
                  "An early warning application that mitigate the consequences of natural disasters. This project made it to the finals of the XVII Concurso Nacional de Programación in Colombia. It is made with react-native with the use of websockets to provide aid to people in dsaster prone areas. The app is free and published to the App Store and Google Play store."
                }
                image={"/img/niveles.png"}
                code={"https://github.com/NotARoomba/NivelesDeNiveles"}
                website={"https://nivelesdeniveles.org"}
              />
              <ProjectCard
                title="Tubb"
                desc={"Tubb is a utility bot with a multitude of useful commands as well as\
                  a music system for your enjoyment. Commands are straight forward\
                  unlike the complications you have to deal with in other bots. Tubb\
                  is still being constantly worked on, so please send any bugs to the\
                  GitHub repository. Feature suggestions are welcome."}
                image={"/img/tubb.png"}
                code={"https://github.com/NotARoomba/TubbBot"}
                website={"https://top.gg/bot/750123677739122819"}
              />
              <ProjectCard
                title="Simple Music Player"
                desc={
                  "Just a music player mini-project to get more familliar with C#. Its\
                  features are: play a file, play files from a directory (recursive),\
                  and play files from a directory shuffled. Compile it or look at the releases to run."
                }
                image={"/img/cmd.png"}
                code={"https://github.com/NotARoomba/Simple-Music-Player"}
              />
              <ProjectCard
                title="Simple Music Player 2"
                desc={
                  "Its back, the application no-one asked for... Simple Music Player 2!\
                  Filled with nothing but learning attempts even I'm surprised it\
                  could build. Check out the releases for this absolute unit of an attempt."
                }
                image={"/img/music.png"}
                code={"https://github.com/NotARoomba/Simple-Music-Player-2"}
              />
               <ProjectCard
                title="Bounce"
                desc={
                  " A 2 player pong game made with C++ and SDL2. Player 1 conrols are Up\
                  and Left arrow Player 2 Controls are Right and Down arrow. Complile\
                  it or look at the releases to run."
                }
                image={"/img/bounce.png"}
                code={"https://github.com/NotARoomba/Bounce"}
              />
               <ProjectCard
                title="Asteroids"
                desc={
                  "Another asteroids clone out of millions by aspiring developers to\
                  join their favorite game company by learning SDL, OpenGL, or any\
                  myriad of graphics libraries. Check it out on my website or check out the releases."
                }
                image={"/img/asteroids.png"}
                code={"https://github.com/NotARoomba/Asteroids"}
                website={"https://asteroids.notaroomba.dev"}
              />
            </CardCarousel>
          </div>
        </div>
      </div>
      <BackgroundEffect />
    </div>
  );
}
