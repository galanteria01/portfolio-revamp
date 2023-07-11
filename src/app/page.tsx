"use client"

import CirclePointer from '@/components/circle-pointer'
import DarkModeSwitch from '@/components/dark-mode-switch'
import HomeAnimation from '@/components/home-animation'
import TextAnimated from '@/components/text-animated'
import Link from 'next/link'
import { PiTagChevronFill } from 'react-icons/pi'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.main
      className="relative flex min-h-screen flex-col items-center justify-center p-4 md:p-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='flex h-full z-10'>
        <div className='block items-center md:flex gap-2'>
          <h2 className='text-6xl md:text-9xl font-bold text-amber-500 hover:text-rose-600'>Hello!</h2>
          <div className=''>
            <h3 className='text-2xl md:text-5xl font-semibold'>I am Shoury Sharma</h3>
            <h3 className='text-2xl md:text-3xl font-semibold'>Software Engineer</h3>
          </div>
        </div>
        {/* <HomeAnimation /> */}
      </div>
      <div className='my-4 z-10'>
        <TextAnimated />
      </div>
      <Link
        href={'/projects'}
        shallow
        className='mt-4 z-10 flex items-center text-neutral-900 dark:text-white gap-1 py-2 md:py-4 px-4 md:px-8 rounded-xl bg-neutral-200 dark:bg-neutral-800 hover:bg-amber-500 hover:dark:bg-amber-500'
      >
        <PiTagChevronFill className='text-3xl' />
        <p className='text-xl'>Let&apos;s Go</p>
      </Link>
      <DarkModeSwitch />
      <CirclePointer />
    </motion.main>
  )
}
