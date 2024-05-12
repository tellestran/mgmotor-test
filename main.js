let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("jumbotron__slide-element");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

var accordions = document.querySelectorAll(
  ".accordion, .faqs, .dropbtn-mobile"
);
accordions.forEach(function (accordion) {
  accordion.addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// Get the button and the product navigation elements
const navProductsBtn = document.querySelector(".nav__products-btn");
const navProduct = document.querySelector(".nav__product");
let timeoutId; // To hold the timeout ID

// Function to show the product navigation
function showNavProduct() {
  clearTimeout(timeoutId); // Clear any existing timeout to prevent hiding
  navProduct.style.display = "flex";
}

// Function to hide the product navigation
function hideNavProduct() {
  navProduct.style.display = "none";
}

// Add event listeners for mouse enter
navProductsBtn.addEventListener("mouseenter", showNavProduct);
navProduct.addEventListener("mouseenter", showNavProduct);

// Add event listener for mouse leave on navProductsBtn
navProductsBtn.addEventListener("mouseleave", function () {
  // Set a timeout to hide the navProduct after 2 seconds
  timeoutId = setTimeout(() => {
    if (!navProduct.matches(":hover")) {
      // Check if the mouse is not over navProduct
      hideNavProduct();
    }
  }, 2000); // 2000 milliseconds = 2 seconds
});

// Add event listener for mouse leave on navProduct
navProduct.addEventListener("mouseleave", function () {
  // Set a timeout to hide the navProduct after 2 seconds
  timeoutId = setTimeout(() => {
    if (!navProductsBtn.matches(":hover")) {
      // Check if the mouse is not over navProductsBtn
      hideNavProduct();
    }
  }, 100); // 2000 milliseconds = 2 seconds
});
