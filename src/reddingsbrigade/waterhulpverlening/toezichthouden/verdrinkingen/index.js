import reveal from 'reveal.js'

require('./img/drowning.gif')
reveal.initialize({hash: true, width: 1080, slideNumber: true})

import Chart from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

var canvas = document.getElementById('drowningProcess')
var width = canvas.width
var ctx = canvas.getContext('2d')

var gradient = ctx.createLinearGradient(0, 0, width, 0)
gradient.addColorStop(0, 'rgba(255,0,0,0)')
gradient.addColorStop(1, 'rgba(255,0,0,.3)')

var chart = new Chart(ctx, {
  bezierCurve: false,
  type: 'line',
  data: {
    labels: ['', 'Verdrinking begint', 'Drenkeling verdwijnt onder water', 'Drenkeling buiten bewustzijn', 'Hart stopt', 'Hersenbeschadiging', 'Organen beschadiging'],
    datasets: [{
      data: [75],
      backgroundColor: gradient,
    }]
  },
  tooltips: {
    mode: 'index',
    intersect: false,
  },
  options: {
    showAllTooltips: true,
    plugins: {
      datalabels: {
        labels: {
          title: {
            font: {
              weight: 'bold',
              size: 11
            }
          }
        },
        rotation: -90,
        align: function (index) {
          return index.dataIndex < 4 ? 'start' : 'end'
        },
        formatter: function (value, context) {
          return context.chart.data.labels[context.dataIndex]
        }
      }
    },
    legend: false,
    scales: {
      yAxes: [{
        ticks: {
          display: false,
          beginAtZero: true,
          suggestedMax: 100,
        },
      }],
      xAxes: [{
        labels: ['0', '10 s', '20 s', '60 s', '3 min', '4 min', '6 min']
      }]
    },
    elements: {
      line: {
        tension: 0 // disables bezier curves
      }
    }
  }
})

reveal.addEventListener('fragmentshown', function (event) {
  if(typeof event.fragment.dataset.chance !== 'undefined') {
    var datapoints = [75, 75, 75, 75, 50, 25, 0]
    var data = datapoints.slice(0, (parseInt(event.fragment.dataset.fragmentIndex) + 2))
    chart.data.datasets[0].data = data
    chart.update({ durations: 5000 })
  }
});

reveal.addEventListener('fragmenthidden', function (event) {
  if(typeof event.fragment.dataset.chance !== 'undefined') {
    var datapoints = [75, 75, 75, 75, 50, 25, 0]
    var data = datapoints.slice(0, (parseInt(event.fragment.dataset.fragmentIndex) + 1))
    chart.data.datasets[0].data = data
    chart.update({ durations: 5000 })
  }
});

import './index.scss'
