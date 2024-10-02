import { addEvent, mouseLeave } from "./scripts";

const dots = document.querySelectorAll("#dotContainer input");
// adds hover to each button
addEvent(".navBtn", ".navDropDown");

// adds mouseLeave to buttons once leaving navBar
mouseLeave("navbarEl", ".navDropDown");

let order = 0;

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

  dots.forEach((dot) => {
    if (parseInt(dot.value) === parseInt(order)) {
      dot.click();
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
      img.style.animation = "goRight 1s ease forwards";
    }
  });
  dots.forEach((dot) => {
    if (parseInt(dot.value) === parseInt(order)) {
      dot.click();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  dots.forEach((dot) => {
    if (parseInt(dot.value) === parseInt(order)) {
      dot.click();
    }
  });
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const imgs = document.querySelectorAll("#sliderPictureArea img");

    imgs.forEach((img) => {
      if (parseInt(dot.value) === parseInt(img.getAttribute("data-value"))) {
        for (let i = 0; i < imgs.length; i++) {
          if (dot.value > order) {
            buttonRight.click();
          } else if (dot.value < order) {
            buttonLeft.click();
          }
        }
      }
    });
  });
});

// create eventHandler for when data-attribute is active, matching
// radioBtn is active
