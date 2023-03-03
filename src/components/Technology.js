import Header from './Header'
import TechCard from './TechCard'
import BubbleChart from './BubbleChart'

import { Box, Container, SimpleGrid, Center} from '@chakra-ui/react'

import { DiReact, DiMongodb, DiNodejsSmall, DiNpm, DiHtml5} from 'react-icons/di'
import { SiChakraui, SiJavascript, SiEslint, SiJest, SiCss3} from 'react-icons/si'

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
  }
]

const Technology = () => {

  return (
    <Box id="technology" layerStyle='technology' paddingTop='50px'>
      <Header text="Technologies" highlight={["Technologies"]} color="pink.200" textColor='black'/>
      <Container maxW='7xl'>
        <SimpleGrid columns={[1, 1, 2]}>
            <Center>
                <SimpleGrid columns={[1, 1, 2]} spacing={3} w='80%'>
                  {data.map((item, idx) => {
                    return <TechCard key={idx} icon={item.icon} name={item.name}/>
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