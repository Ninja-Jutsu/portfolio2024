import { links } from '../data'
const NavBar = () => {
  return (
    <nav className='bg-teal-100 '>
      <div className='align-element py-4 flex flex-col  sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
        <h2 className='text-3xl font-bold'>
          Web
          <span className='text-teal-600'>Dev</span>
        </h2>
        <div className='flex gap-x-3 '>
          {links.map(({ id, href, text }) => {
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-lg tracking-wide hover:text-teal-600 duration-300'
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
export default NavBar
