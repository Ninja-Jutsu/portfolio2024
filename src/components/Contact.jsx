import aboutSvg from '../assets/about.jpeg'

import SectionTitle from './SectionTitle'
const Contact = () => {
  return (
    <footer
      className='bg-white py-20'
      id='contact'
    >
      <div className='align-element grid  md:grid-cols-2 items-center gap-16'>
        <img
          src={aboutSvg}
          className='w-full h-full'
        />
        <article>
          <SectionTitle text="Let's create something amazing" />
          <p className='text-stone-600 mt-8 leading-loose lg:text-xl tracking-wide'>
            
          </p>
        </article>
      </div>
    </footer>
  )
}
export default Contact
