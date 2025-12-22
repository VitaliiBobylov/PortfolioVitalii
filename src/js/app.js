const app = document.getElementById("app");

function render() {
  const hash = window.location.hash || "#home";

  switch (hash) {
    case "#about":
      renderAbout();
      break;
    case "#services":
      renderServices();
      break;
    case "#contact":
      renderContact();
      break;
    default:
      renderHome();
  }
}

function renderHome() {
  app.innerHTML = `
      <section class="section" style="background:#f0f4f8;">
        <div class="container" style="text-align:center;">
          <!-- Твоє фото зверху секції -->
          <img src="https://via.placeholder.com/150" alt="Фото Віталія" 
               style="width:150px; height:150px; border-radius:50%; margin-bottom:20px;" />
  
          <h2>Резюме</h2>
  
          <div class="cards">
            <div class="card">
              <h3>Освіта</h3>
              <p>ITSchool GoIT
Fullstack-розробник
2024 – 2025.<br>
Старобільський технікум Луганського
національного аграрного університету
Середня спеціальна агрономія
2005-2009
</p>
            </div>
            <div class="card">
              <h3>Досвід роботи</h3>
              <p>Короткий опис досвіду.</p>
            </div>
            <div class="card">
              <h3>Навички</h3>
              <p>
  HTML/CSS<br>
  JavaScript<br>
  HTML верстка<br>
  Node.js<br>
  Web-дизайн<br>
  Vite<br>
  Git<br>
  Trello<br>
  Parcel<br>
  MongoDB<br>
  API<br>
  TypeScript<br>
  Vercel<br>
  Next.js (App Router)<br>
  Робота з бібліотеками<br>
  Вирішення проблем<br>
  Технічна освіта<br>
  Проектне мислення
              </p>
            </div>
            <div class="card">
              <h3>Контакти</h3>
              <p>
                Телефон: <a href="tel:+380932324038">+38 (093) 23-24-038</a><br>
                Email: <a href="mailto:vitaliibobylov@gmail.com">vitaliibobylov@gmail.com</a><br>
                GitHub: <a href="https://github.com/VitaliiBobylov" target="_blank">Bobylov_Vitalii</a><br>
                LinkedIn: <a href="https://linkedin.com/in/vitalii-bobylov" target="_blank">linkedin.com/in/vitalii-bobylov</a><br>
                Місто: <a href="https://www.google.com/maps/place/%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4018683,30.2023619,10z/data=!3m1!4b1!4m14!1m7!3m6!1s0x40d4cf76e65d4dad:0x247b398f405dff8f!2z0KDQvtC00LjQvdCwLdCc0LDRgtGM!8m2!3d50.4265249!4d30.5630521!16s%2Fm%2F04jpnty!3m5!1s0x40d4cf4ee15a4505:0x764931d2170146fe!8m2!3d50.4503596!4d30.5245025!16zL20vMDJzbjM0?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">Київ, Україна</a><br>
              </p>
            </div>
          </div>
        </div>
      </section>
    `;
}

function renderAbout() {
  app.innerHTML = `
    <section class="section">
      <div class="container">
        <h2>Про мене</h2>
        <p>
          Я створюю прості вебсайти без зайвих бібліотек,
          орієнтуючись на швидкість та зрозумілий код.
        </p>
      </div>
    </section>
  `;
}

function renderServices() {
  app.innerHTML = `
      <section class="section">
        <div class="container">
          <h2>Послуги</h2>
          <div class="cards">
            <div class="card">
              <h3>Landing page</h3>
              <p>Односторінкові сайти для бізнесу.</p>
            </div>
            <div class="card">
              <h3>SPA</h3>
              <p>Прості односторінкові застосунки.</p>
            </div>
            <div class="card">
              <h3>Підтримка</h3>
              <p>Оновлення та покращення існуючих сайтів.</p>
            </div>
          </div>
        </div>
      </section>
  
      <section class="section">
        <div class="container">
          <h2>Проекти</h2>
          <p>Нижче представлені приклади моїх робіт:</p>
  



          <div class="home-grid">
            <div class="home-card">
              <img src="https://vitaliibobylov.github.io/goit-markup-hw-06/images/hero/pkk.jpg"
              alt="Картинка 1" />
              <p>
              WebStudio WebStudio GitHub репозиторій (HTML, CSS, JS)
Вебсайт для компанії WebStudio.<br>
Адаптивна верстка, ефекти трансформації, модальні вікна.<br>
Роль: Розробник<br>
Тип: Індивідуальний проект</p>
              <a class="button" href="https://vitaliibobylov.github.io/goit-markup-hw-06/">Подивитися</a>
            </div>
  




            <div class="home-card">
              <img src="https://aleksandrovich-anastasia.github.io/project-group-17/assets/Rounded-rectangle-Dq35Euo-.webp"
               alt="Картинка 2" />
              <p>Репозиторій Watchcharm на GitHub (HTML, CSS, JS)<br>
Цільова сторінка для годинникової компанії.<br>
Адаптивний макет, плавна анімація та модальне вікно.<br>
Роль: Розробник головного розділу<br>
Тип: Груповий проєкт</p>
              <a class="button" href="https://aleksandrovich-anastasia.github.io/project-group-17/">Подивитися</a>
            </div>
  




            <div class="home-card">
              <img src="https://pixabay.com/get/gf04cac7ad6c51aab447b7b90279ffd62623dc1b26e5f1b7aedfc3134866f0b1ab3f65a345f6329af76faf26848774dcfdf308e288a0fb01221638da780286260_1280.jpg"
              alt="Картинка 3" />
              <p>Пошук зображень на GitHub-репозиторії (HTML, CSS, JS, Vite).<br>
Додаток для пошуку зображень, що використовує Pixabay API.<br>
Включає пагінацію, маніпуляції DOM та галерею з лайтбоксом.<br>
Роль: Розробник.<br>
Тип: Індивідуальний проєкт.</p>
              <a class="button" href="https://vitaliibobylov.github.io/goit-js-hw-12/">Подивитися</a>
            </div>
  





            <div class="home-card">
              <img src="https://via.placeholder.com/300x150" alt="Картинка" />
              <p>Для нових навичок</p>
              <a class="button" href="#home">Подивитися</a>
            </div>
  
            <div class="home-card">
              <img src="https://via.placeholder.com/300x150" alt="Картинка" />
              <p>Для нових навичок</p>
              <a class="button" href="#home">Подивитися</a>
            </div>
  
            <div class="home-card">
              <img src="https://via.placeholder.com/300x150" alt="Картинка " />
              <p>Для нових навичок</p>
              <a class="button" href="#home">Подивитися</a>
            </div>
          </div>
        </div>
      </section>
    `;
}

function renderContact() {
  app.innerHTML = `
    <section class="section">
      <div class="container">
        <h2>Контакти</h2>
        <p>Напишіть нам, і ми з вами звʼяжемося</p>

        <a class="button" id="contactBtn">Написати</a>
      </div>
    </section>
  `;

  document.getElementById("contactBtn").addEventListener("click", () => {
    alert("Дякуємо! Ми звʼяжемося з вами ✨");
  });
}

window.addEventListener("hashchange", render);
window.addEventListener("load", render);
