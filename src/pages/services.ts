import { projects, Project } from "../data/projects";

function renderProjectCard(project: Project, index: number): string {
  return `
    <div class="home-card">
      <div class="card-img-wrapper">
        <img src="${project.image}" alt="${project.title}">
        <button class="icon-btn delete-btn" data-index="${index}">✖</button>
      </div>
      <p>${project.description}</p>
      <div class="card-buttons">
        <a class="button" href="${project.link}" target="_blank">Подивитися</a>
        <button class="button edit-btn" data-index="${index}">Редагувати</button>
      </div>
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
          ${projects.map((p, i) => renderProjectCard(p, i)).join("")}
        </div>

        <div class="add-project-wrapper">
          <button id="show-form" class="button">Додати проєкт</button>
        </div>

        <form id="project-form" class="project-form" style="display: none; margin-top: 20px;">
          <input type="text" id="project-title" placeholder="Назва проєкту" required />
          <input type="text" id="project-image" placeholder="URL картинки" required />
          <textarea id="project-description" placeholder="Опис проєкту" required></textarea>
          <input type="text" id="project-link" placeholder="Посилання на проєкт" required />
          <button type="submit" class="button">Зберегти</button>
        </form>
      </div>
    </section>
  `;
}

export function initServicesEvents(): void {
  const showFormBtn = document.getElementById("show-form");
  const form = document.getElementById("project-form") as HTMLFormElement;
  const grid = document.getElementById("projects-grid");

  let editingIndex: number | null = null;

  function renderGrid() {
    if (!grid) return;
    grid.innerHTML = projects.map((p, i) => renderProjectCard(p, i)).join("");

    // Видалення
    grid.querySelectorAll(".delete-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const index = parseInt((e.target as HTMLButtonElement).dataset.index!);
        projects.splice(index, 1);
        renderGrid();
      });
    });

    // Редагування
    grid.querySelectorAll(".edit-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const index = parseInt((e.target as HTMLButtonElement).dataset.index!);
        const project = projects[index];
        editingIndex = index;

        (document.getElementById("project-title") as HTMLInputElement).value = project.title;
        (document.getElementById("project-image") as HTMLInputElement).value = project.image;
        (document.getElementById("project-description") as HTMLTextAreaElement).value = project.description;
        (document.getElementById("project-link") as HTMLInputElement).value = project.link;

        form.style.display = "flex";
        form.style.flexDirection = "column";
        form.style.gap = "8px";
      });
    });
  }

  showFormBtn?.addEventListener("click", () => {
    form.style.display = form.style.display === "none" ? "flex" : "none";
    form.style.flexDirection = "column";
    form.style.gap = "8px";
    editingIndex = null;
    form.reset();
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = (document.getElementById("project-title") as HTMLInputElement).value;
    const image = (document.getElementById("project-image") as HTMLInputElement).value;
    const description = (document.getElementById("project-description") as HTMLTextAreaElement).value;
    const link = (document.getElementById("project-link") as HTMLInputElement).value;

    const newProject: Project = { title, image, description, link };

    if (editingIndex !== null) {
      projects[editingIndex] = newProject; // редагування
    } else {
      projects.push(newProject); // додавання
    }

    renderGrid();
    form.reset();
    form.style.display = "none";
  });

  renderGrid(); // Перший рендер
}
