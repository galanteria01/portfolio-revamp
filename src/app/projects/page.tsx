"use client";

import DarkModeSwitch from "@/components/dark-mode-switch";
import HomeButton from "@/components/home-button";
import ProjectCard from "@/components/project-card";
import RedirectButton from "@/components/redirect-button";
import { Project } from "@/types/Project";
import { projects } from "@/utils/const";
import { motion } from "motion/react";

export default function Projects() {
  return (
    <motion.main className="relative flex min-h-screen flex-col items-center justify-center p-4 md:p-12">
      <h2 className="text-amber-500 text-2xl md:text-4xl font-bold mb-4 md:mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
        {projects.map((item: Project, index: number) => {
          return (
            <div key={index} className="flex justify-center m-4 z-10">
              <ProjectCard item={item} />
            </div>
          );
        })}
      </div>

      <RedirectButton href="/timeline" title="Know the Story" />
      <DarkModeSwitch />
      <HomeButton />
    </motion.main>
  );
}
