'use client'

import React, { useEffect, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutsideClick } from './hooks/use-outside-click'

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false)
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <>
      <div
        className='align-element px-8 mb-10'
        id='story'
      >
        <SectionTitle text='Journey to Web Dev' />
      </div>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/20 h-full w-full'
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className='fixed inset-0  grid place-items-center z-[100]'>
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className='flex absolute top-2 right-2 lg:hidden items-center justify-center bg-stone-300 rounded-full h-10 w-10 p-6'
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className='h-screen sm:h-[70vh] sm:w-[70vw] flex flex-col bg-neutral-50 dark:bg-neutral-900 sm:rounded-3xl overflow-hidden'
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className='flex justify-center'
              >
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className='w-80 h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top'
                />
              </motion.div>

              <div>
                <div className='flex justify-between items-start p-4'>
                  <div className=''>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className='font-bold text-neutral-700 dark:text-neutral-200 text-xl sm:text-3xl'
                    >
                      {active.title}
                    </motion.h3>
                    {/* <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className='text-neutral-600 dark:text-neutral-400'
                    >
                      {active.description}
                    </motion.p> */}
                  </div>
                </div>
                <div className='pt-4 relative px-4 '>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='text-l sm:text-3xl text-neutral-600  h-40 md:h-max pb-10 flex flex-col items-start gap-4 dark:text-neutral-400'
                  >
                    {typeof active.content === 'function' ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className='max-w-2xl md:max-w-4xl mx-auto w-full gap-4 mb-10'>
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className='p-4 flex flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer'
          >
            <div className='flex gap-4 flex-row'>
              <motion.div
                layoutId={`image-${card.title}-${id}`}
                className='flex items-center flex-1 md:flex-none h-20 border border-stone-900 md:border-none'
              >
                <img
                  width='100px'
                  height='100px'
                  src={card.src}
                  alt={card.title}
                  // className='rounded-lg object-cover object-top'
                />
              </motion.div>
              <div className='md:w-[900px] flex flex-col'>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className='font-medium text-neutral-800 dark:text-neutral-200 text-left md:text-2xl'
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className='text-neutral-700 dark:text-neutral-400 text-left md:text-xl'
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className='px-4 py-2 text-sm rounded-full font-bold bg-stone-200 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0'
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  )
}

export const CloseIcon = () => {
  return (
    <div className='p-5'>
      <motion.svg
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: {
            duration: 0.05,
          },
        }}
        xmlns='http://www.w3.org/2000/svg'
        width='36'
        height='36'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='h-6 w-6 text-black'
      >
        <path
          stroke='none'
          d='M0 0h24v24H0z'
          fill='none'
        />
        <path d='M18 6l-12 12' />
        <path d='M6 6l12 12' />
      </motion.svg>
    </div>
  )
}

// My Story:
import Phase1 from '../assets/images/phase-1.png'
import Phase2 from '../assets/images/phase-2.png'
import Phase3 from '../assets/images/phase-3.png'
import Phase4 from '../assets/images/phase-4.png'
import Phase5 from '../assets/images/phase-5.png'
import SectionTitle from './SectionTitle'

const cards = [
  {
    description: 'From a young age, I knew this was the path I wanted to pursue.',
    title: 'Early Tech EnthusiastMy',
    src: Phase1,
    ctaText: 'Read',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          My innate curiosity about how things worked led me to a deep fascination with technology. As a teenager, I
          immersed myself in the world of computers, spending countless hours experimenting with hardware and software.
          I&apos;ve been building web things for almost as long as I can remember - I think my first website was a
          collection of my favorite GIFs when I was 11 or 12, back in the “Welcome to my homepage, it&apos;s under
          construction, sign my guestbook” days. It was rudimentary, but then so was everything else; it did about as
          much as every other website at that time.
          <br />
          This early exposure to problem-solving and troubleshooting fostered a strong foundation in logical thinking
          and critical analysis. I quickly developed a reputation as a tech-savvy individual among my peers, often
          called upon to resolve computer-related issues. <br /> These experiences honed my ability to diagnose problems
          efficiently and implement effective solutions.
        </p>
      )
    },
  },
  {
    description: 'Pursuing a different passion, but all about knowledge',
    title: 'Neurology Student',
    src: Phase2,
    ctaText: 'Read',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          While pursuing a degree in Neurology, I maintained a strong interest in technology. The field of neuroscience
          exposed me to complex systems and the importance of data analysis. <br /> I applied these principles to my
          understanding of technology, developing a keen eye for identifying patterns and optimizing processes. <br />
          Although seemingly unrelated, my neurology studies contributed to my ability to think critically, analyze
          information, and approach problems from multiple perspectives.
        </p>
      )
    },
  },

  {
    description: 'My first IT job was instrumental in shaping my professional journey',
    title: 'Technical Advisor',
    src: Phase3,
    ctaText: 'Read',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          My role as a technical advisor provided invaluable hands-on experience with internet infrastructure. <br />
          Troubleshooting a wide range of internet connectivity issues exposed me to the intricacies of routers, modems,
          and network configurations.
          From understanding basic TCP/IP protocols to diagnosing complex hardware malfunctions, I developed a
          strong foundation in networking fundamentals. I honed my ability to break down technical jargon into plain
          language, explaining complex issues in a way that was easily understandable.
          <br /> This experience cultivated strong communication and interpersonal skills, essential for building
          rapport with clients and effectively resolving their problems. Additionally, I gained exposure to different
          operating systems and software applications, expanding my technical knowledge base.
        </p>
      )
    },
  },
  {
    description: 'Transitioning to the fast-paced retail environment presented a unique set of challenges. ',
    title: 'Retail Manager',
    src: Phase4,
    ctaText: 'Read',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          As a retail manager, I honed my ability to lead and motivate teams while simultaneously managing complex
          operational tasks. <br/> This role demanded exceptional problem-solving skills, as I frequently encountered
          unexpected challenges that required quick and decisive action. Moreover, retail provided invaluable experience
          in customer service and relationship building. Understanding and meeting customer needs became paramount, and
          I developed a strong ability to communicate effectively and build rapport. These skills, combined with my
          technical background, have proven to be a valuable asset in various professional settings.
        </p>
      )
    },
  },
  {
    description: 'I embarked on a journey into web development.',
    title: 'Self-Taught Web Developer',
    src: Phase5,
    ctaText: 'Read',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Driven by a passion for technology and a desire for a career change, I embarked on a deeper self-taught
          journey into web development. Leveraging online resources, tutorials, and personal projects, I immersed myself
          in the world of HTML, CSS, and JavaScript. The transition from a structured learning environment to
          self-directed learning required discipline and perseverance. Through countless months of coding and
          experimentation, I developed a strong foundation in full stack development. <br /> I challenged myself by
          building personal projects, gradually increasing the complexity of my creations. This hands-on approach
          allowed me to solidify my understanding of web development principles and apply them to real-world scenarios.
          <br /> The self-learning process also fostered a strong problem-solving mindset. Encountering and overcoming
          coding challenges became an integral part of my growth. <br /> I learned to break down complex problems into
          smaller, manageable steps, and to seek out solutions through online communities and forums.
        </p>
      )
    },
  },
]
