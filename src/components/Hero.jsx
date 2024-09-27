import { FaGithubSquare, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'
import { PiReadCvLogoBold } from 'react-icons/pi'
import { AnimatedTooltip } from '../components/ui/animated-tooltip'
const iconStyle =
  'object-cover text-white object-top  h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500 border-none'
const links = [
  {
    id: 1,
    name: 'GitHub',
    href: 'https://github.com/Ninja-Jutsu',
    image: (
      <FaGithubSquare
        className={`${iconStyle}  hover:text-black duration-300`}
      />
    ),
  },
  {
    id: 2,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ismail-bardach-83921a190/',
    image: (
      <FaLinkedin className={`${iconStyle} hover:text-blue-500 duration-300`} />
    ),
  },
  {
    id: 3,
    name: 'Instagram',
    href: 'https://www.instagram.com/ismail__bardach/',
    image: (
      <FaInstagram
        className={`${iconStyle}  hover:text-red-500 duration-300`}
      />
    ),
  },
  {
    id: 4,
    name: 'Resume',
    href: 'Ismail_Bardach_Resume.pdf',
    image: (
      <PiReadCvLogoBold
        className={`${iconStyle} hover:text-emerald-400 duration-300`}
      />
    ),
  },
]

const Hero = () => {
  return (
    <section className='font-poppins h-[60vh] flex items-center'>
      <div className='align-element items-center gap-8 pl-2'>
        <div className='z-10 text-white'>
          <h1 className='text-5xl sm:text-7xl font-bold tracking-wider text-nowrap'>
            Hi, I am Ismail
          </h1>
          <h2 className='mt-4 text-3xl capitalize tracking-wide'>
            Full Stack Web-developer
          </h2>
          <TypewriterEffectSmooth
            words={[
              {
                text: 'Code',
                className:
                  'mt-2 text-white capitalize tracking-wide font-quote text-3xl sm:text-5xl font-bold',
              },
              {
                text: 'crafted',
                className:
                  'mt-2 text-white capitalize tracking-wide font-quote text-3xl sm:text-5xl font-bold',
              },
              {
                text: 'dreams',
                className:
                  'mt-2 text-white capitalize tracking-wide font-quote text-3xl sm:text-5xl font-bold',
              },
              {
                text: 'shaped',
                className:
                  'mt-2 text-white capitalize tracking-wide font-quote text-3xl sm:text-5xl font-bold',
              },
            ]}
            delay={1}
            duration={1}
          />
        </div>

        <div className='flex flex-row items-center justify-center mb-10 w-full'>
          <AnimatedTooltip items={links} />
        </div>
      </div>
    </section>
  )
}
export default Hero

function Icons() {
  return (
    <div className='flex gap-x-4 mt-10 justify-center'>
      <a
        href='https://github.com/Ninja-Jutsu'
        target='_blank'
      >
        <FaGithubSquare className='h-10 w-10 md:h-16 md:w-16 text-white hover:text-black duration-300' />
      </a>
      <a
        href='https://www.linkedin.com/in/ismail-bardach-83921a190/'
        target='_blank'
      >
        <FaLinkedin className='h-10 w-10 md:h-16 md:w-16 text-white hover:text-blue-500 duration-300' />
      </a>
      <a
        href='https://www.instagram.com/ismail__bardach/'
        target='_blank'
      >
        <FaInstagram className='h-10 w-10 md:h-16 md:w-16 text-white hover:text-red-500 duration-300' />
      </a>
      <a
        href='/resume-2024.pdf'
        download='resume-2024.pdf'
      >
        <PiReadCvLogoBold className='h-10 w-10 md:h-16 md:w-16 text-white hover:text-red-500 duration-300' />
      </a>
    </div>
  )
}
