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
class ElWithClass extends CreateEl {
  constructor(text, type) {
    super(type);
    this.element.textContent = text;
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

// changes visibilty. For dropdown menu
const changeVisibility = (el, value) => {
  el.style.visibility = value ? "visible" : "hidden";
};

// hover-state for dropdown menus
export const addEvent = (elOne, elTwo) => {
  // all buttons
  const elementsOne = document.querySelectorAll(elOne);

  // dropdown divs
  const elementsTwo = document.querySelectorAll(elTwo);
  elementsOne.forEach((elementOne, indexOne) => {
    elementOne.addEventListener("mouseover", () => {
      elementsTwo.forEach((elementTwo, indexTwo) => {
        // index of btn matches index of dropdown div
        changeVisibility(elementTwo, indexOne === indexTwo);
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
export const mouseLeave = (parentEl, items) => {
  const navbar = document.getElementById(parentEl);
  const elements = document.querySelectorAll(items);
  navbar.addEventListener("mouseleave", () => {
    elements.forEach((element) => {
      changeVisibility(element);
    });
  });
};

// add buttons to dropdown divs
const menuButtons = (...amounts) => {
  const elements = document.querySelectorAll(".navDropDown");
  elements.forEach((element, index) => {
    amounts.forEach((amount) => {
      createDropDownBtns(amount[index], element.id);
    });
  });
};

const createDropDownBtns = (amount, appendId) => {
  for (let i = 0; i < amount; i++) {
    new ElWithClass(`btn${i + 1}`, "button")
      .appendTo(document.getElementById(appendId))
      .setId(`dropdownBtn${i}`)
      .setClass(`navDropDownBtn`);
  }
};

// creates buttons for navbar (increase amount for ++buttons > extends CreateBtn)
const createNavBtns = (amount) => {
  for (let i = 0; i < amount; i++) {
    new ElWithClass(`btn${i + 1}`, "button")
      .appendTo(document.getElementById("btnsContainer"))
      .setId(`navBtn${i}`)
      .setClass(`navBtn`);
  }
};

const createDropDownItems = (amount) => {
  for (let i = 0; i < amount; i++) {
    new ElWithClass("", "div")
      .appendTo(document.getElementById("dropDownContainer"))
      .setId(`navDropDown${i}`)
      .setClass("navDropDown");
  }
};

// collectively create buttons for navbar with dropdown
export const menuItemsWithDropDown = (amount) => {
  return {
    navBtns: function () {
      // increase argument to increase buttons for navbar > must match createDropDownItems
      return createNavBtns(amount);
    },
    createDropDownEls: function () {
      return createDropDownItems(amount);
    },
    dropDownButtons: function (privAmount) {
      // increase argument to increase navbarDivs > must match createNavBtns
      return menuButtons(privAmount);
    },
  };
};

export const setNames = (elClass, ...array) => {
  const elements = document.querySelectorAll(elClass);
  elements.forEach((element, index) => {
    array.forEach((item) => {
      element.textContent = item[index];
    });
  });
};

export const setChildNames = (parentEl, ...array) => {
  const parent = document.getElementById(parentEl);
  const elements = parent.querySelectorAll(".navDropDownBtn");

  elements.forEach((element, index) => {
    array.forEach((item) => {
      element.textContent = item[index];
    });
  });
};

const createMenuButtons = (targetEl, ...elements) => {
  // creates buttons & dropdownMenus with buttons.
  const element = menuItemsWithDropDown(elements);

  // create menuItems
  element.navBtns();
  element.createDropDownEls();

  const array = [];

  const buttonsForMenu = (...buttons) => {
    buttons.forEach((button) => {
      array.push(button.length);
    });

    element.dropDownButtons(array);
    array.forEach((_, index) => {
      setChildNames(`${targetEl}${index}`, buttons[index]);
    });
  };

  return {
    buttonsForMenu,
  };
};

export const finalizeItems = (someArr) => {
  return createMenuButtons("navDropDown", someArr.length);
};
