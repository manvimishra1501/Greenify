document.addEventListener('DOMContentLoaded', () => {
  const contentList = document.getElementById('contentList');
  const teacherSubmissions = document.getElementById('teacherSubmissions');

  fetch('data/content.json')
    .then(response => response.json())
    .then(data => {
      data.globalResources.forEach(res => {
        const li = document.createElement('li');
        li.textContent = res;
        contentList.appendChild(li);
      });

      data.teacherSubmissions.forEach(sub => {
        const li = document.createElement('li');
        li.textContent = sub;
        const approveBtn = document.createElement('button');
        approveBtn.textContent = 'Approve';
        approveBtn.onclick = () => alert(`Approved: ${sub}`);
        li.appendChild(approveBtn);
        teacherSubmissions.appendChild(li);
      });
    });
});
