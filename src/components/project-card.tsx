import { Project } from "@/types/Project";
import React from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

type Props = {
  item: Project;
};

export default function ProjectCard({ item }: Props) {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [4, -4]);
  const rotateY = useTransform(x, [0, 300], [-4, 4]);

  function handleMouse(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }
  return (
    <motion.div
      style={{
        width: 400,
        height: 300,
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        borderRadius: 30,
        perspective: 400,
      }}
      onMouseMove={handleMouse}
    >
      <motion.div
        style={{
          // width: 150,
          // height: 150,
          borderRadius: 30,
          rotateX,
          rotateY,
        }}
        className="block max-w-sm p-6 bg-slate-500 border border-gray-200 rounded-lg shadow dark:bg-neutral-900 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.name}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {item.description}
        </p>
        <div className="h-4" />
        <a
          className="bg-amber-500 py-2 px-4 rounded-lg cursor-pointer hover:bg-amber-600"
          href={item.url}
        >
          Show
        </a>
      </motion.div>
    </motion.div>
  );

  return <div></div>;
}
