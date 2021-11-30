import "./less/index.less";

// Your code goes here!

const logo = document.querySelector("h1.logo-heading");
const homeImg = document.querySelector(".intro img");
const h2Intro = document.querySelector(".intro h2");
const body = document.querySelector("body");
const navbarAnchors = document.querySelectorAll("a");
const adventureImg = document.querySelector(".img-content img:nth-of-type(1)");
const h2All = document.querySelectorAll("h2");
const buttons = document.querySelectorAll(".btn");
console.log(buttons);

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

h2Intro.addEventListener("dblclick", (e) => {
  e.target.style.transform = "scale(1.1)";
});

document.addEventListener("keydown", darkMode);
document.addEventListener("keyup", lightMode);

navbarAnchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.style.color = "#339af0";
  });
});

adventureImg.addEventListener("mousewheel", (e) => {
  e.target.style.transform = "rotate(180deg)";
});

adventureImg.addEventListener("mousedown", (e) => {
  e.target.style.transform = "rotate(360deg)";
});

h2All.forEach((h) => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "m") {
      console.log(e.key);
      h.style.transform = "translate(50px)";
      h.style.color = "pink";
    }
  });
});

buttons.forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    e.target.style.transform = "rotate(180deg)";
  });
});
