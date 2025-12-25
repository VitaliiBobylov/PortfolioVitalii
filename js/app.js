import { homePage } from "./pages/home.js";
import { aboutPage } from "./pages/about.js";
import { servicesPage } from "./pages/services.js";
import { contactPage, initContactEvents } from "./pages/contact.js";

var app = document.getElementById("app");

function render() {
  var app = document.getElementById("app");
  if (!app)
    return;
  var hash = window.location.hash || "#home";
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
