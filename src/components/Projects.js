// import '../styles/AboutMe.css'

import Header from './Header'
import MiniGuy from './MiniGuy';
import React from 'react';
import { Box, SlideFade } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
import { useInView } from 'react-intersection-observer'

import { SimpleGrid, Container } from '@chakra-ui/react'
import SilentPrincess from '../img/silentPrincess.png'

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
  const [ref, inView] = useInView({
    threshold: 0.5,
    rootMargin: "0px 0px -10% 0px", // Wait until the element is 50px from the viewport bottom
    triggerOnce: true
    
  })

  return (
    <Box paddingTop='50px'>
        <MiniGuy image={SilentPrincess} maxSize='75px'/>
        <Header text="Projects" highlight={['Projects']} color='#46a6d4' textColor='black'/>
          <Container maxW='7xl'>
            <SimpleGrid columns={[1, 3, 3]} spacing={5}>
                {projects.map((project) => {
                  return (
                      <SlideFade in={inView} offsetY='40px' transition='once' ref={ref}>
                        <ProjectCard 
                          key={project.id} 
                          id={project.id} 
                          name={project.name} 
                          image={project.image} 
                          description={project.description} 
                          tags={project.tags}
                        />
                      </SlideFade> 
                  )
                })}
              </SimpleGrid>
          </Container>
    </Box>
  )
}

export default Projects