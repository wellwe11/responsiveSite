import { addEvent } from "./scripts";

// buttons.forEach((button, indexOne) => {
//   button.addEventListener("mouseover", () => {
//     navItems.forEach((navItem, indexTwo) => {
//       if (indexOne === indexTwo) {
//         navItem.style.visibility = "visible";
//       } else {
//         navItem.style.visibility = "hidden";
//       }
//     });
//   });
// });

addEvent(".navBtn", ".navBtnDropDown");
