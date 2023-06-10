const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.slide');


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

// search artist

const images = document.querySelectorAll(".image");
const searchForm = document.querySelector("form");
const searchInput = document.getElementById("search-input");

//filter
const filterButtons = document.querySelectorAll('.century-btn');
const gallery = document.querySelector('.gallery');

//filter open/close
const filterBtn = document.getElementById('filter-btn');

//menu click
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

//scroll page 
function topFunction() {
	document.body.scrollTop = 0; // Safari
	document.documentElement.scrollTop = 0; // Diğer tarayıcılar
}





//filter hidden century
filterButtons.forEach(button => {
  button.classList.add('hidden');
});

filterBtn.addEventListener('click', () => {
  const filters = document.querySelector('.filters');
  filters.classList.toggle('active');

  filterButtons.forEach(button => {
    button.classList.toggle('hidden');
  });
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const century = button.getAttribute('data-century');
    console.log(`Filtering results for ${century}. Century`);



    const filters = document.querySelector('.filters');
    filters.classList.remove('active');

    filterButtons.forEach(button => {
      button.classList.add('hidden');
    });
  });
});
//filter
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const century = button.getAttribute('data-century');
    const images = gallery.querySelectorAll('.image');
    
    images.forEach(image => {
      if (image.querySelector('.caption').classList.contains(century)) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  });
});



// search artist
searchForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const searchText = searchInput.value.toLowerCase();
  images.forEach(function(image) {
    const caption = image.querySelector(".caption").textContent.toLowerCase();
    if (caption.includes(searchText)) {
      const link = image.querySelector("a").getAttribute("href");
      window.location.href = link;
    }
  });
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


//Login & Login console
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



//slide function

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



//artists function
function showMore() {
  var hiddenDivs = document.querySelectorAll(".hidden, .hidden2, .hidden3");
  var showMoreBtn = document.querySelector("#showMoreBtn");
  if (hiddenDivs[0].style.display === "none") {
    hiddenDivs.forEach(function(div, index) {
      div.style.display = "flex";
      div.style.opacity = 0;
      setTimeout(function() {
        div.style.opacity = 1;
      }, 150 * index);
    });
    showMoreBtn.innerHTML = "Show less";
  } else {
    hiddenDivs.forEach(function(div) {
      div.style.display = "none";
    });
    showMoreBtn.innerHTML = "Show more";
  }
}


//art artist 
  function toggleArt() {
    const art = document.querySelector(".art .two");
    const button = document.querySelector(".art button");

    if (art.style.maxHeight) {
      art.style.maxHeight = null;
      button.innerHTML = "Open";
    } else {
      art.style.maxHeight = art.scrollHeight + "px";
      button.innerHTML = "Close";
    }
  }

  function toggleArtist() {
    const artist = document.querySelector(".artist .twos");
    const button = document.querySelector(".artist button");

    if (artist.style.maxHeight) {
      artist.style.maxHeight = null;
      button.innerHTML = "Open";
    } else {
      artist.style.maxHeight = artist.scrollHeight + "px";
      button.innerHTML = "Close";
    }
  }