// generic element
class CreateEl {
  constructor(type) {
    this.type = type;
    this.element = document.createElement(type);
  }

  appendTo(parent) {
    parent.appendChild(this.element);
    return this;
  }

  setId(id) {
    this.element.id = id;
    return this;
  }
}

// generic button
class CreateButton extends CreateEl {
  constructor(text) {
    super("button");
    this.element.textContent = text;
  }

  setClass(className) {
    this.element.classList.add(className);
    return this;
  }
}

// div with classname
class CreateDropDown extends CreateEl {
  constructor() {
    super("div");
  }

  setClass(className) {
    this.element.classList.add(className);
    return this;
  }
}

// container for body
export const CreateContainer = () => {
  const element = new CreateEl("div")
    .appendTo(document.body)
    .setId("containerEl");
  return element;
};

// container for btns in navbar
export const CreateDivContainer = (appendId, forEl) => {
  const element = new CreateEl("div")
    .appendTo(document.getElementById(appendId))
    .setId(`${forEl}Container`);
  return element;
};

// body's navbar
export const createNavBar = () => {
  const element = new CreateEl("div")
    .appendTo(document.getElementById("containerEl"))
    .setId("navbarEl");
  return element;
};

// factoryFunc for buttons
const CreateBtn = (appendId, forEl, forNr, text) => {
  const element = new CreateButton(text)
    .appendTo(document.getElementById(appendId))
    .setId(`${forEl}Btn${forNr}`)
    .setClass(`${forEl}Btn`);
  return element;
};

// creates buttons for navbar (increase amount for ++buttons > extends CreateBtn)
export const createNavBtns = (amount, ...names) => {
  for (let i = 0; i < amount; i++) {
    CreateBtn("btnsContainer", "nav", `${i}`, `menu${i}`);
  }
};

// creates dropDown divs for buttons (increase amount for ++divs)
export const createDropDownItems = (amount) => {
  for (let i = 0; i < amount; i++) {
    new CreateDropDown()
      .appendTo(document.getElementById("dropDownContainer"))
      .setId(`navBtndropDown${i}`)
      .setClass("navBtnDropDown");
  }
};

// toggles true/false
const toggleEvent = () => {
  let toggle;

  const isTrue = () => {
    toggle = true;
    return toggle;
  };

  const isFalse = () => {
    return (toggle = false);
  };

  const getValue = () => {
    return toggle;
  };

  return {
    isTrue,
    isFalse,
    getValue,
  };
};

// changes visibilty. For dropdown menu
const changeVisibility = (el, value) => {
  if (value) {
    el.style.visibility = "visible";
  } else {
    el.style.visibility = "hidden";
  }
};

// hover-state for dropdown menus
export const addEvent = (elOne, elTwo) => {
  const myToggle = toggleEvent();

  // all buttons
  const elementsOne = document.querySelectorAll(elOne);

  // dropdown divs
  const elementsTwo = document.querySelectorAll(elTwo);
  elementsOne.forEach((elementOne, indexOne) => {
    elementOne.addEventListener("mouseover", () => {
      elementsTwo.forEach((elementTwo, indexTwo) => {
        // index of btn matches index of dropdown div
        if (indexOne === indexTwo) {
          myToggle.isTrue();
          changeVisibility(elementTwo, myToggle.getValue());
        } else {
          myToggle.isFalse();
          changeVisibility(elementTwo, myToggle.getValue());
        }
        // logic to hide all dropdown-divs for mouseleave
        elementTwo.addEventListener("mouseleave", () => {
          elementsTwo.forEach((elementTwo) => {
            elementTwo.style.visibility = "hidden";
          });
        });
      });
    });
  });
};

// logic to hide all dropdown-divs when mouseleave navbar
export const mouseLeave = (parentEl) => {
  const myToggle = toggleEvent();
  const navbar = document.getElementById(parentEl);
  const elements = document.querySelectorAll(".navBtnDropDown");
  navbar.addEventListener("mouseleave", () => {
    elements.forEach((element) => {
      myToggle.isFalse();
      changeVisibility(element, myToggle.getValue());
    });
  });
};

// creates buttons > extends menuButtons (change amount to ++buttons)
const createElements = (amount, parentEl, ...names) => {
  for (let i = 0; i < amount; i++) {
    if (names) {
      CreateBtn(parentEl, "navBtndropDown", `${i}`, `${names[i]}`);
    } else {
      CreateBtn(parentEl, "navBtndropDown", `${i}`, `option${i}`);
    }
  }
};

// add buttons to dropdown divs
const menuButtons = (amount, el) => {
  const elements = document.querySelectorAll(el);
  elements.forEach((element) => {
    createElements(amount, element.id);
  });
};

// extends menuButtons to simplify UI-control
export const dropDownBtns = (amount) => {
  return menuButtons(amount, ".navBtnDropDown");
};

// collectively create buttons for navbar with dropdown
export const menuItemsWithDropDown = (amount) => {
  // increase argument to increase navbarDivs > must match createNavBtns
  createDropDownItems(amount);

  // increase argument to increase buttons for navbar > must match createDropDownItems
  createNavBtns(amount);
};
