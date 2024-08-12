import { myStory } from '../data'
import { AppleCardsCarouselDemo } from './AppleCardsCarouselDemo'
import SectionTitle from './SectionTitle'

function MyStory() {
  return (
    <>
      {/* <section
        className='py-20  align-element'
        id='story'
      >
        <SectionTitle text='Journey to Web Dev' />
        {myStory.map(({ title, img, story }) => (
          <div
            className={`align-element grid  md:grid-cols-custom-layout items-center gap-16 mt-10`}
            key={title}
          >
            <img
              src={img}
              className={`sm:w-[500px] sm:h-[500px] w-full h-full`}
            />
            <article>
              <SectionTitle text={title} />
              <p className='text-stone-600 mt-8 leading-loose text-xl tracking-wide sm:text-2xl'>{story}</p>
            </article>
          </div>
        ))}
      </section> */}
      <AppleCardsCarouselDemo />
    </>
  )
}

export default MyStory
