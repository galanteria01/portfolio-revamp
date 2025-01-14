"use client"

import { useRef } from "react";
import { motion } from "motion/react";
import { useFollowPointer } from "@/hooks/use-follow-pointer";

export default function CirclePointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="h-8 md:h-32 w-8 md:w-32 z-0 rounded-full bg-amber-500 opacity-50 hidden md:block"
      style={{ x, y }}
      
    />
  )
}