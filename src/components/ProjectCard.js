import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Tag, Wrap } from '@chakra-ui/react'

import TechTag from './TechTag'

const ProjectCard = (props) => {
  const { image, name, description, tags } = props
  console.log(tags)
  return (
    <Card maxW='sm' boxShadow='4px 4px 2px #246043' p='0.5' bg='#368264'>
      <CardBody>
        <Image 
          src={image}
          alt='alt'
          borderRadius='md'
        />
        <Stack mt='6'>
            <Heading textStyle='h4' size='md'>
              {name}
            </Heading>
          <Text textStyle='cardText'>
            {description}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Wrap>
          {tags.map((tag) => <TechTag text={tag}/>)}
        </Wrap>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard