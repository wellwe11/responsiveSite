import {
  CreateContainer,
  CreateDivContainer,
  createNavBar,
  menuItemsWithDropDown,
  setChildNames,
  setNames,
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
const arrayWithNames = ["Explore", "Contact", "asd"];

// menuOne names
const dropDownOneBtns = [
  "menu1 Item2",
  "menu1 Item2",
  "menu1 item3",
  "menu1 item4",
];

// menuTwo names
const dropDownTwoBtns = ["menu2 Item2", "menu2 Item2", "menu2 Item3"];

// menuThree names
const dropDwonThreeBtns = ["somethingOne", "somethingTwo"];

let amountOfButtons = arrayWithNames.length;
let dropDownLengthOne = dropDownOneBtns.length;
let dropDownLengthTwo = dropDownTwoBtns.length;
let dropDownLengthThree = dropDwonThreeBtns.length;

// creates buttons & dropdownMenus with buttons.
const loadMenuItems = menuItemsWithDropDown(amountOfButtons);

// create menuItems
loadMenuItems.navBtns();
loadMenuItems.createDropDownEls();
loadMenuItems.dropDownButtons([
  dropDownLengthOne,
  dropDownLengthTwo,
  dropDownLengthThree,
]);

/**  adds names to buttons if length matches amount of names
 *  otherwise returns to standard-names given for each button
 */
if (arrayWithNames.length > 0) {
  setNames(".navBtn", arrayWithNames);
}

if (dropDownOneBtns.length > 0) {
  setChildNames("navDropDown0", dropDownOneBtns);
}

if (dropDownTwoBtns.length > 0) {
  setChildNames("navDropDown1", dropDownTwoBtns);
}

if (dropDwonThreeBtns.length > 0) {
  setChildNames("navDropDown2", dropDwonThreeBtns);
}

// fix so dropdownOne can be smaller than dropdownTwo

/** 1. Create an array containing button-names (as many as you want).
 * 2. Create a let-variable which will contain the arrays length.
 * 3. Add said variable to the "loadMenuItems.dropDownButtons()".
 * 4. Create an if-statement to check so array-length is higher than it's value
 * (if empty, button-names will turn to standard-mode) */

// create a factoryFunction to do all of this (or class)
