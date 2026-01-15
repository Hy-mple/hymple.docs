// Adjust sidebar height to stop at footer
function adjustSidebarHeight() {
  const sidebar = document.querySelector('.md-sidebar--primary');
  const footer = document.querySelector('.md-footer');
  
  if (!sidebar || !footer) return;
  
  const headerHeight = 3.6 * 16; // 3.6rem in pixels
  const footerTop = footer.getBoundingClientRect().top + window.scrollY;
  const availableHeight = footerTop - headerHeight;
  
  sidebar.style.maxHeight = `${availableHeight}px`;
}

// Run on load and resize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', adjustSidebarHeight);
} else {
  adjustSidebarHeight();
}

window.addEventListener('resize', adjustSidebarHeight);
window.addEventListener('scroll', adjustSidebarHeight);
