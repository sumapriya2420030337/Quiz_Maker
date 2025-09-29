const ctx = document.getElementById('progressChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Quiz 1', 'Quiz 2', 'Quiz 3'],
    datasets: [{
      label: 'Scores',
      data: [2, 1, 2],
      backgroundColor: '#0f0'
    }]
  }
});
