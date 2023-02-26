// import '../styles/AboutMe.css'

import Header from './Header'
import Carousel from './Carousel'

import '../styles/Projects.css'

// const myProjects = [
//   "Potion Shopkeeper",
//   "Bear: MMORPG",
//   "Interactive Campus Maps",
//   "TFT Stat Tracker"
// ]

const Projects = () => {

  return (
    <div>
      <Header text="Projects"/>
      <Carousel/>
    </div>
  )
}

export default Projects