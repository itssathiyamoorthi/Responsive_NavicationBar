btn = document.getElementsByClassName('btn')[0];
navbar = document.getElementsByClassName('navbar-link')[0];


btn.addEventListener('click',()=>{
    navbar.classList.toggle('active');
})