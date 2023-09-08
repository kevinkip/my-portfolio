"use client"

import React from 'react'


const GithubRepoCard = ({ 
    latestRepo
 }: {
    latestRepo: any
 }) => {
  return (
    <div className='github-repo'>
        <h1 className='font-semibold text-xl dark:text-gray-200 text-gray-700'>
            {latestRepo.name}
        </h1>
        <p className='text-base font-normal my-4 text-gray-500'>
            {latestRepo.description}
        </p>
        <a href={latestRepo.clone_url} className="font-semibold group flex flex-row space-x-2 w-full items-center">
            <p></p>
        </a>
    </div>
  )
}

export default GithubRepoCard