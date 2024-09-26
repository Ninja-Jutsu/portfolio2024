import aboutSvg from '../assets/ismail-photo.jpg'
import { GlareCard } from './ui/glare-card'
import SectionTitle from './SectionTitle'
import { languages } from '../data'
const About = () => {
  return (
    <section
      className='p-10 pb-0 sm:-mt-10 sm:py-10'
      id='about'
    >
      <div className='align-element px-8 mb-5 mt-10'>
        <SectionTitle text='A Glimpse Inside' />
      </div>

      <div className='align-element grid md:grid-cols-2 gap-6 sm:gap-0 items-center '>
        <div className='hidden sm:flex sm:justify-center'>
          <GlareCard>
            <img
              src={aboutSvg}
              className='w-[500px] h-[600px] object-cover'
            />
          </GlareCard>
        </div>

        <img
          src={aboutSvg}
          className='w-full h-full rounded-full sm:hidden'
        />
        <article className='-ml-5'>
          <div className='text-stone-900 text-l mt-8 leading-loose md:2xl lg:text-2xl tracking-wide flex flex-col gap-4'>
            <p>
              As a Full Stack Web Developer based in Singapore, I specialize in
              crafting engaging and user-centric digital experiences. I&apos;m
              passionate about transforming ideas into reality, leveraging my
              skills to build robust and scalable web applications.
            </p>
            <p>
              My technical expertise encompasses a range of front-end and
              back-end technologies, including but not limited to:{' '}
              <span className='text-blue-600'>
                JavaScript, React, Next.js, Node.js, MySQL, and MongoDB.
              </span>
            </p>
            <div className='mt-5'>
              <h4 className='mb-2'>
                In addition to my technical proficiency, I bring a strong set of
                soft skills to every project, including:
              </h4>
              <ul className='ml-4'>
                <li className='mb-2'>
                  - <strong>Problem-Solving:</strong> I thrive on tackling
                  complex challenges and devising creative solutions.
                </li>
                <li className='mb-2'>
                  - <strong>Communication:</strong>I excel at collaborating with
                  team members and stakeholders, ensuring clear and effective
                  communication throughout the development process.
                </li>
                <li className='mb-2'>
                  - <strong>Adaptability:</strong> The ever-evolving tech
                  landscape demands flexibility, and I&apos;m adept at learning
                  new technologies and adapting to changing project
                  requirements.
                </li>
                <li className='mb-2'>
                  - <strong>Time Management:</strong> I prioritize tasks
                  effectively, ensuring timely project delivery without
                  compromising quality.
                </li>
                <li className='mb-2'>
                  <strong>- Attention to Detail:</strong> I&apos;m meticulous in
                  my work, ensuring that every line of code is clean, efficient,
                  and error-free.
                </li>
              </ul>
            </div>
          </div>
          <h2 className='text-stone-900 leading-loose lg:text-2xl tracking-wide mt-8 mb-4 font-poppins'>
            I speak:
          </h2>
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
                  <span className='text-sm sm:text-xl block'>
                    {language.name}
                  </span>
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
