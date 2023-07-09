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
      className="relative flex min-h-screen flex-col items-center justify-center p-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className='flex h-full'>
        <div className='block items-center md:flex gap-2 z-1'>
          <h2 className='text-4xl md:text-8xl font-bold text-amber-500'>Hello!</h2>
          <div className=''>
            <h3 className='text-xl md:text-3xl font-semibold'>I am Shoury Sharma</h3>
            <h3 className='text-xl md:text-3xl font-semibold'>Software Engineer</h3>
          </div>
        </div>
        {/* <HomeAnimation /> */}
      </div>
      <div className='my-4'>
        <TextAnimated />
      </div>
      <Link
        href={'/projects'}
        className='mt-4 flex items-center text-white gap-1 bg-amber-500 py-2 px-4 rounded-full hover:bg-amber-600'
      >
        <p className='text-xl'>Let&apos;s Go</p>
        <PiTagChevronFill className='text-3xl' />
      </Link>
      <DarkModeSwitch />
      <CirclePointer />
    </motion.main>
  )
}
