const portfolioTiles = document.querySelectorAll(".portfolio-tiles");
tilesImage = document.querySelectorAll(".tiles-img");
const tilesText = document.querySelectorAll(".tiles-text-container");
const burgerNav = document.querySelector(".nav-burger");

const toggleNav = () => {
  const header = document.querySelector(".header");
  header.classList.toggle("side-nav");
};

document.addEventListener("click", (e) => {
  if (e.target.matches(".fas")) {
    toggleNav();
  }
});
