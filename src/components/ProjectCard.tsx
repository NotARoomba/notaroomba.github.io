import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  name: string;
  url: string;
  githubUrl?: string;
  description: string;
  imageSrc?: string;
}

const card = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger children by .3 seconds
    },
  },
  hidden: {
    opacity: 0,
  },
};

export default function ProjectCard({
  name,
  url,
  githubUrl,
  description,
  imageSrc = "/placeholder.svg?height=300&width=300", // Updated placeholder for square image
}: ProjectProps) {
  return (
    <motion.div //0 139 245 / 0.2
      key={name}
      className="bg-neutral-900 h-fit rounded-xl overflow-hidden w-full max-w-sm mx-auto hover:shadow-lg hover:shadow-argentinian_blue-400/40 transition-shadow duration-300"
      initial="hidden"
      whileInView="visible"
      variants={card}
    >
      {/* Square image container */}
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={`${name} project screenshot`}
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex gap-3">
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-argentinian_blue-400 hover:bg-argentinian_blue-500 text-white_smoke px-4 py-2 rounded-md transition-colors"
            >
              <ExternalLink size={16} />
              <span>Visit Site</span>
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white_smoke px-4 py-2 rounded-md transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
