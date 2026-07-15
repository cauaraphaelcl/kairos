const components = [
    // componentes
    { elementId: 'sidebar', filePath: '/frontend/components/sidebar.html' }
];
async function loadComponents(elementId, filePath) {
    const container = document.getElementById(elementId);
    if (!container)
        return;
    const response = await fetch(filePath);
    const html = await response.text();
    container.innerHTML = html;
}
export async function loadAllComponents() {
    await Promise.all(components.map(({ elementId, filePath }) => loadComponents(elementId, filePath)));
}
//# sourceMappingURL=loadComponents.js.map