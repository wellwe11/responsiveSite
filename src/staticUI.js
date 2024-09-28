import {
  CreateContainer,
  CreateDivContainer,
  createNavBar,
  finalizeItems,
} from "./scripts";

// container; appends to body
const containerEl = CreateContainer();

// navbar, exports to eventHandlers.js
const navBarEl = createNavBar();

// container for menuButtons
const divForBtns = CreateDivContainer("navbarEl", "btns");

// container for dropdown menus
const navBarContainer = CreateDivContainer("navbarEl", "dropDown");

const menuButtonNames = ["asd", "aqsd", "assd"];
const arrOne = ["arr11", "arr12", "arr13"];
const arrTwo = ["arr21", "arr22", "arr23", "arr24"];
const arrThree = [
  "arr31",
  "arr32",
  "arr33",
  "arr34",
  "arr31",
  "arr32",
  "arr33",
];

finalizeItems(menuButtonNames).buttonsForMenu(arrOne, arrTwo, arrThree);
