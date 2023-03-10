import { Box, Card, CardBody, CardFooter, Image, Stack, Heading, Text, Wrap } from '@chakra-ui/react'

import TechTag from './TechTag'
import SocialLink from './SocialLink'
import { AiFillGithub } from 'react-icons/ai'

const CardHeader = (props) => {
  const { name } = props

  return (
    <Heading textStyle='cardHeader' size='md'>
      {name}
    </Heading>
  )

}

const ProjectCard = (props) => {
  const { image, name, description, tags, type, link, color } = props
  return (
    <Card
      tabIndex='0'
      border = '2px solid transparent'
      maxW={['lg', 'md', 'sm']}
      p='0.5'
      bg='#333333'
    >
      <CardBody>
        <Image
          src={image}
          alt='alt'
          borderRadius='md'
        />
        <Stack mt='4'>
          <Wrap>
            <Text textStyle='cardTypeText' color={color}>{type}</Text>
            <SocialLink
              aria='Link to Github repository for this project'
              link={link}
              icon={<AiFillGithub size='25px' color={color} label='Github'/>}
              label='Github'
              bg={color}
              textColor='black'
              placement='top'
            />
          </Wrap>
          <CardHeader name={name} link={link} color={color}/>
          <Text textStyle='cardText'>
            {description}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter pt={0}>
        <Wrap>
          {tags.map((tag, idx) => (
            <Box key={idx}>
              <TechTag text={tag} color={color}/>
            </Box>
          ))}
        </Wrap>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard