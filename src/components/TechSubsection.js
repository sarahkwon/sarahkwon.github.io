import { VStack, SlideFade, Heading } from '@chakra-ui/react'
import { technologyColor } from '../utils/Colors'

import TechCard from './TechCard'

const TechSubsection = (props) => {
  const { data, inView, type } = props
  return (
    <SlideFade in={inView} offsetX='-30px'>
      <VStack justifyContent='left' alignItems='left'>
        <Heading textStyle='cardHeader' size='md'>{type}</Heading>
        {data.map((item, idx) => {
          return (
            <TechCard key={idx}  icon={item.icon} name={item.name} color={technologyColor}/>
          )
        })}
      </VStack>
    </SlideFade>

  )
}

export default TechSubsection