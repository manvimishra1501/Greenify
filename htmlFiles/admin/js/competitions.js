document.addEventListener('DOMContentLoaded', () => {
  const competitionList = document.getElementById('competitionList');
  const leaderboards = document.getElementById('leaderboards');

  fetch('data/competitions.json')
    .then(response => response.json())
    .then(data => {
      data.competitions.forEach(comp => {
        const li = document.createElement('li');
        li.textContent = comp;
        competitionList.appendChild(li);
      });

      data.leaderboards.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = entry;
        leaderboards.appendChild(li);
      });
    });
});
