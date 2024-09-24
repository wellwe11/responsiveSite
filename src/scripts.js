export class CreateEl {
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
export const CreateBtn = (appendId, forEl, forNr) => {
  const element = new CreateButton("Click me")
    .appendTo(document.getElementById(appendId))
    .setId(`${forEl}Btn${forNr}`)
    .setClass(`${forEl}Btn`);
  return element;
};

// factoryFunc for dropdowns
export const CreateDropDownFn = (forEl, forNr) => {
  const element = new CreateDropDown()
    .appendTo(document.getElementById("dropDownContainer"))
    .setId(`${forEl}dropDown${forNr}`)
    .setClass(`${forEl}DropDown`);
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

export const addEvent = (elOne, elTwo) => {
  const myToggle = toggleEvent();
  const elementsOne = document.querySelectorAll(elOne);
  const elementsTwo = document.querySelectorAll(elTwo);
  elementsOne.forEach((elementOne, indexOne) => {
    console.log(elementOne);
    elementOne.addEventListener("mouseover", () => {
      elementsTwo.forEach((elementTwo, indexTwo) => {
        if (indexOne === indexTwo) {
          myToggle.isTrue();
          changeVisibility(elementTwo, myToggle.getValue());
        } else {
          myToggle.isFalse();
          changeVisibility(elementTwo, myToggle.getValue());
        }
      });
      elementOne.addEventListener("mouseleave", () => {
        elementsTwo.forEach((elementTwo) => {
          elementTwo.style.visibility = "hidden";
        });
      });
    });
  });
};
