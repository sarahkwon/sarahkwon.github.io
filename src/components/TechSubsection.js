import { SlideFade, Heading, SimpleGrid } from '@chakra-ui/react'
import { technologyColor } from '../utils/Colors'
import { useInView } from 'react-intersection-observer'

import TechCard from './TechCard'

const TechSubsection = (props) => {
  const { data, type } = props
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })
  return (
    <SlideFade in={inView} offsetX='-30px'>
      <Heading
        ref={ref}
        variant='subheading'
        size='md'
        pt={4}
        pb={1}
      >{type}</Heading>
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