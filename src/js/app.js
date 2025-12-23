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
      <section class="section" style="background:#f7f9fc;">
        <div class="container" style="text-align:center;">
          <img src="https://scontent-iev1-1.xx.fbcdn.net/v/t1.6435-9/36670159_515426672220347_5083859097858605056_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=eqqP8VxqzAkQ7kNvwFGkPp4&_nc_oc=Adly8cwVX-BXvsDfRINAhdbakHeBS-JKnC8NN4U6o39yn-QpJG9gTeRnFnl0TEv9Wbk&_nc_zt=23&_nc_ht=scontent-iev1-1.xx&_nc_gid=wccHGRomoPTN5Vx8qed3GQ&oh=00_AfncFonzFDlSxw8u6HpqUGYU399qbqpi55gkqT-0TBbe6g&oe=6971B8F0"
          alt="Фото Віталія"
               style="width:150px; height:150px; border-radius:50%; margin-bottom:20px;" />
  
          <h2>Бобильов Віталій</h2>
  <h3>Резюме</h3>
          <div class="cards">
            <div class="card">
              <h3>Освіта</h3>
                <p>
    <span class="edu-title">ITSchool GoIT</span><br>
    <span class="edu-desc">Fullstack-розробник</span><br>
    <span class="edu-year">2024 – 2025</span><br>

    <span class="edu-title">Старобільський технікум Луганського національного аграрного університету</span><br>
    <span class="edu-desc">Середня спеціальна агрономія</span><br>
    <span class="edu-year">2005 – 2009</span>
  </p>
            </div>





            <div class="card">
              <h3>Досвід роботи</h3>
              <h4>Fullstack розробник — ITSchool GoIT</h4>
    <span class="job-period">2024 – 2025</span>
    <p>Розробка веб-додатків, участь у командних проектах, створення REST API та інтеграцій з базами даних.</p>
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

  <p class="contacts">
    <span class="label">Телефон:</span><br>
    <a href="tel:+380932324038">+38 (093) 23-24-038</a><br>

    <span class="label">Email:</span><br>
    <a href="mailto:vitaliibobylov@gmail.com">vitaliibobylov@gmail.com</a><br>

    <span class="label">GitHub:</span><br>
    <a href="https://github.com/VitaliiBobylov" target="_blank">Bobylov_Vitalii</a><br>

    <span class="label">LinkedIn:</span><br>
    <a href="https://linkedin.com/in/vitalii-bobylov" target="_blank">
      linkedin.com/in/vitalii-bobylov
    </a><br>

    <span class="label">Місто:</span><br>
    <a href="https://www.google.com/maps/place/Київ" target="_blank">
      Київ, Україна
    </a>
  </p>

  <!-- ІКОНКИ ВНИЗУ -->


  <div class="contact-icons">
    <a href="https://t.me/Bobylov_Vitalii" target="_blank" aria-label="Bobylov_Vitalii">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" alt="Telegram">
    </a>

    <a href="https://www.facebook.com/vitos.bobylev?locale=ru_RU" target="_blank" aria-label="Facebook">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png" alt="Facebook">
    </a>

    <a href="viber://chat?number=%2B380932324038" aria-label="Viber">
      <img src="https://www.svgrepo.com/show/110209/viber.svg" alt="Viber">
    </a>
  </div>
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


            <div class="container">
        <h2>Про мене</h2>
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
            <img src="https://vitaliibobylov.github.io/goit-markup-hw-06/images/hero/pkk.jpg" alt="Картинка 1" />
            <p>WebStudio WebStudio GitHub репозиторій (HTML, CSS, JS)<br>
            Вебсайт для компанії WebStudio.<br>
            Адаптивна верстка, ефекти трансформації, модальні вікна.<br>
            Роль: Розробник<br>
            Тип: Індивідуальний проект</p>
            <a class="button" href="https://vitaliibobylov.github.io/goit-markup-hw-06/">Подивитися</a>
          </div>

          <div class="home-card">
            <img src="https://aleksandrovich-anastasia.github.io/project-group-17/assets/Rounded-rectangle-Dq35Euo-.webp" alt="Картинка 2" />
            <p>Репозиторій Watchcharm на GitHub (HTML, CSS, JS)<br>
            Цільова сторінка для годинникової компанії.<br>
            Адаптивний макет, плавна анімація та модальне вікно.<br>
            Роль: Розробник головного розділу<br>
            Тип: Груповий проєкт</p>
            <a class="button" href="https://aleksandrovich-anastasia.github.io/project-group-17/">Подивитися</a>
          </div>

          <div class="home-card">
            <img src="https://pixabay.com/get/gf04cac7ad6c51aab447b7b90279ffd62623dc1b26e5f1b7aedfc3134866f0b1ab3f65a345f6329af76faf26848774dcfdf308e288a0fb01221638da780286260_1280.jpg" alt="Картинка 3" />
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
