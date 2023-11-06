'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '@/utils/const'
import ProjectCard from '@/components/project-card'
import { Project } from '@/types/Project'
import DarkModeSwitch from '@/components/dark-mode-switch'
import HomeButton from '@/components/home-button'
import { RiMessage3Fill } from 'react-icons/ri'

export default function Projects() {
  return (
    <motion.main
      className="relative flex min-h-screen flex-col items-center justify-center p-4 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      <h2 className='text-amber-500 text-2xl md:text-4xl font-bold mb-4 md:mb-12'>Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
        {projects.map((item: Project, index: number) => {
          return (
            <div key={index} className='flex justify-center m-4 z-10'>
              <ProjectCard item={item} />
            </div>
          )
        })}
      </div>

      <Link
        href={'/timeline'}
        className='mt-4 z-10 flex items-center text-neutral-900 dark:text-white gap-1 py-2 md:py-4 px-4 md:px-8 rounded-xl bg-neutral-200 dark:bg-neutral-800 hover:bg-amber-500 hover:dark:bg-amber-500'
      >
        <RiMessage3Fill className='text-3xl' />
        <p className='text-xl'>Know the story</p>
      </Link>
      <DarkModeSwitch />
      <HomeButton />
    </motion.main>
  )
}
