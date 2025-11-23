// main.js - Global functions for all pages

console.log("Admin Portal - Global JS Loaded");

// Sidebar toggle (if you want to make collapsible)
const sidebar = document.querySelector('.sidebar');
const toggleSidebar = () => {
  sidebar.classList.toggle('collapsed');
};

// Optional: Add toggle button in navbar if needed
// document.getElementById('toggleSidebarBtn').addEventListener('click', toggleSidebar);
