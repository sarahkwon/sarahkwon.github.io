import { Card, HStack, Box, CardBody } from '@chakra-ui/react'
import { IconContext } from 'react-icons'

const TechCard = (props) => {
  const { name, icon, color } = props

  return (
    <Card
      bg='#333333'
    >
      <CardBody>
        <HStack>
          <Box maxW='md' textStyle='h4' color={color}>
            <IconContext.Provider value={{ className: 'global-class-name', size: ['1.75em'] }}>
              <div>
                {icon}
              </div>
            </IconContext.Provider>
          </Box>
          <Box maxW='lg' textStyle='text'>
            {name}
          </Box>
        </HStack>
      </CardBody>
    </Card>
  )
}

export default TechCard