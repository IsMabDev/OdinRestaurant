// import "./style.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";
import { renderFooter } from "./footer.js";
import { createHtmlElement } from "./golbalFunctions.js";

const content = document.querySelector("#content");
const body = document.querySelector("body");
const homeButton = document.querySelector("#homeButton");
const menuButton = document.querySelector("#menuButton");
const contactButton = document.querySelector("#contactButton");

home();

homeButton.addEventListener("click", () => {
  content.innerText = "";
  home();
});
menuButton.addEventListener("click", () => {
  content.innerText = "";
  menu();
});
contactButton.addEventListener("click", () => {
  content.innerText = "";
  contact();
});

renderFooter();

export { content, body };
