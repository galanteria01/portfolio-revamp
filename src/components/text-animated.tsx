'use client'
import { TypeAnimation } from 'react-type-animation';

export default function TextAnimated() {
  return (
    <TypeAnimation
      sequence={[
        'I write Frontend.',
        1000,
        'I write Server.',
        1000,
        'I write Design Systems.',
        1000,
        'I write Blogs.',
        1000,
        'Nice to meet you!',
        1000,
      ]}
      wrapper="span"
      speed={50}
      className='text-2xl'
      repeat={Infinity}
    />
  )
}
