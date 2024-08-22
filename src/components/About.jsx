import aboutSvg from '../assets/about.jpg'
import { GlareCard } from './ui/glare-card'
import SectionTitle from './SectionTitle'
import { languages } from '../data'
const About = () => {
  return (
    <section
      className='sm:py-20 px-8'
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
              className='w-[full] h-full'
              width='300'
              height='300'
            />
          </GlareCard>
        </div>

        <img
          src={aboutSvg}
          className='w-full h-full rounded-full sm:hidden'
        />
        <article>
          <p className='text-stone-900 text-l mt-8 leading-loose md:2xl lg:text-2xl tracking-wide'>
            Hi there, this is Ismail, a 30-year-old web developer making waves in the digital landscape of Singapore. My
            toolkit includes
            <span className='text-stone-800 font-poppins italic'> HTML, CSS, JavaScript</span> and much more, but my real
            superpower lies in turning concepts into captivating experiences. I&apos;m particularly interested in
            exploring modern frameworks like
            <span className='text-stone-800 font-poppins italic'> React and NextJS</span>. <br />
            <span>
            My technical problem-solving skills combined with experience leading a large team make me a valuable asset.
            </span>
          </p>
          <h2 className='text-stone-900 leading-loose lg:text-2xl tracking-wide mt-8 mb-4 font-poppins'>
            I speak:
          </h2>
          <div className='flex flex-row items-center justify-start mb-10 w-full sm:gap-10'>
            {languages.map((language) => {
              return (
                <div
                  key={language.id}
                  className='flex gap-2 items-center'
                >
                  <img
                    src={language.src}
                    alt={language.designation}
                    className='w-10 h-10 hover:scale-105 mr-5 sm:mr-0'
                  />
                  <span className='text-xl hidden sm:block'>{language.name}</span>
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
