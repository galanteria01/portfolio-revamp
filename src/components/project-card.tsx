import { Project } from '@/types/Project'
import React from 'react'

type Props = {
  item: Project
}

export default function ProjectCard({ item }: Props) {

  return (
    <a
      href={item.url}
      className='border rounded-md w-2/3 px-8 py-4 my-2 self-center hover:border-amber-500 cursor-pointer'
    >
      <h2 className='text-xl font-semibold'>{item.name}</h2>
      <p>{item.description}</p>
    </a>
  )
}
