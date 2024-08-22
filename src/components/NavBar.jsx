import { links } from '../data'
import { FloatingNav } from './ui/floating-navbar'

const items = links.map((link) => {
  return { link: link.href, key: link.id, name: link.text }
})
const NavBar = () => {
  return (
    <nav >
      <div className='align-element py-4 flex sm:flex-row sm:gap-x-16 sm:items-center justify-center sm:py-8 '>
        <div className='flex sm:gap-x-10'>
          {links.map(({ id, href, text }) => {
            return (
              <a
                key={id}
                href={href}
                className='capitalize text-l p-3 text-white sm:text-3xl tracking-wide hover:text-teal-600 duration-300'
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
