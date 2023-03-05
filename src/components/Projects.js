import Header from './Header'
import MiniGuy from './MiniGuy'
import { Box, SlideFade } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
import { useInView } from 'react-intersection-observer'

import { SimpleGrid, Container } from '@chakra-ui/react'
import SilentPrincess from '../img/silentPrincess.png'

import Campus from '../img/campusMapDemo.png'
import Potion from '../img/PotionShop.png'
import Maple from '../img/bearMS.png'

const projects = [
  {
    id: 0,
    image: `${Maple}`,
    name: 'Bear: MMORPG',
    description: 'A MapleStory emulator with custom features such as a server-wide bingo game, customized NPCs/map designs/quests, and new items.',
    tags: ['Javascript', 'Java', 'Assembly', 'SQL', 'mySQL Workbench', ],
    link: 'https://github.com/sarahkwon/Bear-Notes',
    type: 'ONLINE GAME'
  },
  {
    id: 1,
    image: `${Campus}`,
    name: 'Interactive Campus Maps',
    description: 'Crowd-sourced platform created to help students navigate around their university campus. Implemented the frontend for the comment section, photo section, and pop-ups.',
    tags: ['Typescript', 'Node.js', 'Express.js', 'React.js', 'MongoDB', 'Redux'],
    link: 'https://github.com/chriscerie/campus-maps',
    type: 'WEB APP'
  },
  {
    id: 2,
    image: `${Potion}`,
    name: 'Potion Shopkeeper',
    description: 'Business simulation game where you buy ingredients, craft potions, and sell to customers. The game is still in the process of being published, but the link will be available as soon as possible!',
    tags: ['C#', 'Unity'],
    link: 'https://github.com/sarahkwon/Potion-Shopkeeper',
    type: 'GAME'
  }
]



const Projects= () => {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true
  })

  return (
    <Box paddingTop='50px'>
      <MiniGuy image={SilentPrincess} maxSize='75px'/>
      <Header text='Projects' highlight={['Projects']} color='#46a6d4' textColor='black'/>
      <Container maxW='7xl' ref={ref}>
        <SimpleGrid columns={[1, 3, 3]} spacing={5}>
          {projects.map((project) => {
            return (
              <SlideFade key={project.id} in={inView} offsetY='40px' transition='once'>
                <ProjectCard
                  id={project.id}
                  name={project.name}
                  type={project.type}
                  image={project.image}
                  description={project.description}
                  link={project.link}
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