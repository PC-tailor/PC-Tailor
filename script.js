
// Funktio valikon avaamiseksi/sulkemiseksi
function toggleMenu() {
        const menu = document.querySelector('.menu');
        const overlay = document.getElementById('page-overlay');
        const menuBar = document.querySelector('.menu-bar');
        menu.classList.toggle('open');
        menuBar.classList.toggle('open');
        overlay.style.display = menu.classList.contains('open') ? 'block' : 'none';
    }
   
   
