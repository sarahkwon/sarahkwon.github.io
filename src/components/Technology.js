import Header from './Header'
import TechCard from './TechCard'
import BubbleChart from './BubbleChart'
import MiniGuy from './MiniGuy'

import { Box, Container, SimpleGrid, Center, SlideFade } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'

import { DiReact, DiMongodb, DiNodejsSmall, DiNpm, DiHtml5 } from 'react-icons/di'
import { SiChakraui, SiJavascript, SiEslint, SiJest, SiCss3, SiCplusplus, SiC } from 'react-icons/si'

import Korok from '../img/korok.gif'

const data = [
  {
    icon: <DiReact/>,
    name: 'React.js',
    type: 'Frontend',
    value: 80
  },
  {
    icon: <DiMongodb/>,
    name: 'MongoDB',
    type: 'Backend',
    value: 50
  },
  {
    icon: <DiNodejsSmall/>,
    name: 'Node.js',
    type: 'Backend',
    value: 65
  },
  {
    icon: <DiNpm/>,
    name: 'npm',
    type: 'Tool',
    value: 75
  },
  {
    icon: <SiChakraui/>,
    name: 'Chakra UI',
    type : 'Frontend',
    value: 80
  },
  {
    icon: <SiEslint/>,
    name: 'Eslint',
    type: 'Tool',
    value: 50
  },
  {
    icon: <SiJest/>,
    name: 'JEST',
    type: 'Tool',
    value: 40
  },
  {
    icon: <SiJavascript/>,
    name: 'Javascript',
    type: 'Language',
    value: 80
  },
  {
    icon: <SiCss3/>,
    name: 'CSS',
    type: 'Language',
    value: 60
  },
  {
    icon: <DiHtml5/>,
    name: 'HTML',
    type: 'Language',
    value: 70
  },
  {
    icon: <SiCplusplus/>,
    name: 'C++',
    type: 'Language',
    value: 95
  },
  {
    icon: <SiC/>,
    name: 'C',
    type: 'Language',
    value: 80
  }
]

const Technology = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  return (
    <Box layerStyle='technology' paddingTop='25px'>
      <MiniGuy image={Korok} maxSize='75px'/>
      <Header text='Technologies' highlight={['Technologies']} color='#66b16c' textColor='black'/>
      <Container maxW='7xl'>
        <SimpleGrid columns={[1, 1, 2]} ref={ref}>
          <Center>
            <SimpleGrid columns={[1, 1, 2]} spacing={3} w='95%'>
              {data.map((item, idx) => {
                return (
                  <SlideFade key={idx} in={inView} offsetX='-30px'>
                    <TechCard icon={item.icon} name={item.name}/>
                  </SlideFade>
                )
              })}
            </SimpleGrid>
          </Center>
          <Box paddingTop='15px'>
            <BubbleChart data={data.map((item) => ({ name: item.name, value: item.value, type: item.type })
            )}/>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Technology