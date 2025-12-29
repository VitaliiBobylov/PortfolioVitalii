export interface Project {
    title: string;
    image: string;
    description: string;
    link: string;
}

export const projects: Project[] = [
    {
        title: "WebStudio",
        image: "https://vitaliibobylov.github.io/goit-markup-hw-06/images/hero/pkk.jpg",
        description: "WebStudio GitHub репозиторій (HTML, CSS, JS). Вебсайт для компанії WebStudio. Адаптивна верстка, ефекти трансформації, модальні вікна.",
        link: "https://vitaliibobylov.github.io/goit-markup-hw-06/"
    },
    {
        title: "Watchcharm",
        image: "https://aleksandrovich-anastasia.github.io/project-group-17/assets/Rounded-rectangle-Dq35Euo-.webp",
        description: "Цільова сторінка для годинникової компанії. Адаптивний макет, плавна анімація та модальне вікно.",
        link: "https://aleksandrovich-anastasia.github.io/project-group-17/"
    }
];
