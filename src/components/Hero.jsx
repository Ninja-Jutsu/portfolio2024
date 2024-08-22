import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { TypewriterEffectSmooth } from './ui/typewriter-effect'
const Hero = () => {
  return (
    <section className='py-10 sm:py-24 font-poppins h-[60vh] -mt-10 sm:mt-0 flex sm:block'>
      <div className='align-element grid  md:grid-cols-2 items-center gap-8 pl-2'>
        <article className='z-10 text-white'>
          <h1 className='text-5xl sm:text-7xl font-bold tracking-wider text-nowrap'>Hi, I am Ismail</h1>
          <h2 className='mt-4 text-3xl capitalize tracking-wide'>Full Stack Web-developer</h2>
          <TypewriterEffectSmooth
            words={[
              {
                text: 'Code',
                className: 'mt-2 text-white capitalize tracking-wide font-quote text-3xl sm:text-5xl font-bold',
              },
              {
                text: 'crafted',
                className: 'mt-2 text-white capitalize tracking-wide font-quote text-3xl sm:text-5xl font-bold',
              },
              {
                text: 'dreams',
                className: 'mt-2 text-white capitalize tracking-wide font-quote text-3xl sm:text-5xl font-bold',
              },
              {
                text: 'shaped',
                className: 'mt-2 text-white capitalize tracking-wide font-quote text-3xl sm:text-5xl font-bold',
              },
            ]}
            delay={1}
            duration={1}
          />
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
          </div>
        </article>

        <article className='hidden md:block'>
          <img
            src={heroImg}
            className='h-80 lg:h-96'
          />
        </article>
      </div>
    </section>
  )
}
export default Hero
