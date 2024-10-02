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

  getId() {
    return this.element.id;
  }
}

// generic button
class ElWithClass extends CreateEl {
  constructor(type, text) {
    super(type);
    this.element.textContent = text;
  }

  setClass(className) {
    this.element.classList.add(className);
    return this;
  }

  getClass() {
    return this.element.className;
  }
}

class ElWithSrc extends CreateEl {
  constructor(type) {
    super(type);
  }

  setSrc(srcName) {
    this.element.src = srcName;
    return this;
  }

  setDataAttribute(data) {
    this.element.dataset.value = data;
    return this;
  }
}

class elWithClassType extends ElWithClass {
  constructor(type, text) {
    super(type, text);
  }

  setType(typeValue) {
    this.element.type = typeValue;
    return this;
  }

  setValue(value) {
    this.element.value = value;
    return this;
  }

  setGroup(group) {
    this.element.name = group;
    return this;
  }
}

// container for body
export const CreateContainer = (id) => {
  const element = new CreateEl("div").appendTo(document.body).setId(`${id}El`);
  return element;
};

// container for btns in navbar
export const CreateDivContainer = (appendId, id) => {
  const element = new CreateEl("div")
    .appendTo(document.getElementById(appendId))
    .setId(id);
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
      createElements(
        "button",
        amount[index],
        element.id,
        "dropdownBtn",
        "navDropDownBtn"
      );
    });
  });
};

const createElements = (type, amount, appendId, elId, elClass) => {
  for (let i = 0; i < amount; i++) {
    new ElWithClass(type, `${type}${i + 1}`)
      .appendTo(document.getElementById(appendId))
      .setId(`${elId}${i}`)
      .setClass(elClass);
  }
};

const createDropDownItems = (amount) => {
  for (let i = 0; i < amount; i++) {
    new ElWithClass("div", "")
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
      return createElements(
        "button",
        amount,
        "btnsContainer",
        "navBtn",
        "navBtn"
      );
    },
    createDropDownEls: function () {
      return createDropDownItems(amount);
    },
    dropDownButtons: function (privAmount) {
      // increase argument to increase navbarDivs > must match createBtns
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

const createMenuButtons = (targetEl, arr, ...elements) => {
  // creates buttons & dropdownMenus with buttons.
  const element = menuItemsWithDropDown(elements);

  // create menuItems
  element.navBtns();
  element.createDropDownEls();

  // array for amount of buttons needed
  const array = [];

  const buttonsForMenu = (...buttons) => {
    buttons.forEach((button) => {
      // create dropdown dependant on need
      array.push(button.length);
    });

    element.dropDownButtons(array);
    array.forEach((_, index) => {
      setChildNames(`${targetEl}${index}`, buttons[index]);
      setNames(".navBtn", arr);
    });
  };

  return {
    buttonsForMenu,
  };
};

export const finalizeItems = (someArr) => {
  return createMenuButtons("navDropDown", someArr, someArr.length);
};

// ------------------------------------------------------------------ // ------------------------------------------------------------------ //

const createImages = (amount, appendId, src, data) => {
  for (let i = 0; i < amount; i++) {
    new ElWithSrc("img")
      .appendTo(document.getElementById(appendId))
      .setSrc(src)
      .setDataAttribute(data);
  }
};

const createRadios = (type, amount, appendId, elClass) => {
  for (let i = 0; i < amount; i++) {
    new elWithClassType(type, `${type}${i + 1}`)
      .appendTo(document.getElementById(appendId))
      .setClass(elClass)
      .setType("radio")
      .setValue(i)
      .setGroup(amount);
  }
};

export const sliderPictures = () => {
  const createPic = (...sources) => {
    sources.forEach((src, index) =>
      createImages(1, "sliderPictureArea", src, index)
    );
  };
  return {
    createPic,
  };
};

export const createDivs = (...divs) => {
  let amount = document.querySelectorAll(divs);

  const sliderDots = (appendId) => {
    return createRadios("input", amount.length, appendId, "sliderDot");
  };

  return {
    sliderDots,
  };
};
