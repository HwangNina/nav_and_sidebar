const sidebarBtn = document.getElementById('sidebar-btn');
const sidebar = document.getElementById('sidebar_area');
const navbar = document.getElementById('main_nav');
const removeSide = document.getElementById('back_arrow');

const sidebarAppear = () => {
    sidebar.classList.add('show');
    sidebar.classList.remove('none');
}

const sidebarRemove = () => {
    sidebar.classList.add('none');
    sidebar.classList.remove('show');
    navbar.style.display = 'block';
}

sidebarBtn.addEventListener('click',() => {
    sidebarAppear();
    // navbar.style.display = 'none';
});

removeSide.addEventListener('click',sidebarRemove);