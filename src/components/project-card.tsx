import { Project } from '@/types/Project'
import React from 'react'

type Props = {
  item: Project
}

export default function ProjectCard({ item }: Props) {

  return (
    <a
      href={item.url}
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-neutral-900 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
    </a>
  )
}
