import { SlideFade, Heading, SimpleGrid } from '@chakra-ui/react'
import { technologyColor } from '../utils/Colors'

import TechCard from './TechCard'

const TechSubsection = (props) => {
  const { data, inView, type } = props
  return (
    <SlideFade in={inView} offsetX='-30px'>
      <Heading textStyle='cardHeader' size='md' pt={4} pb={1}>{type}</Heading>
      <SimpleGrid columns={[1, 2, 2, 2, 3]} spacing={2}>
        {data.map((item, idx) => {
          return (
            <TechCard key={idx}  icon={item.icon} name={item.name} color={technologyColor}/>
          )
        })}
      </SimpleGrid>
    </SlideFade>

  )
}

export default TechSubsection