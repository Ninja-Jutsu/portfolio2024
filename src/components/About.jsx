import aboutSvg from '../assets/about.jpg'
import { GlareCard } from './ui/glare-card'
import SectionTitle from './SectionTitle'
import { AnimatedTooltip } from './ui/animated-tooltip'
import { languages } from '../data'
const About = () => {
  return (
    <section
      className='bg-white py-20'
      id='about'
    >
      <div className='align-element grid md:grid-cols-2 gap-6 sm:gap-0 items-center '>
        <div className='hidden sm:flex sm:justify-center'>
          <GlareCard>
            <img
              src={aboutSvg}
              className='w-[full] h-full'
            />
          </GlareCard>
        </div>

        <img
          src={aboutSvg}
          className='w-full h-full rounded-full sm:hidden'
        />
        <article>
          <SectionTitle text='A Glimpse Inside' />
          <p className='text-stone-600 text-xl mt-8 leading-loose lg:text-2xl tracking-wide'>
            Hi there, this is Ismail, a 30-year-old web developer making waves in the digital landscape of{' '}
            <span className='text-stone-800 font-semibold'>Singapore</span>. With a passion for crafting elegant and
            efficient web solutions. My toolkit includes{' '}
            <span className='text-stone-800 font-semibold tracking-wide'>HTML, CSS, JavaScript</span> & much more, but
            my real superpower lies in turning concepts into captivating experiences. I&apos;m particularly interested
            in exploring modern frameworks like React and NextJS.
            <p>
              My background as a technical supervisor & retail manager in addition to make me a great addition to your
              team.
            </p>
            <h2 className='text-stone-900 capitalize'>I speak:</h2>
          </p>
          <div className='flex flex-row items-center justify-center mb-10 w-full gap-3'>
            {languages.map((language) => {
              return (
                <div
                  key={language.id}
                  className='flex gap-2 items-center'
                >
                  <span className='text-xl'>{language.name}</span>
                  {/* <span>{language.designation}</span> */}
                  <img
                    src={language.src}
                    alt={language.designation}
                    className='w-10 h-10 hover:scale-105'
                  />
                </div>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  )
}
export default About
