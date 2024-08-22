import ProjectsCard from './ProjectsCard'
import { projects } from '../data'
import SectionTitle from './SectionTitle'

const Projects = () => {
  return (
    <section
      className='align-element px-2 sm:px-8'
      id='projects'
    >
      <SectionTitle text='Featured Projects' />
      <article className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((project) => {
          return (
            <ProjectsCard
              key={project.id}
              {...project}
            />
          )
        })}
      </article>
    </section>
  )
}
export default Projects
