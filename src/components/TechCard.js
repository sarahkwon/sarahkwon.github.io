import { Card, HStack, Box, CardBody} from '@chakra-ui/react'
import { IconContext } from 'react-icons'

const TechCard =( props) => {
  const {name, icon} = props
  return (
    <Card>
      <CardBody>  
        <HStack>
          <Box maxW='md'>
          <IconContext.Provider value={{ className: "global-class-name", size: ['2em']}}>
          <div>
            {icon}
          </div>
        </IconContext.Provider>
          </Box>
          <Box maxW='lg'>
            {name}
          </Box>
        </HStack>
        </CardBody>
    </Card>
  )
}

export default TechCard