const nav = document.querySelector('.navbar-container');
const topBtn = document.querySelector('.scroll-top')

console.log(topBtn);
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200  ) {
        nav.classList.add("nav-colored");
        nav.classList.remove("nav-transparent");
        topBtn.classList.remove("d-none");

    } 
    else {
        nav.classList.add("nav-transparent");
        topBtn.classList.add("d-none");
        nav.classList.remove("nav-colored");
    }
};