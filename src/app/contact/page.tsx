"use client"

import React from 'react'
import { motion } from 'framer-motion'
import HomeButton from '@/components/home-button'
import DarkModeSwitch from '@/components/dark-mode-switch'
import { RiHome2Fill } from 'react-icons/ri'
import Link from 'next/link'


export default function Contact() {
  return (
    <motion.main
      className="relative flex min-h-screen flex-col items-center justify-center px-2 py-4 md:p-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>
      <h2 className='text-amber-500 text-2xl md:text-4xl font-bold mb-4 md:mb-16'>Contact</h2>

      <Link
        className='mt-4 z-10 flex items-center text-white gap-1 bg-amber-500 py-2 px-4 rounded-full hover:bg-rose-600'
        href={'/'}
      >
        <RiHome2Fill className='text-2xl' />
        <p className='text-xl'>Go home!</p>
      </Link>
      <DarkModeSwitch />
      <HomeButton />
    </motion.main>
  )
}
