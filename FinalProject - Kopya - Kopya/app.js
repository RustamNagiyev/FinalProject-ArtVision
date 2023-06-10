const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slide');

let slideIndex = 0;

prevBtn.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  for (let i = 0; i < slides.length; i++) {
    if (i === slideIndex) {
      slides[i].classList.add('active');
    } else {
      slides[i].classList.remove('active');
    }
  }
}

updateSlider();



//ressamlar
function showMore() {
  var hiddenDivs = document.querySelectorAll(".hidden, .hidden2, .hidden3");
  var showMoreBtn = document.querySelector("#showMoreBtn");
  if (hiddenDivs[0].style.display === "none") {
    hiddenDivs.forEach(function(div, index) {
      div.style.display = "flex";
      div.style.opacity = 0;
      setTimeout(function() {
        div.style.opacity = 1;
      }, 850 * index);
    });
    showMoreBtn.innerHTML = "Daha az Göster";
  } else {
    hiddenDivs.forEach(function(div) {
      div.style.display = "none";
    });
    showMoreBtn.innerHTML = "Daha çox Göster";
  }
}


//vereqler
  function toggleArt() {
    const art = document.querySelector(".art .two");
    const button = document.querySelector(".art button");

    if (art.style.maxHeight) {
      art.style.maxHeight = null;
      button.innerHTML = "Aç";
    } else {
      art.style.maxHeight = art.scrollHeight + "px";
      button.innerHTML = "Bağla";
    }
  }

  function toggleArtist() {
    const artist = document.querySelector(".artist .twos");
    const button = document.querySelector(".artist button");

    if (artist.style.maxHeight) {
      artist.style.maxHeight = null;
      button.innerHTML = "Aç";
    } else {
      artist.style.maxHeight = artist.scrollHeight + "px";
      button.innerHTML = "Bağla";
    }
  }