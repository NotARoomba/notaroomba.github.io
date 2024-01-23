import { Element } from "react-scroll";
import BackgroundEffect from "../components/BackgroundEffect";
import RotatingButton from "../components/RotatingButton";

export default function Home() {
  return (
    <div className="bg-black text-white h-[200vh] w-full flex flex-col snap-mandatory">
      <div id="start" className="h-screen w-screen flex">
        <div className="m-auto justify-center  flex flex-col">
          <p className="text-8xl text-center font-bold mb-2">NotARoomba</p>
          <RotatingButton title={"Start"} to="about" />
        </div>
      </div>
      <div className="h-screen w-screen flex" >
        <Element name="about" />
        <div className="m-auto justify-center  flex flex-col" >
          <div className="flex flex-col justify-center text-center w-1/2 gap-y-4">
            <p className="text-8xl font-bold">About Me</p>
            <p className="text-xl w-3/4 mx-auto">I'm a high school student that likes to explore code for fun. My
            main programming languages are JavaScript, Typescript, C++, and Java.</p>
          </div>
          <div className="flex flex-col justify-center text-center w-1/2">

          </div>
          {/* insert 3d model of laptop here */}
        </div>
      </div>
      <BackgroundEffect />
    </div>
  );
}
