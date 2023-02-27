import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text } from '@chakra-ui/react'

const ProjectCard = (props) => {
  const { image, alt, name, description } = props
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image 
          src={image}
          alt={alt}
          borderRadius='md'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <Text>
            {description}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default ProjectCard