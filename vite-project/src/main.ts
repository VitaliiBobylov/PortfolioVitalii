import { homePage } from "../src/pages/home";
import { aboutPage } from "../src/pages/about";
import { servicesPage } from "../src/pages/services";
import { contactPage, initContactEvents } from "../src/pages/contact";

const app = document.getElementById("app");
if (!app) throw new Error("Елемент #app не знайдено");

function render(): void {
    const app = document.getElementById("app");
    if (!app) return;

    const hash = window.location.hash || "#home";
    switch (hash) {
        case "#about":
            app.innerHTML = aboutPage();
            break;
        case "#services":
            app.innerHTML = servicesPage();
            break;
        case "#contact":
            app.innerHTML = contactPage();
            initContactEvents();
            break;
        default:
            app.innerHTML = homePage();
    }
}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);
