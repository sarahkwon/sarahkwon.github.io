// import '../styles/AboutMe.css'

import Header from './Header'
import React from 'react';
import { Box } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'

import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Container } from '@chakra-ui/react'

import Campus from '../img/campusMapDemo.png'
import Potion from '../img/PotionShop.png'
import Maple from '../img/bearMS.png'

import '../styles/Projects.css'

const projects = [
  {
    image: `${Maple}`,
    name: "Bear: MMORPG",
    description: "A MapleStory emulator with custom features implemented in Java, Javascript, SQL, and Assembly.",
    tags: ['Javascript', 'Java', 'Assembly', 'SQL', 'mySQL Workbench', ]
  },
  {
    image: `${Campus}`,
    name: "Interactive Campus Maps",
    description: "Crowd-sourced platform created to help students navigate around their university campus.",
    tags: ['Typescript', 'Node.js', 'Express.js', 'React.js', 'MongoDB', 'Redux']
  },
  {
    image: `${Potion}`,
    name: "Potion Shopkeeper",
    description: "Business simulation game where you buy ingredients, craft potions, and sell to customers.",
    tags: ['C#', 'Unity']
  }
]



const Projects= () => {

  return (
    <Box paddingTop='50px' layerStyle='projects'>
        <Header text="Projects" highlight={['Projects']} color='#368264' textColor='white'/>
          <Container maxW='6xl'>
            <SimpleGrid minChildWidth='250px' columns={[1, 3]} spacing={5}>
                {projects.map((project) => {
                  return <ProjectCard name={project.name} image={project.image} description={project.description} tags={project.tags}/>
                })}
              </SimpleGrid>
          </Container>

    </Box>
  )
}

export default Projects