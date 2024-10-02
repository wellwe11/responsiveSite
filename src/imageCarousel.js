import {
  CreateContainer,
  CreateDivContainer,
  createDivs,
  sliderPictures,
} from "./scripts";
import placeHolderOne from "./img/imageOne.jpeg";
import placeHolderTwo from "./img/imageTwo.jpeg";
import placeHolderThree from "./img/imageThree.jpeg";
import placeholder from "./img/placeholder.png";

const slideContainer = CreateContainer("slideContainer");

const slider = CreateDivContainer(slideContainer.getId(), "sliderDiv");
const sliderDotsContainer = CreateDivContainer(
  slideContainer.getId(),
  "dotContainer"
);

const sliderButtonOne = CreateDivContainer(slider.getId(), "sliderBtnOne");
const sliderButtonTwo = CreateDivContainer(slider.getId(), "sliderBtnTwo");
const sliderPictureArea = CreateDivContainer(
  slider.getId(),
  "sliderPictureArea"
);

const slideImgController = sliderPictures();

slideImgController.createPic(
  placeHolderOne,
  placeHolderTwo,
  placeHolderThree,
  placeholder
);

createDivs(`#${slideContainer.getId()} img`).sliderDots(
  sliderDotsContainer.getId()
);
