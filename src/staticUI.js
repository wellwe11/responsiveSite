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

// add to array to configure button names
const arrayWithNames = ["Explore", "Contact"];

// change amount to increase navBar btns & dropdownDivs
let amountOfButtons = arrayWithNames.length;

let amountOfDropDownBtns = 4;

// creates buttons & dropdownMenus with buttons.
const loadMenuItems = menuItemsWithDropDown(amountOfButtons);

loadMenuItems.navBtns("btnsContainer", "nav");
loadMenuItems.createDropDownEls();
loadMenuItems.dropDownButtons(amountOfDropDownBtns);

if (arrayWithNames.length > amountOfButtons - 1) {
  menuBtnNames(".navBtn", arrayWithNames);
}
