import { projects, Project } from "../data/projects";

function renderProjectCard(project: Project): string {
  return `
    <div class="home-card">
      <img src="${project.image}" alt="${project.title}">
      <p>${project.description}</p>
      <a class="button" href="${project.link}" target="_blank">Подивитися</a>
    </div>
  `;
}

export function servicesPage(): string {
  return `
    <section class="section">
      <div class="container">
        <h2>Проєкти</h2>
        <p>Нижче представлені приклади моїх робіт:</p>

        <div class="home-grid" id="projects-grid">
          ${projects.map(renderProjectCard).join("")}
        </div>

        <button id="show-form" class="button">Додати проєкт</button>

        <form id="project-form" class="project-form" style="display: none; margin-top: 20px;">
          <input type="text" id="project-title" placeholder="Назва проєкту" required />
          <input type="text" id="project-image" placeholder="URL картинки" required />
          <textarea id="project-description" placeholder="Опис проєкту" required></textarea>
          <input type="text" id="project-link" placeholder="Посилання на проєкт" required />
          <button type="submit" class="button">Додати</button>
        </form>
      </div>
    </section>
  `;
}

export function initServicesEvents(): void {
  const showFormBtn = document.getElementById("show-form");
  const form = document.getElementById("project-form") as HTMLFormElement;
  const grid = document.getElementById("projects-grid");

  showFormBtn?.addEventListener("click", () => {
    if (form.style.display === "none") {
      form.style.display = "flex";
      form.style.flexDirection = "column";
      form.style.gap = "8px";
    } else {
      form.style.display = "none";
    }
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = (document.getElementById("project-title") as HTMLInputElement).value;
    const image = (document.getElementById("project-image") as HTMLInputElement).value;
    const description = (document.getElementById("project-description") as HTMLTextAreaElement).value;
    const link = (document.getElementById("project-link") as HTMLInputElement).value;

    const newProject: Project = { title, image, description, link };
    projects.push(newProject);

    if (grid) {
      grid.innerHTML += renderProjectCard(newProject);
    }

    form.reset();
    form.style.display = "none";
  });
}
