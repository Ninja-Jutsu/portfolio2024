import { myStory } from '../data'
import SectionTitle from './SectionTitle'

function MyStory() {
  return (
    <>
      <section
        className='py-20  align-element'
        id='story'
      >
        <SectionTitle text='Journey to Web Dev' />
        {myStory.map(({ title, img, story, direction }) => (
          <div
            className={`align-element grid  md:grid-cols-2 items-center gap-16 mt-10 ${
              direction === 'right' && 'bg-stone-100'
            }`}
            key={title}
          >
            <img
              src={img}
              className={`w-full h-full ${direction === 'right' && 'sm:order-2'}`}
            />
            <article>
              <SectionTitle text={title} />
              <p className='text-stone-600 mt-8 leading-loose text-xl tracking-wide sm:text-2xl' >
                {story}
              </p>
            </article>
          </div>
        ))}
      </section>
    </>
  )
}

export default MyStory
