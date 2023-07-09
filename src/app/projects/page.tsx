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
      className="relative flex min-h-screen flex-col items-center justify-center px-2 py-4 md:p-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      <h2 className='text-amber-500 text-2xl md:text-4xl font-bold mb-4 md:mb-16'>Projects</h2>
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
        className='mt-4 z-10 flex items-center text-white gap-1 bg-amber-500 py-2 px-4 rounded-full hover:bg-rose-600'
        href={'/contact'}
      >
        <RiMessage3Fill className='text-2xl' />
        <p className='text-xl'>Should we connect?</p>
      </Link>
      <DarkModeSwitch />
      <HomeButton />
    </motion.main>
  )
}
