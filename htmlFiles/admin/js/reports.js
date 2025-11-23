document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("analyticsChart");

  if (ctx) {
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Active Users",
            data: [320, 450, 600, 750],
            borderColor: "#27ae60",
            backgroundColor: "rgba(39, 174, 96, 0.2)",
            borderWidth: 3,
            tension: 0.3,
            fill: true
          },
          {
            label: "Eco-Points Earned",
            data: [1200, 1800, 2500, 4000],
            borderColor: "#3498db",
            backgroundColor: "rgba(52, 152, 219, 0.2)",
            borderWidth: 3,
            tension: 0.3,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
          title: { display: true, text: "Platform Analytics (Monthly)", font: { size: 18, weight: "bold" } }
        },
        scales: { y: { beginAtZero: true } }
      }
    });
  }
});

