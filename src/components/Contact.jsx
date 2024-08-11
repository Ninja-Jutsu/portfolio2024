import { contactLinks } from '../data'

import SectionTitle from './SectionTitle'
const Contact = () => {
  return (
    <footer
      className='bg-white py-20'
      id='contact'
    >
      <div className='align-element grid  md:grid-cols-2 items-center gap-16'>
        <article>
          <SectionTitle text="Let's create something amazing" />
          <div className='flex flex-col gap-5 mt-5'>
            {contactLinks.map((link) => (
              <div
                key={link.key}
                className='flex gap-3 items-center'
              >
                <a
                  href={link.link}
                  target='_blank'
                >
                  {link.icon}
                </a>
                {link.key === 3 && <p>{link.link}</p>}
              </div>
            ))}
          </div>
        </article>
      </div>
    </footer>
  )
}
export default Contact
