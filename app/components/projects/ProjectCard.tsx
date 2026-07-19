import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  img: string;
  description: string;
  github: string;
  demo?: string;
};

export default function ProjectCard({ title, img, description, github, demo }: ProjectCardProps) {
  return (
    <div className="py-0">
      <motion.div
  whileHover={{ scale: 1.03, rotate: 0.5 }}
  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
  className="
    mx-auto
    w-full
    max-w-[36rem]        /* mobile/tablet */
    sm:max-w-[40rem]
    md:max-w-[44rem]
    lg:max-w-[44rem]     /* laptop */
    xl:max-w-[52rem]     /* desktop */
    aspect-[1.75]        /* preserves screenshot ratio */
    rounded-xl overflow-hidden cursor-pointer group
    hover:-translate-y-2 hover:shadow-blue-500/40
    transition-all shadow-[0_0_25px_5px_rgba(0,0,0,0.35)]
  "
>
        {/* Background Image */}
        <img
          src={img}
          alt={title}
          className="
            w-full h-full object-fill transition-all duration-300 group-hover:blur-sm"
        />

        {/* Overlay */}
        <div
          className="
            absolute inset-0 bg-black/60 backdrop-blur-md 
            opacity-0 group-hover:opacity-100 
            transition-all duration-300 
            flex flex-col justify-center items-center text-center px-6
          "
        >
          <h2 className="text-white text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-200 text-sm mb-4">{description}</p>

          <div className="flex gap-4">
            <a
              href={github}
              target="_blank"
              className="text-white underline underline-offset-4 hover:text-blue-300"
            >
              GitHub
            </a>

            {demo && (
              <a
                href={demo}
                target="_blank"
                className="text-white underline underline-offset-4 hover:text-blue-300"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
