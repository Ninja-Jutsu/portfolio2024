/* eslint-disable react/prop-types */
'use client'
import { Carousel, Card } from '../components/ui/apple-cards-carousel'
import { Cards } from '../data'
import SectionTitle from './SectionTitle'

export function AppleCardsCarouselDemo() {
  const cards = Cards.map((card, index) => (
    <Card
      key={card.src}
      card={card}
      index={index}
    />
  ))

  return (
    <>
      <div
        className='align-element'
        id='story'
      >
        <SectionTitle text='Journey to Web Dev' />
      </div>
      <Carousel items={cards} />
    </>
  )
}
