import { ProjectCardProps } from "../utils/Types";
import RotatingButton from "./RotatingButton";
import Tilt from "react-parallax-tilt";

export default function ProjectCard({
  title,
  desc,
  image,
  code,
  website,
}: ProjectCardProps) {
  return (
    <Tilt>
      <div className="flex z-40 flex-col lg:flex-row w-11/12 xl:w-3/4 xl:min-h-2/3 h-fit m-auto rounded-xl p-5 bg-neutral-900/70">
        <img
          src={image}
          className="rounded-xl w-1/4 lg:w-72 lg:min-w-72 h-1/4 m-auto"
        />
        <div className=" lg:mx-20 my-auto text-center lg:text-left">
          <p className="text-3xl xs:text-4xl sm:text-5xl font-bold my-4">
            {title}
          </p>
          <p className="text-md font-semibold w-full text-wrap">{desc}</p>
          <div className="mb-5 flex justify-start gap-8 mt-4 mx-auto lg:mr-auto lg:ml-0  w-fit">
            <RotatingButton title="Code" to={code} />
            {website && <RotatingButton title="Website" to={website} />}
          </div>
        </div>
      </div>
    </Tilt>
  );
}
