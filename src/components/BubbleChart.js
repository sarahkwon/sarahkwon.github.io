import Highcharts from 'highcharts'
import highchartsMore from 'highcharts/highcharts-more'
import HighchartsReact from 'highcharts-react-official'
import HC_patternFill from "highcharts-pattern-fill";

import LilyBackend from '../img/lilypads/BackendLily.png'
import LilyFrontend from '../img/lilypads/FrontendLily.png'
import LilyTool from '../img/lilypads/ToolLily.png'
import LilyLanguage from '../img/lilypads/LanguageLily.png'

highchartsMore(Highcharts);
HC_patternFill(Highcharts);



const BubbleChart = (data) => {
  const options = {
    chart: {
      type: "packedbubble",
      backgroundColor: 'transparent',
      height: '100%',
      borderRadius: '50px'
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
        '<b>{point.name}</b>'
    )
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      packedbubble: {
        minSize: "50%",
        maxSize: "100%",
        //zMin: 0,
        //zMax: 1000,
        layoutAlgorithm: {
          splitSeries: false,
          gravitationalConstant: 0.02
        },
        dataLabels: {
          enabled: false,
          useHTML: true,
          format: '{point.name}'
        },
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
      }
    },
    series: [
      {
        name: "Frontend",
        data: data.data.filter((item) => item.type === 'Frontend'),
        color: '#66b16c',
        marker: {
          symbol: `url(${LilyFrontend})`
        }
            
      },
      {
        name: "Backend",
        data: data.data.filter((item) => item.type === 'Backend'),
        color: '#66b16c',
        marker: {
          symbol: `url(${LilyBackend})`
        }
      },
      {
        name: "Tool",
        data: data.data.filter((item) => item.type === 'Tool'),
        color: '#66b16c',
        marker: {
          symbol: `url(${LilyTool})`
        }
      },
      {
        name: "Language",
        data: data.data.filter((item) => item.type === 'Language'),
        color: '#66b16c',
        marker: {
          symbol: `url(${LilyLanguage})`
        }
      }
    ]
    }

  return (
    <span>
      <HighchartsReact highcharts={Highcharts} options={options}/>
    </span>
  )
}

export default BubbleChart