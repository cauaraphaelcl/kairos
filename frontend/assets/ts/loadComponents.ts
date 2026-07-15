type componentMap = {
    elementId: string;
    filePath: string;
};

const components: componentMap[] = [
    // componentes
    {elementId: 'sidebar', filePath: '/frontend/components/sidebar.html'}
];

async function loadComponents(elementId: string, filePath: string): Promise <void> {
    const container = document.getElementById(elementId);
    if (!container) return;

    const response = await fetch(filePath);
    const html  = await response.text();
    container.innerHTML = html;
}

export async function loadAllComponents(): Promise<void> {
    await Promise.all(
        components.map(({ elementId, filePath }) => loadComponents(elementId, filePath))
    );
}


