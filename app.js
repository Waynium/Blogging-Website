const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

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

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function showProject(image) {
    image.classList.toggle('expand');
}

const linkers = document.querySelectorAll('.linker');
const sectioners = document.querySelectorAll('section');

let activeLinker = 0;

linkers.forEach((linker, i) => {
    linker.addEventListener('click', () => {
        if (activeLinker != i) {
            linkers[activeLinker].classList.remove('active');
            linker.classList.add('active');
            sectioners[activeLinker].classList.remove('active');

            setTimeout(() => {
                activeLinker = i;
                sectioners[i].classList.add('active');
            }, 1000);
        }
    })
})

