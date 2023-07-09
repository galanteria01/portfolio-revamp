import HomeAnimation from '@/components/home-animation'
import TextAnimated from '@/components/text-animated'
import Image from 'next/image'
import { PiTagChevronFill } from 'react-icons/pi'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className='flex h-full'>
        <div className='block items-center md:flex'>
          <h2 className='text-8xl font-bold text-amber-500'>Hello!</h2>
          <div className=''>
            <h3 className='text-3xl font-semibold'>I am Shoury Sharma</h3>
            <h3 className='text-3xl font-semibold'>Software Engineer</h3>
          </div>
        </div>
        {/* <HomeAnimation /> */}
      </div>
      <div className='my-4'>
        <TextAnimated />
      </div>
      <button
        className='my-4 flex items-center text-white gap-1 bg-amber-500 py-2 px-4 rounded-full hover:bg-amber-600'
      >
        <p className='text-xl'>Let's Go</p>
        <PiTagChevronFill className='text-3xl' />
      </button>
    </main>
  )
}
