// import '../styles/AboutMe.css'

import Header from './Header'
import React from 'react';
import { Box } from '@chakra-ui/react'
import Highcharts from 'highcharts'
import highchartsMore from 'highcharts/highcharts-more'
import HighchartsReact from 'highcharts-react-official'
import HC_patternFill from "highcharts-pattern-fill";

import Campus from '../img/campusMapDemo-modified.png'
import Potion from '../img/capture2.png'
import Maple from '../img/bearMS-modified.png'

import '../styles/Projects.css'

highchartsMore(Highcharts);
HC_patternFill(Highcharts);

const options = {
  chart: {
    type: "packedbubble",
    backgroundColor: '#5da3b6',
    height: '35%',
  },
  title: {
    text: ''
  },
  tooltip: {
    style: {
      fontSize: '16px',
      width: '300px',
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
    }
  },
  series: [
    {
      name: "Projects",
      color: {

      },
      data: [{
          name: "Potion Shopkeeper",
          value: 50,
          custom: {
            description: "A cute business simulation game where you run a small potion shop! Discover and craft new potion recipes, and figure out a good price range for it by observing customer reactions.",
            technologies: "Unity C#",
          },
          marker: {
            symbol: `url(${Potion})`,
            states: {
              normal: {
                opacity: 0.5,
                fillColor: 'rgba(70,146,102,0.5)',
                borderWidth: 10,
              },
              hover: {
                opacity: 1,
                fillColor: 'rgba(70,146,102,1)',
                halo: {
                  size: 10,
                  opacity: 1
                },
                
              }
            }
          },
          
        },
        {
          name: "Bear: MMORPG",
          value: 60,
          custom: {
            description: "An online social hub where players within the community can interact through in-game events and guilds.",
            technologies: "Javascript, Java, mySQL Workbench, XPath"
          },
          marker: {
            fillColor: 'rgba(70,146,102,255)',
            symbol: `url(${Maple})`,
          states: {
            normal: {
              opacity: 0.5,
              fillColor: 'rgba(70,146,102,0.5)',
              borderWidth: 10,
            },
            hover: {
              opacity: 1,
              fillColor: 'rgba(70,146,102,1)',
            }
          },
          
        }},
        {
          name: "Interactive Campus Maps",
          value: 60,
          color: '#66b16c',
          marker: {
            fillColor: 'rgba(70,146,102,255)',
            symbol: `url(${Campus})`,
            states: {
              normal: {
                opacity: 0.5,
                fillColor: 'rgba(70,146,102,0.5)',
                borderWidth: 10,
              },
              hover: {
                opacity: 1,
                fillColor: 'rgba(70,146,102,1)',
              }
            },
          },
          custom: {
            description: "A crowd-sourced platform that offers detailed locations of individual classrooms of university campuses.",
            technologies: "Typescript, React.js, Node.js, Express.js, Redux, MongoDB"
          },
        
        }
      ]
    }
  ]}

const Projects_old = () => {

  return (
    <Box paddingTop='50px' layerStyle='projects'>
        <Header text="Projects" highlight={['Projects']} color='red.400'/>
        <HighchartsReact highcharts={Highcharts} options={options}/>
    </Box>
  )
}

export default Projects_old