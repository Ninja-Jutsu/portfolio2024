/* eslint-disable react/prop-types */
'use client'
import { WavyBackground } from './ui/wavy-background'

export function WavyBackgroundDemo({ children }) {
  return <WavyBackground className='max-w-4xl mx-auto pb-40'>{children}</WavyBackground>
}
