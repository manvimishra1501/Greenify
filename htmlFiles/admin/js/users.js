document.addEventListener('DOMContentLoaded', () => {
  const pendingTableBody = document.querySelector('#pendingTable tbody');
  const searchInput = document.getElementById('searchInput');
  const pendingCount = document.getElementById('pendingCount');
  const activeTeachers = document.getElementById('activeTeachers');
  const activeSchools = document.getElementById('activeSchools');

  // Sample data
  let users = [
    { name: 'Priya Sharma', type: 'Teacher', status: 'Pending' },
    { name: 'Green Valley School', type: 'School', status: 'Pending' },
    { name: 'Rohit Verma', type: 'Teacher', status: 'Approved' },
    { name: 'Sunrise Academy', type: 'School', status: 'Approved' }
  ];

  function updateCounts() {
    const pending = users.filter(u => u.status === 'Pending').length;
    const teachers = users.filter(u => u.type === 'Teacher' && u.status === 'Approved').length;
    const schools = users.filter(u => u.type === 'School' && u.status === 'Approved').length;
    pendingCount.textContent = pending;
    activeTeachers.textContent = teachers;
    activeSchools.textContent = schools;
  }

  function renderTable(data) {
    pendingTableBody.innerHTML = '';
    data.forEach((user, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${user.name}</td>
        <td>${user.type}</td>
        <td><span class="badge ${user.status.toLowerCase()}">${user.status}</span></td>
        <td>
          ${user.status === 'Pending' ? `
            <button class="btn primary" data-index="${index}" data-action="approve">Approve</button>
            <button class="btn danger" data-index="${index}" data-action="reject">Reject</button>
          ` : '-'}
        </td>
      `;
      pendingTableBody.appendChild(tr);
    });

    // Add button click handlers
    document.querySelectorAll('#pendingTable button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.target.getAttribute('data-index');
        const action = e.target.getAttribute('data-action');
        if(action === 'approve') users[idx].status = 'Approved';
        if(action === 'reject') users[idx].status = 'Rejected';
        renderTable(users);
        updateCounts();
      });
    });
  }

  // Search/filter
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = users.filter(u => u.name.toLowerCase().includes(query));
    renderTable(filtered);
  });

  renderTable(users);
  updateCounts();
});
