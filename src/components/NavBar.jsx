import { links } from '../data'
import { FloatingNav } from './ui/floating-navbar'

const items = links.map((link) => {
  return { link: link.href, key: link.id, name: link.text }
})
const NavBar = () => {
  return (
    <nav className='bg-teal-100'>
      <div className='align-element py-4 flex  sm:flex-row sm:gap-x-16 sm:items-center justify-center sm:py-8 '>
        <div className='flex gap-x-3'>
          {links.map(({ id, href, text }) => {
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-xl lg:text-2xl tracking-wide hover:text-teal-600 duration-300'
              >
                {text}
              </a>
            )
          })}
        </div>
        <div>
          <FloatingNav navItems={items} />
        </div>
      </div>
    </nav>
  )
}
export default NavBar
