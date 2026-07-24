function normalizePath(path: string): string {
    return path
        .replace(/\/index\.html$/, "/")
        .replace(/\.html$/, "")
        .replace(/\/$/, "");
}

function setActiveNavLink(): void {
    const currentPath = normalizePath(window.location.pathname);
    const navLinks = document.querySelectorAll<HTMLAnchorElement>("#aside nav a.nav-link");

    navLinks.forEach((link) => {
        const linkPath = normalizePath(link.pathname); // <- usa a resolução nativa do navegador

        const isActive = linkPath === currentPath;

        const indicator = link.querySelector<HTMLSpanElement>("span.absolute");
        const text = link.querySelector<HTMLSpanElement>(".nav-text");

        indicator?.classList.toggle("scale-y-100", isActive);
        indicator?.classList.toggle("scale-y-0", !isActive);
        indicator?.classList.toggle("group-hover:scale-y-100", !isActive);

        text?.classList.toggle("text-primary", isActive);
        text?.classList.toggle("text-secondary", !isActive);

        link.setAttribute("aria-current", isActive ? "page" : "false");
    });
}

function isDesktop(): boolean {
    return window.innerWidth >= 768;
}

export function initSidebar(): void {
    const menuBtn = document.getElementById('burger-btn') as HTMLButtonElement;
    const asideCloseBtn = document.getElementById('aside-closebtn') as HTMLButtonElement;
    const aside = document.querySelector('aside') as HTMLElement;
    const logoImg = document.getElementById('kairos-logo') as HTMLImageElement;

    function toggleCollapse() {
        const collapsing = !aside.classList.contains('is-collapsed');
        aside.classList.toggle('is-collapsed');

        const mainContent = document.getElementById('main-content');
        mainContent?.classList.toggle('md:ml-72');
        mainContent?.classList.toggle('md:ml-28');

        logoImg.src = collapsing
            ? '/frontend/assets/images/logotipo-1.svg'
            : '/frontend/assets/images/logotipo-3.svg';
    }

    function toggleVisibility() {
        aside.classList.toggle('-translate-x-full');
    }

    if (!isDesktop()) {
        aside.classList.add('-translate-x-full');
    }

    asideCloseBtn.addEventListener('click', () => {
        isDesktop() ? toggleCollapse() : toggleVisibility();
    });

    menuBtn.addEventListener('click', toggleVisibility);

    setActiveNavLink();
}