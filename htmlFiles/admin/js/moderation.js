document.addEventListener('DOMContentLoaded', () => {
  const flaggedContent = document.getElementById('flaggedContent');
  const teacherModeration = document.getElementById('teacherModeration');

  fetch('data/moderation.json')
    .then(response => response.json())
    .then(data => {
      data.flaggedContent.forEach(f => {
        const li = document.createElement('li');
        li.textContent = f;
        flaggedContent.appendChild(li);
      });

      data.teacherModerationTasks.forEach(t => {
        const li = document.createElement('li');
        li.textContent = t;
        teacherModeration.appendChild(li);
      });
    });
});
