/* eslint-disable no-unused-vars */
import { nanoid } from 'nanoid'
import {
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaMarkdown,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import { GiMagicGate } from 'react-icons/gi'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiRadixui, SiShadcnui, SiTypescript } from 'react-icons/si'

import { DiMongodb, DiMysql } from 'react-icons/di'

// Projects:
import { FaHireAHelper } from 'react-icons/fa6'
import { GiCampingTent } from 'react-icons/gi'

// My Story:
import Phase1 from './assets/images/phase-1.png'
import Phase2 from './assets/images/phase-2.png'
import Phase3 from './assets/images/phase-3.png'
import Phase4 from './assets/images/phase-4.png'
import Phase5 from './assets/images/phase-5.png'

// Contact me:
import { CiLinkedin, CiMail } from 'react-icons/ci'
import { FiInstagram, FiSmartphone } from 'react-icons/fi'

// Languages:
import arabic from './assets/images/arabic.svg'
import english from './assets/images/english.svg'
import french from './assets/images/french.svg'

export const links = [
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#story', text: 'Story' },
  { id: nanoid(), href: '#contact', text: 'Contact' },
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-red-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-amber-400' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className='h-16 w-16 text-indigo-500' />,
    text: "Leveraging TypeScript's type system to build reliable, maintainable, and efficient applications.",
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-blue-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'NextJS',
    icon: <RiNextjsFill className='h-16 w-16 text-stone-500' />,
    text: 'Skilled in leveraging Next.js for SEO-optimized, server-side rendered, and statically generated web experiences.',
  },
  {
    id: nanoid(),
    title: 'NodeJS',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in utilizing Node.js for server-side development, real-time applications, and API creation.',
  },
  {
    id: nanoid(),
    title: 'MySQL & MongoDB',
    icon: <FaDatabase className='h-16 w-16 text-green-500' />,
    text: 'SQL virtuoso, crafting efficient relational databases & NoSQL ninja, mastering document-oriented data storage. ',
  },
  {
    id: nanoid(),
    title: 'Git & Github actions',
    icon: <FaGitAlt className='h-16 w-16 text-teal-500' />,
    text: 'Expert in version control with Git, leveraging GitHub for seamless collaboration.',
  },
]

