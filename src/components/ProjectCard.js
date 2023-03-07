import { Box, Card, CardBody, CardFooter, Image, Stack, Heading, Text, Wrap, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import TechTag from './TechTag'

const CardHeader = (props) => {
  const { name, link, color } = props

  return (
    <Link href={link}
      _hover={{
        textDecoration: 'none',
        transitionDuration: '.3s',
        boxShadow: [`inset 20em 0 0 0 ${color}`],
        transitionTimingFunction: 'ease-in-out'
      }}>
      <Heading textStyle='cardHeader' size='md'>
        {name} <ExternalLinkIcon mx='2px' mb={1}/>
      </Heading>
    </Link>
  )

}

const ProjectCard = (props) => {
  const { image, name, description, tags, type, link, color } = props
  return (
    <Card
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
          <Text textStyle='cardTypeText' color={color}>{type}</Text>
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