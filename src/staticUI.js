import {
  CreateContainer,
  CreateDivContainer,
  createNavBar,
  dropDownBtns,
  menuBtnNames,
  menuItemsWithDropDown,
} from "./scripts";

// container; appends to body
const containerEl = CreateContainer();

// navbar, exports to eventHandlers.js
const navBarEl = createNavBar();

// container for menuButtons
const divForBtns = CreateDivContainer("navbarEl", "btns");

// container for dropdown menus
const navBarContainer = CreateDivContainer("navbarEl", "dropDown");

// change amount to increase navBar btns & dropdownDivs
let amount = 2;
// creates buttons & dropdownMenus with buttons.
menuItemsWithDropDown(amount);

// add to array to configure button names
const arrayWithNames = ["Explore", "Contact"];
if (arrayWithNames.length > amount - 1) {
  menuBtnNames(".navBtn", arrayWithNames);
}

// increase argument to increase buttons for each menuDiv
dropDownBtns(3);
