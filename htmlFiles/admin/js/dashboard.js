document.addEventListener('DOMContentLoaded', () => {
  // Logout
  const logoutBtn = document.getElementById('logoutBtn');
  if(logoutBtn){
    logoutBtn.addEventListener('click', () => {
      window.location.href = '../index.html';
    });
  }

  // Fetch dashboard data
  fetch('../data/dashboard.json')
    .then(res => res.json())
    .then(data => {
      // Populate stats
      document.getElementById('totalSchools').textContent = data.totalSchools;
      document.getElementById('totalTeachers').textContent = data.totalTeachers;
      document.getElementById('totalStudents').textContent = data.totalStudents;
      document.getElementById('ecoPoints').textContent = data.ecoPoints.toLocaleString();

      // Pending approvals
      const pendingList = document.getElementById('pendingList');
      pendingList.innerHTML = `
        <li>Teacher Registrations: ${data.pendingApprovals.teacherRegistrations}</li>
        <li>School Verification: ${data.pendingApprovals.schoolVerifications}</li>
        <li>Flagged Posts: ${data.pendingApprovals.flaggedPosts}</li>
      `;

      // Chart.js
      const ctx = document.getElementById('quickChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.weeklyEcoPoints.labels,
          datasets: [{
            label: 'Eco Points',
            data: data.weeklyEcoPoints.values,
            backgroundColor: '#20df6c'
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            title: { display: true, text: 'Weekly Eco Points Trend' }
          },
          scales: { y: { beginAtZero: true } }
        }
      });
    })
    .catch(err => console.error('Error loading dashboard JSON:', err));
});
