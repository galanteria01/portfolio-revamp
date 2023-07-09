import Link from 'next/link'
import React from 'react'
import { MdHomeFilled } from 'react-icons/md'

export default function HomeButton() {
  return (
    <Link href={'/'} className='absolute top-4 left-4'>
      <MdHomeFilled className='text-2xl' />
    </Link>
  )
}
