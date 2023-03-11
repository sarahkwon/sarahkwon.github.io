import Header from './Header'
import BubbleChart from './BubbleChart'
import MiniGuy from './MiniGuy'
import TechSubsection from './TechSubsection'
import { technologyColor } from '../utils/Colors'

import { Box, Container, SimpleGrid, Center } from '@chakra-ui/react'

import { DiReact, DiMongodb, DiNodejsSmall } from 'react-icons/di'
import { SiChakraui, SiJavascript, SiCss3, SiCplusplus, SiC, SiMysql, SiGit, SiTypescript, SiHtml5, SiExpress, SiJava } from 'react-icons/si'

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
    icon: <SiChakraui/>,
    name: 'ChakraUI',
    type : 'Frontend',
    value: 80
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
    value: 78
  },
  {
    icon: <SiMysql/>,
    name: 'mySQL',
    type: 'Language',
    value: 75
  },
  {
    icon: <SiHtml5/>,
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
    value: 65
  },
  {
    icon: <SiGit/>,
    name: 'Git',
    type: 'Tool',
    value: 75
  },
  {
    icon: <SiTypescript/>,
    name: 'Typescript',
    type: 'Language',
    value: 70
  },
  {
    icon: <SiExpress/>,
    name: 'Express.js',
    type: 'Backend',
    value: 55
  },
  {
    icon: <SiJava/>,
    name: 'Java',
    type: 'Language',
    value: 78
  }
]

const frontendTech = data.filter((item) => item.type === 'Frontend').sort((a, b) => b.value - a.value)
const backendTech = data.filter((item) => item.type === 'Backend').sort((a, b) => b.value - a.value)
const toolTech = data.filter((item) => item.type === 'Tool').sort((a, b) => b.value - a.value)
const languageTech = data.filter((item) => item.type === 'Language').sort((a, b) => b.value - a.value)

const Technology = () => {

  return (
    <Box paddingTop='25px'>
      <MiniGuy image={Korok} maxSize='75px'/>
      <Header text='Technologies' highlight={['Technologies']} color={technologyColor}/>
      <Container maxW='7xl'>
        <SimpleGrid columns={[1, 1, 1, 2]}>
          <SimpleGrid columns={1}>
            <TechSubsection data={languageTech} type='Languages'/>
            <TechSubsection data={frontendTech} type='Frontend'/>
            <TechSubsection data={backendTech} type='Backend'/>
            <TechSubsection data={toolTech} type='Tools'/>
          </SimpleGrid>
          <Center>
            <Container maxW={['7xl', '7xl', '2xl', '2xl', '7xl']}>
              <BubbleChart data={data}/>
            </Container>
          </Center>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Technology