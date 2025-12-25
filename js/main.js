import { homePage } from "./pages/home";
import { aboutPage } from "./pages/about";
import { servicesPage } from "./pages/services";
import { contactPage, initContactEvents } from "./pages/contact";
const app = document.getElementById("app");
if (!app)
    throw new Error("Елемент #app не знайдено");
function render() {
    const app = document.getElementById("app");
    if (!app)
        return;
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
