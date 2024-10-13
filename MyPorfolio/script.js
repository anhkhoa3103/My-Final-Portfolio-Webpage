document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const manuText = document.getElementById('menu-text');

    //function toggle sidebar 
    function toggleSidebar() {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        document.body.classList.toggle('sidebar-open');
        menuButton.classList.toggle('active');        
    }

    menuButton.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar)
});