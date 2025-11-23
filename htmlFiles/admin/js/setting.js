document.addEventListener('DOMContentLoaded', () => {
  fetch('data/settings.json')
    .then(response => response.json())
    .then(data => {
      document.querySelector('#profileForm input[type="text"]').value = data.profile.username;
      document.querySelector('#profileForm input[type="email"]').value = data.profile.email;
    });

  const profileForm = document.getElementById('profileForm');
  profileForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Profile updated successfully!');
  });
});
