const buttons = document.querySelectorAll('#show-more');

//login & Login console
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const loginOverlay = document.getElementById("login-overlay");
const registerOverlay = document.getElementById("register-overlay");
const closeModalBtns = document.querySelectorAll(".close-btn");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");

//search place open/close
const searchBtn = document.getElementById("search-btn");
const searchContainer = document.querySelector(".search-container");
const searchInput = document.getElementById("search-input");

// search artist

const searchForm = document.querySelector('form');

// Favori butonlarına tıklama işlemini ekle
const favoriButonlari = document.querySelectorAll('.favori');

// Tüm resimleri seçin
const resimler = document.querySelectorAll('.img');

// Her resim için bir lightbox oluşturun
resimler.forEach((resim) => {
  const lightboxArkaPlan = document.createElement('div');
  const lightboxIcerik = document.createElement('div');
  const lightboxResim = document.createElement('img');
  const lightboxKapat = document.createElement('button');

//menu click
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});




  // Lightbox'ı gizleyin
  lightboxArkaPlan.style.display = 'none';

  // Lightbox'ı oluşturun
  lightboxArkaPlan.classList.add('lightbox');
  lightboxIcerik.classList.add('lightbox-inner');
  lightboxResim.classList.add('lightbox-image');
  lightboxKapat.classList.add('lightbox-close');
  lightboxResim.src = resim.src;
  lightboxKapat.innerHTML = 'X';

  // Lightbox'a resmi ve kapatma düğmesini ekleyin
  lightboxIcerik.appendChild(lightboxResim);
  lightboxIcerik.appendChild(lightboxKapat);
  lightboxArkaPlan.appendChild(lightboxIcerik);

  // Resme tıklandığında lightbox'ı gösterin
  resim.addEventListener('click', () => {
    lightboxArkaPlan.style.display = 'block';
  });

  // Lightbox'ı kapatmak için düğmeye veya arka plana tıklayın
  lightboxKapat.addEventListener('click', () => {
    lightboxArkaPlan.style.display = 'none';
  });

  lightboxArkaPlan.addEventListener('click', (event) => {
    if (event.target === lightboxArkaPlan) {
      lightboxArkaPlan.style.display = 'none';
    }
  });

  // Lightbox'ı sayfaya ekleyin
  document.body.appendChild(lightboxArkaPlan);
});



// Favori butonlarına tıklama işlemini ekle
favoriButonlari.forEach(buton => {
  buton.addEventListener('click', () => {
    const src = buton.getAttribute('data-src');
    let favoriler = JSON.parse(localStorage.getItem('favoriler')) || [];

    // Eğer resim favorilerde yoksa, favoriler listesine ekle ve butonu favori--secili yap
    if (!favoriler.find(f => f.src === src)) {
      favoriler.push({ src });
      localStorage.setItem('favoriler', JSON.stringify(favoriler));
      buton.classList.add('favori--secili');
    } else {
      // Resim zaten favorilerde varsa, favoriler listesinden çıkar ve butonu favori--secili yapma
      favoriler = favoriler.filter(f => f.src !== src);
      localStorage.setItem('favoriler', JSON.stringify(favoriler));
      buton.classList.remove('favori--secili');
    }
  });
});


// search artist
searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const searchText = searchInput.value.toLowerCase();

  // Load index.html page
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'index.html');
  xhr.onload = function() {
    if (xhr.status === 200) {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(xhr.responseText, 'text/html');
      const allImages = htmlDoc.querySelectorAll('.image');
      let found = false;

      allImages.forEach(function(image) {
        const caption = image.querySelector('.caption').textContent.toLowerCase();
        if (caption.includes(searchText)) {
          const link = image.querySelector('a').getAttribute('href');
          window.location.href = link;
          found = true;
        }
      });

      if (!found) {
        alert('No matching results found.');
      }
    } else {
      alert('Error loading search results.');
    }
  };
  xhr.send();
});

//search place open/close
searchBtn.addEventListener("click", function() {
  if (searchContainer.style.display === "block") {
    searchContainer.style.display = "none";
  } else {
    searchContainer.style.display = "block";
    searchInput.focus();
  }
});

window.addEventListener("click", function(event) {
  if (!event.target.matches("#search-btn") && !event.target.matches("#search-input")) {
    searchContainer.style.display = "none";
  }
});









//login & Login console
loginBtn.addEventListener("click", () => {
  loginOverlay.style.display = "flex";
});

registerBtn.addEventListener("click", () => {
  registerOverlay.style.display = "flex";
});

closeModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    loginOverlay.style.display = "none";
    registerOverlay.style.display = "none";
  });
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = loginForm.elements.username.value;
  const password = loginForm.elements.password.value;
  console.log(`Username: ${username}, Password: ${password}`);
  loginForm.reset();
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const fullname = registerForm.elements.fullname.value;
  const email = registerForm.elements.email.value;
  const username = registerForm.elements.username.value;
  const country = registerForm.elements.country.value;
  const number = registerForm.elements.number.value;
  const password =registerForm.elements.password.value;
  console.log(`Full Name: ${fullname}, Email: ${email}, Username: ${username}, Country: ${country}, Phone Number: ${number}, Password: ${password}`);
  registerForm.reset();
});


buttons.forEach(button => {
  const content = button.previousElementSibling;
  const heading = content.querySelector('h2');
  const paragraph = content.querySelector('p');

  button.addEventListener('click', function() {
    if (content.classList.contains('open')) {
      // Bölüm açıkken, kapatmak için geri çevir
      content.classList.remove('open');
      content.style.width = '0';
      content.style.overflow = 'hidden';
      heading.style.transform = 'translateX(100%)';
      paragraph.style.transform = 'translateX(100%)';
      button.textContent = 'Open';
    } else {
      // Bölüm kapalıyken, açmak için aç
      content.classList.add('open');
      content.style.width = 'auto';
      content.style.overflow = 'visible';
      heading.style.transform = 'translateX(0)';
      paragraph.style.transform = 'translateX(0)';
      button.textContent = 'Close';
    }
  });
});
function toggleContent2() {
    var container = document.querySelector('.container2');
    var content = container.querySelector('.content2');
    content.classList.toggle('show2');
  }