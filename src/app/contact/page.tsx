"use client"

import React from 'react'
import { motion } from 'framer-motion'
import HomeButton from '@/components/home-button'
import DarkModeSwitch from '@/components/dark-mode-switch'
import Link from 'next/link'
import { MdHomeFilled } from 'react-icons/md'
import { SiGmail, SiMedium, SiLinkedin, SiGithub } from 'react-icons/si'
import { EMAIL, GITHUB_URL, LINKEDIN_URL, MEDIUM_URL } from '@/utils/const'


export default function Contact() {
  return (
    <motion.main
      className="relative flex min-h-screen flex-col items-center justify-center px-2 py-4 md:p-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      <h2 className='text-amber-500 text-2xl md:text-4xl font-bold mb-4 md:mb-16'>Contact</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <a
          href={GITHUB_URL}
          className='rounded-full bg-neutral-200 dark:bg-neutral-800 p-8 cursor-pointer hover:bg-amber-500 hover:dark:bg-amber-600'
        >
          <SiGithub className='text-4xl' />
        </a>
        <a
          href={LINKEDIN_URL}
          className='rounded-full bg-neutral-200 dark:bg-neutral-800 p-8 cursor-pointer hover:bg-amber-500 hover:dark:bg-amber-600'
        >
          <SiLinkedin className='text-4xl' />
        </a>
        <a
          href={`mailto:${EMAIL}`}
          className='rounded-full bg-neutral-200 dark:bg-neutral-800 p-8 cursor-pointer hover:bg-amber-500 hover:dark:bg-amber-600'>
          <SiGmail className='text-4xl' />
        </a>
        <a
          href={MEDIUM_URL}
          className='rounded-full bg-neutral-200 dark:bg-neutral-800 p-8 cursor-pointer hover:bg-amber-500 hover:dark:bg-amber-600'>
          <SiMedium className='text-4xl' />
        </a>
      </div>

      <Link
        href={'/'}
        className='mt-4 z-10 flex items-center text-neutral-900 dark:text-white gap-1 py-2 md:py-4 px-4 md:px-8 rounded-xl bg-neutral-200 dark:bg-neutral-800 hover:bg-amber-500 hover:dark:bg-amber-500'
      >
        <p className='text-xl'>Go home!</p>
        <MdHomeFilled className='text-3xl' />
      </Link>
      <DarkModeSwitch />
      <HomeButton />
    </motion.main>
  )
}
