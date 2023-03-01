// import '../styles/AboutMe.css'

import Header from './Header'
import React from 'react';
import { Box } from '@chakra-ui/react'
import Highcharts from 'highcharts'
import highchartsMore from 'highcharts/highcharts-more'
import HighchartsReact from 'highcharts-react-official'

import Campus from '../img/campusMapDemo-modified.png'
import Potion from '../img/Capture2-modified.png'
import Maple from '../img/bearMS-modified.png'

import '../styles/Projects.css'

highchartsMore(Highcharts);

const chartOptions = {
  chart: {
    type: "packedbubble",
    backgroundColor: '#5da3b6',
    height: '35%'
  },
  title: {
    text: ''
  },
  tooltip: {
    outside: true,
    style: {
      fontSize: '16px',
      width: '350px',
      backgroundColor: 'white',
      fontFamily: 'montserrat',
      fontWeight: '400'
    },
    pointFormat: (
      '<b>{point.name}</b>'  + 
      '<br/><br/>' +
      '{point.options.custom.description}<br/><br/>' +
      '<b>Technologies:</b> <br/> {point.options.custom.technologies}'
  )
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    packedbubble: {
      minSize: "75%",
      maxSize: "100%",
      //zMin: 0,
      //zMax: 1000,
      layoutAlgorithm: {
        splitSeries: false,
        gravitationalConstant: 0.02
      },
      dataLabels: {
        enabled: false,
      },
      series: {
        opacity: '50%'
      }
    }
  },
  series: [
    {
      name: "Projects",
      data: [{
          name: "Potion Shopkeeper",
          value: 50,
          color: '#66b16c',
          marker: {
            
            symbol: `url(${Potion})`,
            
          },
          custom: {
            description: "A cute business simulation game where you run a small potion shop! Discover and craft new potion recipes, and figure out a good price range for it by observing customer reactions.",
            technologies: "Unity C#"
          }
          
        },
        {
          name: "Bear: MMORPG",
          value: 60,
          color: '#66b16c',
          marker: {
            symbol: `url(${Maple})`,
            
          },
          custom: {
            description: "An online social hub where players within the community can interact through in-game events and guilds.",
            technologies: "Javascript, Java, mySQL Workbench, XPath"
          }
          
        },
        {
          name: "Interactive Campus Maps",
          value: 60,
          color: '#66b16c',
          marker: {
            symbol: `url(${Campus})`,
            
          },
          custom: {
            description: "A crowd-sourced platform that offers detailed locations of individual classrooms of university campuses.",
            technologies: "Typescript, React.js, Node.js, Express.js, Redux, MongoDB"
          }
        }
      ]
    }
  ]}

const Projects = () => {

  return (
    <Box paddingTop='50px' layerStyle='projects'>
        <Header text="Projects" highlight={['Projects']} color='red.400'/>
        <HighchartsReact highcharts={Highcharts} options={chartOptions}/>
    </Box>
  )
}

export default Projects