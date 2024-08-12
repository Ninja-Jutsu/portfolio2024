import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
// import SpotlightPreview from './SpotLightPreview'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'
import SectionTitle from './SectionTitle'
import { WavyBackground } from './ui/wavy-background'

import { CiMail } from 'react-icons/ci'
import { FaXTwitter } from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa'
import React from 'react'
const Hero = () => {
  const [showNum, setShowNum] = React.useState(false)

  return (
    <>
      <div className='align-element'>
        <SectionTitle text='Contact' />
      </div>
      <section
        className='relative'
        id='skills'
      >
        <WavyBackground
          backgroundFill='white'
          waveOpacity={1}
          waveWidth={20}
        >
          <section className='bg-white py-24 font-poppins'>
            <div className='align-element flex flex-col gap-8'>
              <article className='z-10'>
                <TypewriterEffectSmooth
                  words={[
                    { text: 'Reach,', className: 'text-7xl font-bold tracking-wider' },
                    { text: 'out ', className: 'text-7xl font-bold tracking-wider' },
                  ]}
                  duration={1}
                />
                <TypewriterEffectSmooth
                  words={[
                    {
                      text: "Let's create something amazing together",
                      className: 'text-xl mt-4 ms:text-3xl text-stone-700 tracking-wide',
                    },
                  ]}
                  delay={1}
                  duration={1}
                />
                <div className='flex gap-x-8 mt-4'>
                  <a href='mailto:ismail.bardach.work@gmail.com'>
                    <CiMail className='h-16 w-16 text-stone-500 hover:text-red-500 duration-300' />
                  </a>

                  <a
                    href='https://www.linkedin.com/in/ismail-bardach-83921a190/'
                    target='_blank'
                  >
                    <FaLinkedin className='h-16 w-16 text-stone-500 hover:text-blue-500 duration-300' />
                  </a>
                  <a
                    href='https://x.com/JutsuWay'
                    target='_blank'
                  >
                    <FaXTwitter className='h-16 w-16 text-stone-500 hover:text-stone-900 duration-300' />
                  </a>
                  <a
                    href='https://github.com/Ninja-Jutsu'
                    target='_blank'
                  >
                    <FaGithubSquare className='h-16 w-16 text-stone-500 hover:text-black duration-300' />
                  </a>
                  <button
                    href='3'
                    className='flex justify-center items-center gap-2'
                    onClick={() => {
                      setShowNum(!showNum)
                    }}
                  >
                    <FaWhatsapp className='h-16 w-16 text-stone-500 hover:text-green-500 duration-300' />
                    {showNum && <span className='text-xl sm:text-3xl'>9376 8062</span>}
                  </button>
                </div>
              </article>
              <article className='flex flex-col gap-2 text-xl sm:text-3xl'>
                <span>Ismail Bardach , Singapore Ⓒ 2024</span>
                <span> Built with: React.js, Aceternity & Framer Motion</span>
              </article>
            </div>
          </section>
        </WavyBackground>
      </section>
    </>
  )
}
export default Hero
