import SkillsCard from './SkillsCard'
import { skills } from '../data'
import SectionTitle from './SectionTitle'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const items = skills.map((skill) => {
  return { title: skill.title, key: skill.id, icon: skill.icon, quote: skill.text }
})

const Skills = () => {
  return (
    <section
      className='py-10 align-element px-8'
      id='skills'
    >
      <SectionTitle text='tech stack' />
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
      <div>
        <InfiniteMovingCards
          items={items}
          speed='slow'
          className='hidden lg:block md:block '
        />
      </div>
    </section>
  )
}
export default Skills
