import "react";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="flex bg-black text-white_smoke">
      <SideBar />
      <div className="flex ml-72 flex-col w-full">
        <div id="home" className="h-[100vh] flex">
          <div className="m-auto flex justify-center">
            <img src="/images/avatar.png" alt="avatar" className="w-1/4 my-auto" />
            <div className="flex flex-col my-auto">
                <p className="text-3xl font-normal">hey there, im</p>
                <p className=" text-8xl font-extrabold">NotARoomba</p>
                <p className="text-xl font-normal">a full-stack developer who does a bit of everything</p>

            </div>
          </div>
        </div>
        <div id="about" className="h-[100vh]">
          <p className="text-3xl">About</p>
        </div>
        <div id="projects" className="h-[100vh]">
          <p className="text-3xl">Projects</p>
        </div>
        <div id="contact" className="h-[100vh]">
          <p className="text-3xl">Contact</p>
        </div>
      </div>
    </div>
  );
}
