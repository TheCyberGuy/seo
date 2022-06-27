const btn = document.getElementsByClassName("navbar-toggler");
const contBtn = document.getElementById("kontakt");
const brand = document.getElementById("brand");

var isClicked = false;

function navAnimation() {
  if (!isClicked) {
    isClicked = true;
    gsap.fromTo(
      ".nav-item",
      {
        delay: 5,

        opacity: 0,
      },
      {
        stagger: 0.2,
        duration: 2,
        opacity: 1,
      }
    );
  } else {
    document.querySelector(".nav-item").style.opacity = "1";
    isClicked = false;
  }
}

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function contactResize() {
  gsap.to(["#cttxt > span", "#cttxt > a"], {
    duration: 1,
    color: "#ffbc00",
  });
  gsap.to(["#cttxt > span", "#cttxt > a"], {
    delay: 0.5,
    duration: 1,
    color: "#fff",
  });
}

contBtn.addEventListener("click", contactResize);

brand.addEventListener("click", toTop);

const nav = document.querySelector("nav");

const loader = document.querySelector(".loader");

nav.classList.add("d-none");

document.addEventListener("DOMContentLoaded", () => {
  loader.classList.add("d-none");
  nav.classList.remove("d-none");
});
