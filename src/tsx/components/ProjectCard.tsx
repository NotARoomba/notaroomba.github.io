import { ProjectCardProps } from "../utils/Types";
import RotatingButton from "./RotatingButton";

export default function ProjectCard({
  title,
  desc,
  image,
  code,
  website,
}: ProjectCardProps) {
  return (
    <div className="flex w-3/4 h-3/4 m-auto rounded-xl p-5 bg-neutral-900/50">
      <img src={image} className="rounded-xl w-72 mx-auto my-2" />
      <div className=" mx-20 my-auto">
        <p className="text-6xl font-bold my-4">{title}</p>
        <p className="text-xl">{desc}</p>
        <div className="flex justify-between mt-4 mx-auto">
          <RotatingButton title="Code" to={code} />
          {website && <RotatingButton title="Website" to={website} />}
        </div>
      </div>
    </div>
  );
}
