import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import "./modules/sliders.js";

import "./modules/validate.js";

const nav = document.querySelector(".header__button");
const body = document.body;

nav.addEventListener("click", () => {
  body.classList.toggle("_lock");
});
