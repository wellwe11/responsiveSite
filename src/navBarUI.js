import { CreateContainer, CreateDivContainer, finalizeItems } from "./scripts";

// container; appends to body
const navContainerEl = CreateContainer("navContainer");

// navbar, exports to eventHandlers.js
const navBarEl = CreateDivContainer(navContainerEl.getId(), "navbarEl");

// container for menuButtons
const divForBtns = CreateDivContainer(navBarEl.getId(), "btnsContainer");

// container for dropdown menus
const navBarContainer = CreateDivContainer(
  navBarEl.getId(),
  "dropDownContainer"
);

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

const navBtns = finalizeItems(menuButtonNames).buttonsForMenu(
  arrOne,
  arrTwo,
  arrThree
);
