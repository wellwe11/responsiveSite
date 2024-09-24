import {
  CreateContainer,
  CreateDivContainer,
  createDropDownItems,
  createNavBar,
  createNavBtns,
  dropDownBtns,
  menuItemsWithDropDown,
} from "./scripts";

// container; appends to body
const containerEl = CreateContainer();

// navbar, exports to eventHandlers.js
export const navBarEl = createNavBar();

// container for menuButtons
const divForBtns = CreateDivContainer("navbarEl", "btns");

// container for dropdown menus
const navBarContainer = CreateDivContainer("navbarEl", "dropDown");

// creates buttons & dropdownMenus with buttons. Change argument to change amount
menuItemsWithDropDown(4);

// increase argument to increase buttons for each menuDiv
dropDownBtns(3);

const arrayWithNames = ["hi", "two", "eyyy", "ya?"];
