const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['TDM', 'Classic', 'Custom Matches', 'PlayGround', 'Training ground'],
    datasets: [{
      label: '# of Votes',
      data: [1, 3, 0.5, 0.5, 1],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



Chart.defaults.font.size = 8;
const ctx3 = document.getElementById('myChart3');
new Chart (ctx3, {
    type: 'radar',
    data: {
        labels: [
          'Survival',
          'Win Ratio',
          'Support',
          'Matches',
          'Total Ranking'
        ],
        datasets: [{
          label: 'Scout-OP',
          data: [65, 69, 84, 81, 73],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'Jhonathan-OP',
          data: [88, 74, 70, 68, 75],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      },
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        }
      },
});
