import {
  CreateBtn,
  CreateContainer,
  CreateDivContainer,
  CreateDropDownFn,
  createNavBar,
} from "./scripts";

const containerEl = CreateContainer();
const navBarEl = createNavBar();

const divForBtns = CreateDivContainer("navbarEl", "btns");
const navBtnOne = CreateBtn("btnsContainer", "nav", "One");
const navBtnTwo = CreateBtn("btnsContainer", "nav", "Two");
const navBtnThree = CreateBtn("btnsContainer", "nav", "Three");

const navBarContainer = CreateDivContainer("navbarEl", "dropDown");
const navDropDownOne = CreateDropDownFn("navBtn", "One");
const navDropDownTwo = CreateDropDownFn("navBtn", "Two");
const navDropDownThree = CreateDropDownFn("navBtn", "Three");
