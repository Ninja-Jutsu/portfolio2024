import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section
      className='bg-white py-20'
      id='about'
    >
      <SectionTitle text='Get in touch' />
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>Let&apos;s create something amazing</h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today.</p>
        <a href='mailto:ismail.bardach.work@gmail.com'>
          
        </a>
      </div>
    </section>
  )
}
export default About
