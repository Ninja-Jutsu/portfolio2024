import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin, FaInstagram } from 'react-icons/fa'
const Hero = () => {
  return (
    <section className='bg-teal-100 py-24 font-poppins'>
      <div className='align-element grid  md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>I&apos;m Ismail</h1>
          <p className='mt-4 text-3xl text-stone-700 capitalize tracking-wide'>Full Stack developer</p>
          <p className='mt-2 text-stone-700 capitalize tracking-wide font-quote text-3xl font-bold'>
            Code crafted, dreams shaped.
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a
              href='https://github.com/Ninja-Jutsu'
              target='_blank'
            >
              <FaGithubSquare className='h-10 w-10 text-stone-500 hover:text-black duration-300' />
            </a>
            <a
              href='https://www.linkedin.com/in/ismail-bardach-83921a190/'
              target='_blank'
            >
              <FaLinkedin className='h-10 w-10 text-stone-500 hover:text-blue-500 duration-300' />
            </a>
            <a
              href='https://www.instagram.com/ismail__bardach/'
              target='_blank'
            >
              <FaInstagram className='h-10 w-10 text-stone-500 hover:text-red-500 duration-300' />
            </a>
          </div>
        </article>

        <article className='hidden md:block '>
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
