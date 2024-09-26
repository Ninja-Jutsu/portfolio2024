import SkillsCard from './SkillsCard'
import { skills } from '../data'
import SectionTitle from './SectionTitle'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import React from 'react'

const items = skills.map((skill) => {
  return { title: skill.title, key: skill.id, icon: skill.icon, quote: skill.text }
})

const Skills = () => {
  const [animationShown, setAnimation] = React.useState(false)
  return (
    <section
      className='py-10 align-element px-8'
      id='skills'
    >
      <div className='flex justify-between'>
        <SectionTitle text='tech stack' />
        <button
          className='hidden md:block border-2 border-stone-50 p-5 hover:border-stone-200 transition-all duration-500 ease-in-out'
          onClick={() => setAnimation(!animationShown)}
        >
          {animationShown ? 'Add animation' : 'Remove animation'}
        </button>
      </div>

      {/* On small screens */}
      <div className='py-8 sm:py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:hidden'>
        {skills.map((skill) => {
          return (
            <SkillsCard
              key={skill.id}
              {...skill}
            />
          )
        })}
      </div>
      {/* On large screens */}
      {!animationShown && (
        <div>
          <InfiniteMovingCards
            items={items}
            speed='slow'
            className='hidden lg:block md:block '
          />
        </div>
      )}
      {animationShown && (
        <article className='py-8 sm:py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skills.map((skill) => {
            return (
              <SkillsCard
                key={skill.id}
                {...skill}
              />
            )
          })}
        </article>
      )}
    </section>
  )
}
export default Skills
