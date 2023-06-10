// Favori resimlerini listele
const favoriListesi = JSON.parse(localStorage.getItem('favoriler')) || [];

//get class to favoriler s div
const favoriDiv = document.querySelector('.favoriler');
const favoriDivler = favoriDiv.getElementsByTagName('div');



//search place open/close
const searchBtn = document.getElementById("search-btn");
const searchContainer = document.querySelector(".search-container");
const searchInput = document.getElementById("search-input");


//menu click
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// search artist

const searchForm = document.querySelector('form');

// Favori butonlarına tıklama işlemini ekle
const favoriButonlari = document.querySelectorAll('.favori');

favoriButonlari.forEach(buton => {
  buton.addEventListener('click', () => {
    const src = buton.getAttribute('data-src');
    let favoriler = JSON.parse(localStorage.getItem('favoriler')) || [];

    // Eğer seçilen resim zaten favorilerde yoksa, favoriler listesine ekle
    if (!favoriler.find(f => f.src === src)) {
      favoriler.push({ src });
      localStorage.setItem('favoriler', JSON.stringify(favoriler));
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












// Favori resimlerini listele

function favoriResimEkle(resim, index) {
    const resimDiv = document.createElement('div');
    resimDiv.classList.add('favdiv'); // resim div'ine my-class sınıfı ekle
  
    const img = document.createElement('img');
    img.src = resim.src;
    img.alt = resim.title;
    resimDiv.appendChild(img);
  
    // ...
  

  const silButonu = document.createElement('button');
  silButonu.innerHTML = '';
  silButonu.classList.add('btnfav'); // add class to the button
  silButonu.addEventListener('click', () => {
    favoriListesi.splice(index, 1);
    localStorage.setItem('favoriler', JSON.stringify(favoriListesi));
    favoriDiv.innerHTML = '';
    favoriListesi.forEach(favoriResimEkle);
  });

  resimDiv.appendChild(silButonu);
  favoriDiv.appendChild(resimDiv);
}

favoriListesi.forEach(favoriResimEkle);



