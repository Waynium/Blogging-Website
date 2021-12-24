const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');
const csections = document.querySelectorAll('cs-section')

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if (activeLink != i) {
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})
/*
var menuList = document.getElementsByClassName("link-group");
menuList.style.maxHeight = "0px";

function togglemenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "130px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}*/