const iconSize = 'h-[2em] w-[2em] max-w-10 max-h-10'
export const projects = [
  {
    id: nanoid(),
    Logo: (
      <GiMagicGate
        className='w-[200px] h-[200px]'
        fill='black'
      />
    ),
    url: 'https://bazaar-seven.vercel.app/',
    github: 'https://github.com/Ninja-Jutsu/bazaar',
    title: 'Bazaar',
    text: 'A modern e-commerce platform built with Next.js, offering secure shopping and effortless product management. Discover, shop, and track your orders with an online marketplace designed for a seamless experience.',
    techStack: [
      <RiNextjsFill
        key={nanoid()}
        name='NextJS'
        className={`${iconSize} text-stone-700 hover:text-black duration-300`}
      />,
      <FaReact
        key={nanoid()}
        name='React'
        className={`${iconSize} text-blue-500 hover:text-black duration-300`}
      />,
      <SiTypescript
        key={nanoid()}
        name='Typescript'
        className={`${iconSize} text-indigo-500 hover:text-black duration-300`}
      />,
      <DiMongodb
        key={nanoid()}
        name='Mongodb'
        className={`${iconSize} text-green-500 hover:text-black duration-300`}
      />,
      <SiRadixui
        key={nanoid()}
        name='Radixui'
        className={`${iconSize} text-purple-500 hover:text-black duration-300`}
      />,
      <FaMarkdown
        key={nanoid()}
        name='Markdown'
        className={`${iconSize} text-black-500 hover:text-black duration-300`}
      />,
    ],
  },
  {
    id: nanoid(),
    Logo: (
      <GiCampingTent
        className='w-[200px] h-[200px]'
        fill='gold'
      />
    ),
    url: 'https://book-it-iota.vercel.app/',
    github: 'https://github.com/Ninja-Jutsu/Book-it',
    title: 'Book-it',
    text: 'Powered by Next.js 14+. Discover your perfect stay with our vacation rental platform. Find unique accommodations, from cozy apartments to luxurious homes, and book unforgettable experiences.',
    techStack: [
      <RiNextjsFill
        key={nanoid()}
        name='NextJS'
        className={`${iconSize} text-stone-700 hover:text-black duration-300`}
      />,
      <FaReact
        key={nanoid()}
        name='React'
        className={`${iconSize} text-blue-500 hover:text-black duration-300`}
      />,
      <SiTypescript
        key={nanoid()}
        name='Typescript'
        className={`${iconSize} text-indigo-500 hover:text-black duration-300`}
      />,
      <DiMysql
        key={nanoid()}
        name='MySQL & MongoDB'
        className={`${iconSize} text-indigo-500 hover:text-black duration-300`}
      />,
      <RiTailwindCssFill
        key={nanoid()}
        name='Tailwind'
        className={`${iconSize} text-cyan-500 hover:text-black duration-300`}
      />,
      <SiShadcnui
        name='Shadcn'
        key={nanoid()}
        className={`${iconSize} text-black-500 hover:text-black duration-300`}
      />,
    ],
  },
  {
    id: nanoid(),
    Logo: (
      <FaHireAHelper
        className='w-[200px] h-[200px]'
        fill='green'
      />
    ),
    url: 'https://hired-rho.vercel.app/',
    github: 'https://github.com/Ninja-Jutsu/hired',
    title: 'Hired',
    text: 'Streamline your job search and boost your chances of landing your dream job with our intuitive job tracking app. Organize applications, schedule interviews, and stay on top of your job search journey.',
    techStack: [
      <RiNextjsFill
        key={nanoid()}
        name='NextJS'
        className={`${iconSize} text-stone-700 hover:text-black duration-300`}
      />,
      <FaReact
        key={nanoid()}
        name='React'
        className={`${iconSize} text-blue-500 hover:text-black duration-300`}
      />,
      <SiTypescript
        key={nanoid()}
        name='Typescript'
        className={`${iconSize} text-indigo-500 hover:text-black duration-300`}
      />,
      <DiMysql
        key={nanoid()}
        name='MySQL & MongoDB'
        className={`${iconSize} text-blue-500 hover:text-black duration-300`}
      />,
      <RiTailwindCssFill
        key={nanoid()}
        name='Tailwind'
        className={`${iconSize} text-cyan-500 hover:text-black duration-300`}
      />,
      <SiShadcnui
        key={nanoid()}
        name='Shadcn'
        className={`${iconSize} text-black-500 hover:text-black duration-300`}
      />,
    ],
  },
]

export const contactLinks = [
  {
    key: 1,
    link: 'https://www.linkedin.com/in/ismail-bardach-83921a190/',
    icon: (
      <CiLinkedin className='h-16 w-16 text-stone-700 hover:text-black duration-300' />
    ),
  },
  {
    key: 2,
    link: 'https://www.instagram.com/ismail__bardach/',
    icon: (
      <FiInstagram className='h-16 w-16 text-stone-700 hover:text-black duration-300' />
    ),
  },
  {
    key: 3,
    link: '9376 8062',
    icon: (
      <FiSmartphone className='h-16 w-16 text-stone-700 hover:text-black duration-300' />
    ),
  },
  {
    key: 4,
    link: 'mailto:ismail.bardach.work@gmail.com',
    icon: (
      <CiMail className='h-16 w-16 text-stone-700 hover:text-black duration-300' />
    ),
  },
]

