const contBtn = document.querySelector("#kontakt");
const btn = document.querySelector(".navbar-toggler");

var isClicked = false;

btn.addEventListener("click", () => {
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
});

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

const nav = document.querySelector("nav");

const loader = document.querySelector(".loader");

nav.classList.add("d-none");

document.addEventListener("DOMContentLoaded", () => {
  loader.classList.add("d-none");
  nav.classList.remove("d-none");
});
