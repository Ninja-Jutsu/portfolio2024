'use client'
import React from 'react'
import { BackgroundBeams } from './ui/background-beams'

export default function BackgroundBeamsDisplay({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='my-auto'>{children}</div>
      <BackgroundBeams />
    </>
  )
}
