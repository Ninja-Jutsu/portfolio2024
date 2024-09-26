import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
// import MyStory from './components/MyStory'
import Contact from './components/Contact'
import BackgroundBeamsDisplay from './components/BackGroundBeams'
// import { ExpandableCardDemo } from './components/ExpandableCards'
import { TimelineDemo } from './components/TimeLine'

function App() {
  return (
    <>
      <BackgroundBeamsDisplay>
        <NavBar />
        <Hero />
      </BackgroundBeamsDisplay>
      <About />
      <Skills />
      <Projects />
      <TimelineDemo />
      {/* <MyStory /> */}
      {/* <ExpandableCardDemo /> */}
      <Contact />
    </>
  )
}

export default App
