export function servicesPage(): string {
  return `
    <section class="section">
      <div class="container">
        <h2>Проекти</h2>
        <p>Нижче представлені приклади моїх робіт:</p>

        <div class="home-grid">

          <div class="home-card">
            <img src="https://vitaliibobylov.github.io/goit-markup-hw-06/images/hero/pkk.jpg" alt="WebStudio" />
            <p>
              WebStudio GitHub репозиторій (HTML, CSS, JS)<br>
              Вебсайт для компанії WebStudio.<br>
              Адаптивна верстка, ефекти трансформації, модальні вікна.<br>
              Роль: Розробник<br>
              Тип: Індивідуальний проект
            </p>
            <a class="button" href="https://vitaliibobylov.github.io/goit-markup-hw-06/" target="_blank">
              Подивитися
            </a>
          </div>

          <div class="home-card">
            <img src="https://aleksandrovich-anastasia.github.io/project-group-17/assets/Rounded-rectangle-Dq35Euo-.webp" alt="Watchcharm" />
            <p>
              Репозиторій Watchcharm (HTML, CSS, JS)<br>
              Цільова сторінка для годинникової компанії.<br>
              Адаптивний макет, плавна анімація та модальне вікно.<br>
              Роль: Розробник головного розділу<br>
              Тип: Груповий проєкт
            </p>
            <a class="button" href="https://aleksandrovich-anastasia.github.io/project-group-17/" target="_blank">
              Подивитися
            </a>
          </div>

          <div class="home-card">
            <img src="https://pixabay.com/get/g098ee54b4df0af4ba7d65e68ccab74b45a443cf7d71a3669b09b5b6ca1178ad34497796218c3a4a1fe835bec55e4a42cba79ad197e81bd92925b08f216433a46_640.jpg" alt="Pixabay API" />
            <p>
              Пошук зображень (HTML, CSS, JS, Vite)<br>
              Додаток з Pixabay API.<br>
              Пагінація, DOM-маніпуляції, галерея з лайтбоксом.<br>
              Роль: Розробник<br>
              Тип: Індивідуальний проєкт
            </p>
            <a class="button" href="https://vitaliibobylov.github.io/goit-js-hw-12/" target="_blank">
              Подивитися
            </a>
          </div>

          <div class="home-card">
            <img src="https://via.placeholder.com/300x150" alt="Coming soon" />
            <p>Для нових навичок</p>
            <a class="button" href="#home">Подивитися</a>
          </div>

          <div class="home-card">
            <img src="https://via.placeholder.com/300x150" alt="Coming soon" />
            <p>Для нових навичок</p>
            <a class="button" href="#home">Подивитися</a>
          </div>

          <div class="home-card">
            <img src="https://via.placeholder.com/300x150" alt="Coming soon" />
            <p>Для нових навичок</p>
            <a class="button" href="#home">Подивитися</a>
          </div>

        </div>
      </div>
    </section>
  `;
}
