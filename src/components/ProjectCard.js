import { Box, Card, CardBody, CardFooter, Image, Stack, Heading, Text, Wrap, SlideFade } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'

import TechTag from './TechTag'
import SocialLink from './SocialLink'
import { AiFillGithub } from 'react-icons/ai'

const CardHeader = (props) => {
  const { name } = props

  return (
    <Heading variant='subheading' size='md'>
      {name}
    </Heading>
  )

}

const ProjectCard = (props) => {
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: true
  })

  const { image, name, description, tags, type, link, color } = props
  return (
    <SlideFade in={inView} offsetY='40px' transition='once'>
      <Card
        ref={ref}
        maxW={'lg'}
        h={{ base: 'auto', md: 'lg', lg: 'lg' }}
        bg='#333333'
      >
        <CardBody>
          <Image
            src={image}
            alt={`Picture of ${name}`}
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
            <Text textStyle='text'>
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
    </SlideFade>
  )
}

export default ProjectCard