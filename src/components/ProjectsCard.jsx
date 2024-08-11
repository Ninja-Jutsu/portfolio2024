/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
const ProjectsCard = ({ url, img, github, title, text, techStack }) => {
  return (
    <article className='bg-white rounded-lg p-1 shadow-md block hover:shadow-2xl  duration-300'>
      <img
        src={img}
        alt={title}
        className='w-full object-cover rounded-t-lg h-64 border border-gray-300'
      />
      <div className='p-8'>
        <h2 className='text-xl tracking-wide font-medium capitalize'>{title}</h2>
        <p className='mt-4 text-stone-700 leading-loose'>{text}</p>
        <div className='mt-4 flex gap-x-8 justify-center items-center'>
          <a
            href={url}
            target='_blank'
            className='flex flex-col justify-center items-center'
          >
            <span>Preview</span>
            <TbWorldWww className='h-10 w-10 text-stone-500 hover:text-black duration-300' />
          </a>
          <a
            href={github}
            target='_blank'
            className='flex flex-col justify-center items-center'
          >
            <span>Repository</span>
            <FaGithubSquare className='h-10 w-10 text-stone-500 hover:text-black duration-300' />
          </a>
        </div>
      </div>
      <h2 className='px-8 text-l tracking-wide font-medium'>Main Technologies</h2>
      <div className='capitalize p-8 flex gap-x-2 justify-center items-center'>
        {techStack.map((item) => {
          return item
        })}
      </div>
    </article>
  )
}
export default ProjectsCard
