import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Tag, Wrap } from '@chakra-ui/react'

import TechTag from './TechTag'

const ProjectCard = (props) => {
  const { image, name, description, tags, id } = props
  return (
    <Card maxW='sm' p='0.5' bg='white'>
      <CardBody>
        <Image 
          src={image}
          alt='alt'
          borderRadius='md'
        />
        <Stack mt='6'>
            <Heading textStyle='cardHeader' size='md'>
              {name}
            </Heading>
          <Text textStyle='cardText'>
            {description}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Wrap>
          {tags.map((tag, idx) => <TechTag key={idx} text={tag}/>)}
        </Wrap>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard