"use client"

import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "@/hooks/use-follow-pointer";

export default function CirclePointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="h-8 md:h-32 w-8 md:w-32 z-0 rounded-full bg-amber-500 opacity-75"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 5,
        stiffness: 50,
        restDelta: 0.001
      }}
    />
  )
}