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
              className={`w-full h-full ${direction === 'right' && 'order-2'}`}
            />
            <article>
              <SectionTitle text={title} />
              <p className='text-stone-600 mt-8 leading-loose lg:text-xl tracking-wide first-letter:font-bold first-letter:text-3xl'>
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
