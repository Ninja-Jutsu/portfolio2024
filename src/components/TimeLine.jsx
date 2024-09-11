import { Timeline } from './ui/timeline'

export function TimelineDemo() {
  const data = [
    {
      title: 'Early Tech Enthusiast',
      content: (
        <div>
          <p className='text-neutral-800  dark:text-neutral-200 text-xs md:text-xl font-normal mb-8'>
            My fascination with technology began early, leading to countless hours spent exploring computers as a
            teenager. I&apos;ve been building websites since my early days, starting with a simple collection of GIFs.
            This early exposure to problem-solving and troubleshooting laid the foundation for my logical thinking and
            analytical skills.
          </p>
        </div>
      ),
    },
    {
      title: 'Neurology Student',
      content: (
        <div>
          <p className='text-neutral-800  dark:text-neutral-200 text-xs md:text-xl font-normal mb-8'>
            While studying Neurology, I maintained a strong interest in technology. The field&apos;s complexity and
            emphasis on data analysis fostered my critical thinking and problem-solving skills, which I now apply to
            optimizing technological processes.
          </p>
        </div>
      ),
    },
    {
      title: 'First job: Technical Advisor',
      content: (
        <div>
          <p className='text-neutral-800  dark:text-neutral-200 text-xs md:text-xl font-normal mb-8'>
            As a technical advisor, I gained hands-on experience with web fundamentals, troubleshooting connectivity
            issues and mastering web protocols. I honed my communication skills, translating technical jargon into clear
            explanations. This role fostered strong problem-solving abilities and expanded my technical skill set
            through exposure to various server environments and software configurations.
          </p>
        </div>
      ),
    },
    {
      title: 'Team Leader',
      content: (
        <div>
          <p className='text-neutral-800  dark:text-neutral-200 text-xs md:text-xl font-normal mb-4'>
            Led and mentored a team, successfully recruited new members, collaborated on IT maintenance, became the
            go-to IT expert, and used analytics to improve efficiency and customer satisfaction{' '}
          </p>
        </div>
      ),
    },
    {
      title: 'Self-Taught Web Developer',
      content: (
        <div>
          <p className='text-neutral-800  dark:text-neutral-200 text-xs md:text-xl font-normal mb-4'>
            Driven by a passion for technology, I embarked on a self-taught journey into web development. Through online
            resources and personal projects, I gained proficiency in HTML, CSS, and JavaScript. This self-directed
            learning fostered discipline, problem-solving skills, and a strong foundation in full-stack development.
            Building increasingly complex projects solidified my understanding and allowed me to apply web development
            principles to real-world scenarios.
          </p>
        </div>
      ),
    },
    {
      title: 'Freelance Full Stack Developer',
      content: (
        <div>
          <p className='text-neutral-800  dark:text-neutral-200 text-xs md:text-xl font-normal mb-4'>
            As a freelance web developer based in Singapore, I have successfully delivered over 10 high-quality websites
            and applications, consistently meeting client expectations and earning an average satisfaction rating of 4.8
            out of 5 stars. My technical proficiency spans a range of front-end and back-end technologies, including
            JavaScript, React, Node.js, TypeScript, CSS, and HTML. My commitment to quality, combined with strong
            problem-solving and communication skills, has resulted in repeat business and client referrals.
          </p>
        </div>
      ),
    },
  ]
  return (
    <div className='w-full' id='story'>
      <Timeline data={data} />
    </div>
  )
}
