import { useTheme } from 'next-themes';
import React from 'react'
import { PiSunFill, PiMoonFill } from 'react-icons/pi'

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();
  const toggleMode = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  return (
    <button onClick={toggleMode} className='absolute top-4 right-4 duration-200 z-10'>
      {
        theme === 'dark' ? <PiMoonFill className='text-2xl' /> : <PiSunFill className='text-2xl' />
      }
    </button>
  )
}
