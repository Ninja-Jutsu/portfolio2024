import aboutSvg from '../assets/about.jpg'
import { GlareCard } from './ui/glare-card'
import SectionTitle from './SectionTitle'
import { languages } from '../data'
const About = () => {
  return (
    <section
      className='mt-0 p-10 sm:-mt-10 sm:py-10'
      id='about'
    >
      <div className='align-element px-8 mb-5'>
        <SectionTitle text='A Glimpse Inside' />
      </div>

      <div className='align-element grid md:grid-cols-2 gap-6 sm:gap-0 items-center '>
        <div className='hidden sm:flex sm:justify-center'>
          <GlareCard>
            <img
              src={aboutSvg}
              className='w-[400px] h-[500px] object-cover'
            />
          </GlareCard>
        </div>

        <img
          src={aboutSvg}
          className='w-full h-full rounded-full sm:hidden'
        />
        <article className='-ml-5'>
          <p className='text-stone-900 text-l mt-8 leading-loose md:2xl lg:text-2xl tracking-wide'>
            Hi there, this is Ismail, a 30-year-old web developer making waves in the digital landscape of Singapore. My
            toolkit includes
            <span className='text-stone-800 font-poppins italic'> HTML, CSS, JavaScript</span> and much more, but my
            real superpower lies in turning concepts into captivating experiences.
            <ul className='mt-5'>
              <li className='mb-2'>
                - I have a strong foundation in JavaScript and am skilled in utilizing React  in addition to the new Next.js framework to develop
                robust web applications.
              </li>
              <li className='mb-2'>
                - I possess a deep understanding and proficiency in database systems, including MySQL and MongoDB.
              </li>
              <li className='mb-2'>
                - Driven by my passion for JavaScript, I utilize Node.js to create scalable and efficient backend
                architectures.
              </li>
            </ul>
          </p>
          <h2 className='text-stone-900 leading-loose lg:text-2xl tracking-wide mt-8 mb-4 font-poppins'>I speak:</h2>
          <div className='flex flex-row items-center justify-start mb-10 w-full gap-4 sm:gap-10'>
            {languages.map((language) => {
              return (
                <div
                  key={language.id}
                  className='flex items-center gap-1'
                >
                  <img
                    src={language.src}
                    alt={language.designation}
                    className='w-10 h-10 hover:scale-105 sm:mr-0'
                  />
                  <span className='text-sm sm:text-xl block'>{language.name}</span>
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
