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
export const mouseLeave = (parentEl, items) => {
  const myToggle = toggleEvent();
  const navbar = document.getElementById(parentEl);
  const elements = document.querySelectorAll(items);
  navbar.addEventListener("mouseleave", () => {
    elements.forEach((element) => {
      myToggle.isFalse();
      changeVisibility(element, myToggle.getValue());
    });
  });
};

// add buttons to dropdown divs
const menuButtons = (amount) => {
  const elements = document.querySelectorAll(".navDropDown");
  console.log(elements);
  elements.forEach((element) => {
    console.log(element);
    createDropDownBtns(amount, element.id, `dropdown`);
  });
};

const createDropDownBtns = (amount, appendId, forEl) => {
  for (let i = 0; i < amount; i++) {
    new ElWithClass(`btn${i}`, "button")
      .appendTo(document.getElementById(appendId))
      .setId(`${forEl}Btn${i}`)
      .setClass(`nav${forEl}`);
  }
};

// creates buttons for navbar (increase amount for ++buttons > extends CreateBtn)
export const createNavBtns = (amount, appendId, forEl) => {
  for (let i = 0; i < amount; i++) {
    new ElWithClass(`btn${i}`, "button")
      .appendTo(document.getElementById(appendId))
      .setId(`${forEl}Btn${i}`)
      .setClass(`${forEl}Btn`);
  }
};

export const createDropDownItems = (amount) => {
  for (let i = 0; i < amount; i++) {
    new ElWithClass("", "div")
      .appendTo(document.getElementById("dropDownContainer"))
      .setId(`navDropDown${i}`)
      .setClass("navDropDown");
  }
};

// collectively create buttons for navbar with dropdown
export const menuItemsWithDropDown = (amount) => {
  const createDropDownEls = () => {
    return createDropDownItems(amount);
  };

  const dropDownButtons = (privAmount) => {
    // increase argument to increase navbarDivs > must match createNavBtns

    return menuButtons(privAmount);
  };

  const navBtns = (appendId, forEl) => {
    // increase argument to increase buttons for navbar > must match createDropDownItems
    return createNavBtns(amount, appendId, forEl);
  };

  return {
    dropDownButtons,
    navBtns,
    createDropDownEls,
  };
};

export const menuBtnNames = (elClass, ...array) => {
  const elements = document.querySelectorAll(elClass);
  elements.forEach((element, index) => {
    array.forEach((item) => {
      element.textContent = item[index];
    });
  });
};
