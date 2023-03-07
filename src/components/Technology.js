import Header from './Header'
import BubbleChart from './BubbleChart'
import MiniGuy from './MiniGuy'
import TechSubsection from './TechSubsection'
import { technologyColor } from '../utils/Colors'

import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'

import { DiReact, DiMongodb, DiNodejsSmall, DiNpm, DiHtml5 } from 'react-icons/di'
import { SiChakraui, SiJavascript, SiEslint, SiJest, SiCss3, SiCplusplus, SiC, SiMysql, SiGit } from 'react-icons/si'

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
    value: 90
  },
  {
    icon: <SiCss3/>,
    name: 'CSS',
    type: 'Language',
    value: 75
  },
  {
    icon: <SiMysql/>,
    name: 'mySQL',
    type: 'Language',
    value: 75
  },
  {
    icon: <DiHtml5/>,
    name: 'HTML',
    type: 'Language',
    value: 80
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
    value: 70
  },
  {
    icon: <SiGit/>,
    name: 'Git',
    type: 'Tool',
    value: 75
  }
]

const frontendTech = data.filter((item) => item.type === 'Frontend').sort((a, b) => b.value - a.value)
const backendTech = data.filter((item) => item.type === 'Backend').sort((a, b) => b.value - a.value)
const toolTech = data.filter((item) => item.type === 'Tool').sort((a, b) => b.value - a.value)
const languageTech = data.filter((item) => item.type === 'Language').sort((a, b) => b.value - a.value)

const Technology = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  return (
    <Box layerStyle='technology' paddingTop='25px'>
      <MiniGuy image={Korok} maxSize='75px'/>
      <Header text='Technologies' highlight={['Technologies']} color={technologyColor} textColor='black'/>
      <Container maxW='7xl'>
        <SimpleGrid columns={[1, 1, 2]} ref={ref}>
          <SimpleGrid columns={[1, 1, 2]} spacing={3} w='95%'>
            <TechSubsection data={frontendTech} inView={inView} type='Frontend'/>
            <TechSubsection data={backendTech} inView={inView} type='Backend'/>
            <TechSubsection data={languageTech} inView={inView} type='Languages'/>
            <TechSubsection data={toolTech} inView={inView} type='Tools'/>
          </SimpleGrid>
          <Box paddingTop='15px'>
            <BubbleChart data={data}/>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Technology