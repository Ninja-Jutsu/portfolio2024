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
    <section>
      <div
        className='align-element px-8'
        id='contact'
      >
        <SectionTitle text='Contact' />
      </div>
      <article
        className='relative'
        id='skills'
      >
        <WavyBackground
          backgroundFill='white'
          waveOpacity={1}
          waveWidth={20}
          className='hidden sm:block'
        >
          <section className=' py-8 font-poppins'>
            <div className='align-element flex flex-col gap-8'>
              <article className='z-10'>
                <p className='text-7xl font-bold tracking-wider'>Reach out</p>,
                <TypewriterEffectSmooth
                  words={[
                    {
                      text: "Let's create something amazing together",
                      className: 'text-3xl mt-4 text-stone-700 tracking-wide',
                    },
                  ]}
                  delay={0}
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

        <section className='sm:hidden  px-5 py-2 mb-10 font-poppins'>
          <div className='align-element flex flex-col gap-8'>
            <article className='z-10'>
              <p className='text-6xl font-bold tracking-wider'>Reach out</p>
              <TypewriterEffectSmooth
                words={[
                  {
                    text: "Let's create something amazing together",
                    className: 'text-xl mt-4 text-stone-700 ',
                  },
                ]}
                delay={1}
                duration={1}
              />
              <div className='flex justify-center items-start gap-x-8 mt-4 flex-wrap'>
                <a href='mailto:ismail.bardach.work@gmail.com'>
                  <CiMail className='h-10 w-10 text-stone-500 hover:text-red-500 duration-300' />
                </a>

                <a
                  href='https://www.linkedin.com/in/ismail-bardach-83921a190/'
                  target='_blank'
                >
                  <FaLinkedin className='h-10 w-10 text-stone-500 hover:text-blue-500 duration-300' />
                </a>
                <a
                  href='https://x.com/JutsuWay'
                  target='_blank'
                >
                  <FaXTwitter className='h-10 w-10 text-stone-500 hover:text-stone-900 duration-300' />
                </a>
                <a
                  href='https://github.com/Ninja-Jutsu'
                  target='_blank'
                >
                  <FaGithubSquare className='h-10 w-10 text-stone-500 hover:text-black duration-300' />
                </a>
                <button
                  href='3'
                  className='flex  items-center gap-2'
                  onClick={() => {
                    setShowNum(!showNum)
                  }}
                >
                  <FaWhatsapp className='h-10 w-10 text-stone-500 hover:text-green-500 duration-300' />
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
      </article>
    </section>
  )
}
export default Hero
