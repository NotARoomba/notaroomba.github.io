import { useState } from "react";
import { Link } from "react-scroll";

export default function SideBar() {
    const [active, setActive] = useState("home")
  return (
    <div className="fixed h-full w-72 justify-center  flex">
      <div className="m-auto flex flex-col gap-y-12 text-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="home"
          offset={-50}
          onSetActive={() => setActive("home")}
          className="text-5xl font-semibold group cursor-pointer max-w-fit mx-auto"
        >
          home
          <span className={"block transition-all duration-500 h-1 bg-argentinian_blue " + (active == "home" ? "max-w-full " : " max-w-0 group-hover:max-w-full")}></span>
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="about"
          offset={-50}
          onSetActive={() => setActive("about")}
          className="text-5xl font-semibold group cursor-pointer max-w-fit mx-auto"
        >
            about
            <span className={"block transition-all duration-500 h-1 bg-argentinian_blue " + (active == "about" ? "max-w-full " : " max-w-0 group-hover:max-w-full")}></span>
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          to="projects"
          onSetActive={() => setActive("projects")}
          className="text-5xl font-semibold group cursor-pointer max-w-fit mx-auto"
        >
            projects
            <span className={"block transition-all duration-500 h-1 bg-argentinian_blue " + (active == "projects" ? "max-w-full " : " max-w-0 group-hover:max-w-full")}></span>
        </Link>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to="contact"
          offset={-50}
          onSetActive={() => setActive("contact")}
          className="text-5xl font-semibold group cursor-pointer max-w-fit mx-auto"
        >
            contact
            <span className={"block transition-all duration-500 h-1 bg-argentinian_blue " + (active == "contact" ? "max-w-full " : " max-w-0 group-hover:max-w-full")}></span>
        </Link>

      </div>
      <line className=" h-5/6 my-auto w-0.5 bg-white_smoke/60"></line>
    </div>
  );
}
