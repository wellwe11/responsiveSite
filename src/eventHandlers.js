import { addEvent, mouseLeave } from "./scripts";

// adds hover to each button
addEvent(".navBtn", ".navDropDown");

// adds mouseLeave to buttons once leaving navBar
mouseLeave("navbarEl", ".navDropDown");

let order = 0;

document.addEventListener("DOMContentLoaded", () => {
  const dots = document.querySelectorAll("#dotContainer input");
  dots.forEach((dot) => (dot.value === "0" ? dot.click() : ""));
});

document.addEventListener("click", () => {
  const slideImages = document.querySelectorAll("#sliderPictureArea img");
  slideImages.forEach((image) => {
    if (parseInt(image.getAttribute("data-value")) === parseInt(order)) {
    }
  });
});

const buttonLeft = document.getElementById("sliderBtnOne");
const buttonRight = document.getElementById("sliderBtnTwo");

const slideImages = document.querySelectorAll("#sliderPictureArea img");

buttonRight.addEventListener("click", () => {
  const imgs = document.querySelectorAll("#sliderPictureArea img");

  if (
    order >= 0 &&
    order < document.querySelectorAll("#sliderPictureArea img").length - 1
  ) {
    ++order;
  }
  imgs.forEach((img) => {
    if (parseInt(img.getAttribute("data-value")) === parseInt(order)) {
      img.style.animation = "fromRight 1s ease forwards";
    }

    if (parseInt(img.getAttribute("data-value")) === parseInt(order - 1)) {
      img.style.animation = "goLeft 1s ease forwards";
    }
  });
});

buttonLeft.addEventListener("click", () => {
  if (
    order >= 1 &&
    order <= document.querySelectorAll("#sliderPictureArea img").length - 1
  ) {
    order--;
  }

  const imgs = document.querySelectorAll("#sliderPictureArea img");
  imgs.forEach((img) => {
    if (parseInt(img.getAttribute("data-value")) === parseInt(order)) {
      img.style.animation = "fromLeft 1s ease forwards";
    }

    if (parseInt(img.getAttribute("data-value")) === parseInt(order + 1)) {
      console.log("-", img);
      img.style.animation = "goRight 1s ease forwards";
    }
  });
});

document.addEventListener("click", () => {
  const dots = document.querySelectorAll("#dotContainer input");
  dots.forEach((dot) => {
    if (parseInt(dot.value) === parseInt(order)) {
      dot.click();
    }
  });
});
// create eventHandler for when data-attribute is active, matching
// radioBtn is active
