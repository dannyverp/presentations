import * as reveal from 'reveal.js'
import Chart from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

reveal.initialize({hash: true, width: 1080, slideNumber: true})

reveal.addEventListener('fragmentshown', function (event) {
  console.log(event.fragment)
})

reveal.addEventListener('fragmenthidden', function (event) {
  console.log(event.fragment)
})

var canvas = document.getElementById('childDrowning')
var width = canvas.width
var ctx = canvas.getContext('2d')

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Zwembad', 'Open water', 'Bad in huis', 'Water bij huis', 'Vijfer of zwembad in tuin'],
    datasets: [{
      data: [5, 31, 9, 24, 31],
      backgroundColor: ['rgb(0, 0, 255)', 'rgb(200, 50, 100)', 'rgb(0, 255, 150)', 'rgb(125,0,125)', 'rgb(0,200,255)']
    }]
  },
  options: {
    legend: {
      position: 'bottom'
    },
    plugins: {
      datalabels: {
        labels: {
          value: {
            color: 'white'
          }
        }
      }
    }
  }
})

import './index.scss'