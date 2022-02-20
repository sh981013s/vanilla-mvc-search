import MainController from "./controllers/MainController.js";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    MainController.init();
  }, 500);
});
