import * as reveal from '../../../../node_modules/reveal.js/js/reveal'
import ChartDataLabels from 'chartjs-plugin-datalabels'

reveal.initialize({hash: true, width:1080});

import './index.scss'
import Chart from 'chart.js'

var canvas = document.getElementById('childDrowning')
var width = canvas.width
var ctx = canvas.getContext('2d')

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Gevaar/Incident', 'Bewust-\nwording', 'Methode\nkeuze', 'Uitvoering', 'Afronding', 'Voorbereiding'],
    datasets: [{
      data: [6,6,6,6,6,6],
      backgroundColor: ['#3D1F14', '#D68B70', '#8A4F3A', '#0E3D34', '#3A8A79', '#A9937D'],
    },]
  },
  options: {
    legend: {
      display: false
    },
    plugins: {
      datalabels: {
        labels: {
          title: {
            font: {
              size:12
            },
            color: 'white'
          },
          value: {},
        },
        formatter: function (value, context) {
          return context.chart.data.labels[context.dataIndex]
        }
      }
    }
  }
})