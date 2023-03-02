import Highcharts from 'highcharts'
import highchartsMore from 'highcharts/highcharts-more'
import HighchartsReact from 'highcharts-react-official'
import HC_patternFill from "highcharts-pattern-fill";
import * as ReactDOMServer from 'react-dom/server'

highchartsMore(Highcharts);
HC_patternFill(Highcharts);



const BubbleChart = (data) => {
  console.log(data)
  const options = {
    chart: {
      type: "packedbubble",
      backgroundColor: '#234152',
      height: '100%',
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
          enabled: true,
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
        name: "Technologies",
        data: data.data,
        color: '#66b16c'
            
      }]
    }

  return (
    <span>
      <HighchartsReact highcharts={Highcharts} options={options}/>
    </span>
  )
}

export default BubbleChart