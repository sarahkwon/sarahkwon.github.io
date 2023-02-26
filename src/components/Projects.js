// import '../styles/AboutMe.css'

import Header from './Header'
import Carousel from './Carousel'
import {Container} from 'react-bootstrap'

import '../styles/Projects.css'

// const myProjects = [
//   "Potion Shopkeeper",
//   "Bear: MMORPG",
//   "Interactive Campus Maps",
//   "TFT Stat Tracker"
// ]

const Projects = () => {

  return (
    <div className="projects-section">
      <Container id="projects">
        <Header text="Projects"/>
        <Carousel/>
      </Container>
    </div>
  )
}

export default Projects