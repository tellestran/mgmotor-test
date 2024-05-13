document.addEventListener("DOMContentLoaded", () => {
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
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }

  // Handle accordion panels
  document
    .querySelectorAll(".accordion, .faqs, .dropbtn-mobile")
    .forEach((accordion) => {
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

  // Product navigation hover handling
  const navProductsBtn = document.querySelector(".nav__products-btn");
  const navProduct = document.querySelector(".nav__product");
  if (navProductsBtn && navProduct) {
    let timeoutId;
    navProductsBtn.addEventListener(
      "mouseenter",
      () => (navProduct.style.display = "flex")
    );
    navProductsBtn.addEventListener("mouseleave", () => {
      timeoutId = setTimeout(() => {
        if (!navProduct.matches(":hover")) navProduct.style.display = "none";
      }, 2000);
    });
    navProduct.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    navProduct.addEventListener("mouseleave", () => {
      timeoutId = setTimeout(() => {
        if (!navProductsBtn.matches(":hover"))
          navProduct.style.display = "none";
      }, 2000);
    });
  }

  // Mobile navigation handling
  var navMobile = document.querySelector(".nav__content-mobile");
  var menuBtn = document.getElementById("menu-btn");
  var exitBtn = document.getElementById("exit-btn");

  if (menuBtn && navMobile) {
    menuBtn.addEventListener("click", () => navMobile.classList.add("open"));
  }
  if (exitBtn && navMobile) {
    exitBtn.addEventListener("click", () => navMobile.classList.remove("open"));
  }

  // Scroll to top button handling
  var scrollBtn = document.getElementById("scroll-to-top-btn");
  if (scrollBtn) {
    window.onscroll = function () {
      scrollBtn.style.display =
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
          ? "block"
          : "none";
    };
    scrollBtn.addEventListener("click", () =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }
});