export const Cards = [
  {
    title: 'Early Tech Enthusiast',
    src: Phase1,
    content: (
      <p>
        My innate curiosity about how things worked led me to a deep fascination
        with technology. As a teenager, I immersed myself in the world of
        computers, spending countless hours experimenting with hardware and
        software. I&apos;ve been building web things for almost as long as I can
        remember - I think my first website was a collection of my favorite GIFs
        when I was 11 or 12, back in the “Welcome to my homepage, it&apos;s
        under construction, sign my guestbook” days. It was rudimentary, but
        then so was everything else; it did about as much as every other website
        at that time.
        <br />
        This early exposure to problem-solving and troubleshooting fostered a
        strong foundation in logical thinking and critical analysis. I quickly
        developed a reputation as a tech-savvy individual among my peers, often
        called upon to resolve computer-related issues. <br /> These experiences
        honed my ability to diagnose problems efficiently and implement
        effective solutions.
      </p>
    ),
  },
  {
    title: 'Neurology Student',
    src: Phase2,
    content: (
      <p>
        While pursuing a degree in Neurology, I maintained a strong interest in
        technology. The field of neuroscience exposed me to complex systems and
        the importance of data analysis. <br /> I applied these principles to my
        understanding of technology, developing a keen eye for identifying
        patterns and optimizing processes. <br /> Although seemingly unrelated,
        my neurology studies contributed to my ability to think critically,
        analyze information, and approach problems from multiple perspectives.
      </p>
    ),
  },
  {
    title: 'First job: Technical Advisor',
    src: Phase3,
    content: (
      <p>
        My role as a technical advisor provided invaluable hands-on experience
        with internet infrastructure. Troubleshooting a wide range of internet
        connectivity issues exposed me to the intricacies of routers, modems,
        and network configurations.
        <br /> From understanding basic TCP/IP protocols to diagnosing complex
        hardware malfunctions, I developed a strong foundation in networking
        fundamentals. I honed my ability to break down technical jargon into
        plain language, explaining complex issues in a way that was easily
        understandable.
        <br /> This experience cultivated strong communication and interpersonal
        skills, essential for building rapport with clients and effectively
        resolving their problems. Additionally, I gained exposure to different
        operating systems and software applications, expanding my technical
        knowledge base.
      </p>
    ),
  },
  {
    title: 'Retail Manager',
    src: Phase4,
    content: (
      <p>
        Transitioning from the academic world to the fast-paced retail
        environment presented a unique set of challenges. As a retail manager, I
        honed my ability to lead and motivate teams while simultaneously
        managing complex operational tasks. <br /> This role demanded
        exceptional problem-solving skills, as I frequently encountered
        unexpected challenges that required quick and decisive action. Moreover,
        retail provided invaluable experience in customer service and
        relationship building. <br /> Understanding and meeting customer needs
        became paramount, and I developed a strong ability to communicate
        effectively and build rapport. These skills, combined with my technical
        background, have proven to be a valuable asset in various professional
        settings.
      </p>
    ),
  },
  {
    title: 'Self-Taught Web Developer',
    src: Phase5,
    content: (
      <p>
        Driven by a passion for technology and a desire for a career change, I
        embarked on a deeper self-taught journey into web development.
        Leveraging online resources, tutorials, and personal projects, I
        immersed myself in the world of HTML, CSS, and JavaScript. <br /> The
        transition from a structured learning environment to self-directed
        learning required discipline and perseverance. Through countless months
        of coding and experimentation, I developed a strong foundation in full
        stack development. <br /> I challenged myself by building personal
        projects, gradually increasing the complexity of my creations. This
        hands-on approach allowed me to solidify my understanding of web
        development principles and apply them to real-world scenarios.
        <br /> The self-learning process also fostered a strong problem-solving
        mindset. Encountering and overcoming coding challenges became an
        integral part of my growth. <br /> I learned to break down complex
        problems into smaller, manageable steps, and to seek out solutions
        through online communities and forums.
      </p>
    ),
  },
]

export const languages = [
  {
    id: 1,
    name: 'French',
    designation: 'Proficient',
    src: french,
  },
  {
    id: 2,
    name: 'English',
    designation: 'Proficient',
    src: english,
  },
  {
    id: 3,
    name: 'Arabic',
    designation: 'Native',
    src: arabic,
  },
]
