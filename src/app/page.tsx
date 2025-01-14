"use client"

import CirclePointer from '@/components/circle-pointer'
import DarkModeSwitch from '@/components/dark-mode-switch'
import RedirectButton from '@/components/redirect-button'
import TextAnimated from '@/components/text-animated'
import { motion } from 'motion/react'

export default function Home() {
  return (
    <motion.main
      className="relative flex min-h-screen flex-col items-center justify-center p-4 md:p-24"
      
    >
      <div className='flex h-full z-10'>
        <div className='block items-center md:flex gap-2'>
          <h2 className='text-6xl md:text-9xl font-black text-amber-500 hover:text-rose-600 uppercase'>Hello!</h2>
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
      <RedirectButton href="/projects" title="Let&apos;s Go" />
      <DarkModeSwitch />
      <CirclePointer />
    </motion.main>
  )
}
