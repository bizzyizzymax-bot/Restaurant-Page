import logoImage from "../assets/o.jpg";
import menuPage from "./Menu";
import homePage from "./Home";
import contactPage from "./Contact";

const content = document.getElementById("content");
const menuButton = document.createElement("button");
const logo = document.createElement("img");
const title = document.createElement("h1");
const description = document.createElement("p");
const homeButton = document.querySelector("#homeButton");
const header = document.querySelector("header");
const navBar = header.querySelector("nav");
const ul = navBar.querySelector(".navigation");
const navButtons = ul.querySelectorAll("button");
const headerText = navBar.querySelector("h1");
const blackOverlay = document.createElement("div");

//Styling the navbar

document.querySelectorAll("*").forEach((element) => {
  element.style.boxSizing = "border-box";
  element.style.padding = "0";
  element.style.margin = "0";
  element.style.fontFamily = "Arial";
  //element.style.border = "5px solid red";
});

navBar.style.width = "100%";
navBar.style.backgroundColor = "white";
navBar.style.padding = "30px";
ul.style.display = "flex";
ul.style.justifyContent = "end";
ul.style.listStyle = "none";
navBar.style.display = "flex";
navBar.style.alignItems = "center";
navBar.style.justifyContent = "space-between";
navBar.style.padding = "30px 90px";
headerText.style.fontSize = "3em";

navButtons.forEach((button) => {
  button.style.margin = "0 20px";
  button.style.height = "40px";
  button.style.width = "120px";
  button.style.backgroundColor = "#E04B34";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "8px";
  button.style.fontSize = "1rem";
  button.style.fontWeight = "bold";
  button.style.cursor = "pointer";
  button.style.transition = "background 0.3s";

  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#ff7043";
    button.style.textDecoration = "none"; // Ensure text decoration stays none on hover
  });
  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#ff5722";
    button.style.textDecoration = "none";
  });
});

homePage();

const footer = document.createElement("footer");
footer.style.width = "100%";
footer.style.background = "#222";
footer.style.color = "#fff";
footer.style.textAlign = "center";
footer.style.padding = "18px 0";
footer.style.bottom = "0";
footer.style.left = "0";
footer.style.fontSize = "1em";
footer.style.letterSpacing = "0.3px";
footer.style.zIndex = "100";

const footerText = document.createElement("p");
footerText.textContent = "Copyright 2026 Pie-Zano's";
footer.appendChild(footerText);

document.body.appendChild(footer);

const menuBtn = document.getElementById("menuButton");
const homeBtn = document.getElementById("homeButton");
const contactBtn = document.getElementById("contactButton");

menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  menuPage();
});

homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  homePage();
});

contactBtn.addEventListener("click", () => {
  content.innerHTML = "";
  contactPage();
});
