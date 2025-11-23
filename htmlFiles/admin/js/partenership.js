document.addEventListener('DOMContentLoaded', () => {
  const ngoPartners = document.getElementById('ngoPartners');
  const labsAndCerts = document.getElementById('labsAndCerts');

  fetch('data/partnerships.json')
    .then(response => response.json())
    .then(data => {
      data.ngoPartners.forEach(n => {
        const li = document.createElement('li');
        li.textContent = n;
        ngoPartners.appendChild(li);
      });

      data.labsAndCertifications.forEach(l => {
        const li = document.createElement('li');
        li.textContent = l;
        labsAndCerts.appendChild(li);
      });
    });
});
