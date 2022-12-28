const navbar = document.getElementById('navbar');

window.onscroll = ()=> {
    if(window.scrollY >= 60) {
        navbar.classList.add('shadow-sm');
    } else {
        navbar.classList.remove('shadow-sm');
    }
}