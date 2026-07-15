async function loadComponent(elementId, filePath) {
    const container = document.getElementById(elementId);
    if (!container)
        return;
    cont;
    response = await fetch(filePath);
    const html = await response.text();
    container.innter = html;
}
export {};
//# sourceMappingURL=components.js.map