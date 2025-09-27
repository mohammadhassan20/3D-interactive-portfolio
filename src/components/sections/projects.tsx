"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto md:h-[130vh]">
      <Link href={"#projects"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-32"
          )}
        >
          Projects
        </h2>
      </Link>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.src} project={project} />
        ))}
      </div>
    </section>
  );
};
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="group/modal-btn flex w-full max-w-[420px] justify-center bg-transparent">
          <div className="project-card relative w-full overflow-hidden rounded-[34px] border border-white/20 bg-white/80 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.4)] transition-transform duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_35px_120px_-45px_rgba(0,0,0,0.5)] dark:border-white/10 dark:bg-black/60">
            <div
              className="relative h-56 w-full overflow-hidden"
              style={{ backgroundImage: project.gradient ?? "" }}
            >
              <Image
                className="pointer-events-none h-full w-full object-cover opacity-95 transition-transform duration-700 ease-out group-hover/modal-btn:scale-[1.05]"
                src={project.src}
                alt={project.title}
                width={640}
                height={400}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_55%)]" />
              <div className="absolute inset-0 bg-black/15 mix-blend-soft-light dark:bg-black/40" />
            </div>
            {(project.skills.frontend?.length || project.skills.backend?.length) && (
              <div className="flex flex-col gap-4 px-8 pt-6 pb-2 bg-transparent">
                {project.skills.frontend?.length ? (
                  <FloatingDock
                    items={project.skills.frontend}
                    desktopClassName="bg-white/80 dark:bg-black/60"
                    showHint={false}
                  />
                ) : null}
                {project.skills.backend?.length ? (
                  <FloatingDock
                    items={project.skills.backend}
                    desktopClassName="bg-white/80 dark:bg-black/60"
                    showHint={false}
                  />
                ) : null}
              </div>
            )}
            <div className="flex flex-col gap-4 bg-white/85 px-8 py-8 text-left backdrop-blur dark:bg-black/70">
              <p className="text-xs font-semibold uppercase tracking-[0.5em] text-neutral-500 dark:text-neutral-400">
                {project.issueYear ?? project.tagline ?? project.category}
                {project.issueYear && !project.issueYear?.toString().includes(project.category) && (
                  <span className="ml-2 font-sans text-[0.8rem] tracking-[0.4em] text-neutral-400">
                    {project.issueYear}
                  </span>
                )}
              </p>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                {project.title}
              </h3>
              {project.summary && (
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {project.summary}
                </p>
              )}
              <p className="text-sm font-semibold" style={{ color: project.accentColor ?? "#2563eb" }}>
                {project.category}
              </p>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[80%] overflow-auto">
          <SmoothScroll isInsideModal={true}>
            <ModalContent>
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4">
            <button className="w-28 rounded-md border border-gray-300 bg-gray-200 px-2 py-1 text-sm text-black dark:border-black dark:bg-black dark:text-white">
              Cancel
            </button>
            <Link href={project.live} target="_blank">
              <button className="w-28 rounded-md border border-black bg-black px-2 py-1 text-sm text-white dark:bg-white dark:text-black">
                Visit
              </button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <>
      <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
        {project.title}
      </h4>
      <div className="flex flex-col md:flex-row md:justify-evenly max-w-screen overflow-hidden md:overflow-visible">
        <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
          <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
            Frontend
          </p>
          {project.skills.frontend?.length > 0 && (
            <FloatingDock items={project.skills.frontend} />
          )}
        </div>
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-row md:flex-col-reverse justify-center items-center gap-2 text-3xl mb-8">
            <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-500">
              Backend
            </p>
            <FloatingDock items={project.skills.backend} />
          </div>
        )}
      </div>
      {/* <div className="flex justify-center items-center">
        {project.screenshots.map((image, idx) => (
          <motion.div
            key={"images" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={`${project.src.split("1.png")[0]}${image}`}
              alt="screenshots"
              width="500"
              height="500"
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div> */}
      {project.content}
    </>
  );
};
