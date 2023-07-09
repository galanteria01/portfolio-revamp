'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <motion.main
      className="relative flex min-h-screen flex-col items-center justify-center p-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}>
      Project
    </motion.main>
  )
}
