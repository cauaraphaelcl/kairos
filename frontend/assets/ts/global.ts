const menuBtn = document.getElementById('burger-btn') as HTMLButtonElement;
const asideCloseBtn = document.getElementById('aside-closebtn') as HTMLButtonElement;
const aside = document.querySelector('aside') as HTMLElement;
const logoImg = document.getElementById('kairos-logo') as HTMLImageElement;
const navTexts = document.querySelectorAll<HTMLElement>('.nav-text');


function isDesktop(): boolean {
    return window.innerWidth >= 768;
}

// Colapsa/expande no desktop
function toggleCollapse() {
    const collapsing = aside.classList.contains("md:w-1/6");

    aside.classList.toggle('md:w-1/6');
    aside.classList.toggle('md:w-28');
    aside.classList.toggle('is-collapsed');
    aside.classList.toggle('overflow-hidden');
    aside.classList.toggle('overflow-visible');


    logoImg.src = collapsing
        ? '/frontend/assets/images/logotipo-1.svg'
        : '/frontend/assets/images/logotipo-3.svg';
    }

    
// Mostra/esconde no mobile
function toggleVisibility() {
    aside.classList.toggle('-translate-x-full');
}

// Estado inicial: escondido só no mobile
if (!isDesktop()) {
    aside.classList.add('-translate-x-full');
}

// O botão de seta se comporta diferente dependendo da tela
asideCloseBtn.addEventListener('click', () => {
    if (isDesktop()) {
        toggleCollapse();
    } else {
        toggleVisibility();
    }
});

menuBtn.addEventListener('click', toggleVisibility);