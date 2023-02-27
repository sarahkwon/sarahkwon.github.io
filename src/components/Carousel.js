import Flickity from 'react-flickity-component'

import ProjectCard from './ProjectCard'

import 'flickity/dist/flickity.css'
import '../styles/Carousel.css'

const projects = [
  {
    image: require('../img/bearMS.png'),
    name: "Bear: MMORPG",
    description: "A MapleStory emulator with custom features implemented in Java, Javascript, SQL, and Assembly."
  },
  {
    image: require("../img/campusMapDemo.png"),
    name: "Interactive Campus Maps",
    description: "Crowd-sourced platform created to help students navigate around their university campus."
  },
  {
    image: require("../img/Capture2.png"),
    name: "Potion Shopkeeper",
    description: "Business simulation game where you buy ingredients, craft potions, and sell to customers."
  }
]

const flickityOptions = {
  draggable: true,
  initialIndex: 1
}

const Carousel = () => {
  return (
    <div className="carousel-container">
      {/* <Flickity options={flickityOptions} cellAlign={"left"}> */}
        {projects.map((project) => <ProjectCard image={project.image} name={project.name} description={project.description}/> )}
      {/* </Flickity> */}
    </div>
    
  )
}

export default Carousel