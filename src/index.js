import "./less/index.less";

// Your code goes here!

const logo = document.querySelector("h1.logo-heading");
const homeImg = document.querySelector(".intro img");
const h2Intro = document.querySelector(".intro h2");
const body = document.querySelector("body");
const navbarAnchors = document.querySelectorAll("a");

function darkMode(e) {
  if (e.key === "d") {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    logo.style.color = "black";
  }
}
function lightMode(e) {
  if (e.key === "l") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
}

logo.addEventListener("mouseover", (e) => {
  e.target.style.color = "red";
});

homeImg.addEventListener("mouseleave", (e) => {
  e.target.style.borderRadius = "10px";
  e.target.style.transform = "scale(1.1)";
});

h2Intro.addEventListener("click", (e) => {
  e.target.style.transform = "scale(1.1)";
});

document.addEventListener("keydown", darkMode);
document.addEventListener("keyup", lightMode);

navbarAnchors.forEach((anchor) => {
  anchor.addEventListener("dblclick", (e) => {
    e.target.style.color = "#339af0";
  });
});
