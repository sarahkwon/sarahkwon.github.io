// import '../styles/AboutMe.css'

import Header from './Header'
import React from 'react';
import { Box } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'

import { SimpleGrid, Container } from '@chakra-ui/react'

import Campus from '../img/campusMapDemo.png'
import Potion from '../img/PotionShop.png'
import Maple from '../img/bearMS.png'

import '../styles/Projects.css'

const projects = [
  {
    id: 0,
    image: `${Maple}`,
    name: "Bear: MMORPG",
    description: "A MapleStory emulator with custom features implemented in Java, Javascript, SQL, and Assembly.",
    tags: ['Javascript', 'Java', 'Assembly', 'SQL', 'mySQL Workbench', ]
  },
  {
    id: 1,
    image: `${Campus}`,
    name: "Interactive Campus Maps",
    description: "Crowd-sourced platform created to help students navigate around their university campus.",
    tags: ['Typescript', 'Node.js', 'Express.js', 'React.js', 'MongoDB', 'Redux']
  },
  {
    id: 2,
    image: `${Potion}`,
    name: "Potion Shopkeeper",
    description: "Business simulation game where you buy ingredients, craft potions, and sell to customers.",
    tags: ['C#', 'Unity']
  }
]



const Projects= () => {


  return (
    <Box id="projects" paddingTop='50px' layerStyle='projects'>
        <Header text="Projects" highlight={['Projects']} color='pink.200' textColor='black'/>
          <Container maxW='7xl'>
            <SimpleGrid columns={[1, 3, 3]} spacing={5}>
                {projects.map((project) => {
                  return <ProjectCard key={project.id} id={project.id} name={project.name} image={project.image} description={project.description} tags={project.tags}/>
                })}
              </SimpleGrid>
          </Container>

    </Box>
  )
}

export default Projects