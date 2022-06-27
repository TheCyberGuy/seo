const btn = document.querySelector(".navbar-toggler");

const brand = document.querySelector("#brand");

const refBtn = document.querySelector("#galleryBtn");

const contBtn = document.querySelector("#kontakt");

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

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function imgResize() {
  gsap.to(["#galleryimg1", "#galleryimg3", "#galleryimg2"], {
    stagger: 0.2,
    scale: 1.1,
    duration: 0.4,
    ease: "power1",
  });
  gsap.to(["#galleryimg1", "#galleryimg3", "#galleryimg2"], {
    delay: 0.5,
    scale: 1,
    duration: 1,
    ease: "power1",
  });
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

refBtn.addEventListener("click", imgResize);

contBtn.addEventListener("click", contactResize);

const nav = document.querySelector("nav");

const loader = document.querySelector(".loader");

nav.classList.add("d-none");

document.addEventListener("DOMContentLoaded", () => {
  loader.classList.add("d-none");
  nav.classList.remove("d-none");
});
