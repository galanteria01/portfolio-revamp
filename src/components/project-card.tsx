import { Project } from '@/types/Project'
import React from 'react'

type Props = {
  item: Project
}

export default function ProjectCard({ item }: Props) {

  return (
    <div
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-900 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
      <div className='h-4' />
      <a className='bg-amber-500 py-2 px-4 rounded-lg cursor-pointer hover:bg-amber-600' href={item.url}>Show</a>
    </div>
  )
}
