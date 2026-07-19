import ProjectCard from "./ProjectCard";
import { projects } from "@/app/components/data/projects";
import FadeInCascade from "@/app/components/animations/FadeInCascade";

export default function ProjectsSection() {
  return (
    <section 
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >

      {/* Section Title */}
      <FadeInCascade delay={0.1} y={20}>
        <h2
          className="
            text-3xl font-bold text-center mb-10
            text-slate-900 dark:text-white
          "
        >
          My Favorite project{" "}
          <span className="text-cyan-600 dark:text-cyan-500">Collection</span>
        </h2>
      </FadeInCascade>

      {/* Vertical stacked cards */}
      <div className="flex flex-col gap-10">
        {projects.map((p, i) => (
          <FadeInCascade key={p.title} delay={0.15 * i} y={30}>
            <ProjectCard {...p} />
          </FadeInCascade>
        ))}
      </div>
    </section>
  );
}
