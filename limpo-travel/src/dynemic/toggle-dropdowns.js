import createDropDownListWrapper from "../layout/header/header_dropdown";

const stateDropDownObj = {
  isCountriesOpen: false,
  isToursOpen: false,
};
const dataDropDown = {
  countries: [
    "Турция",
    "Греция",
    "Египет",
    "Испания",
    "Болгария",
    "Кипр",
    "Черногория",
  ],
  tours: [
    "Горнолыжные туры",
    "Туры выходного дня",
    "Туры по европейским столицам",
    "Отдых на море",
    "Корпоративные туры",
    "Круизы",
  ],
};


const removeElement = function (stateDropDownObj, el, stateKey) {
  const dropDownEl = document.querySelector(".drop-down__wrapper");
  if (!dropDownEl) return;
  const mouseMoveHandler = (event) => {
    const isOutside =
      !dropDownEl.contains(event.target) && !el.contains(event.target);
    if (isOutside) {
      dropDownEl.remove();
      stateDropDownObj[stateKey] = false;
      document.removeEventListener("mousemove", mouseMoveHandler);
    }
  };
  document.addEventListener("mousemove", mouseMoveHandler);
};




const mouseMoveHandler = function () {
  const getNavElemnts = document.querySelectorAll(".nav-item");

  for (let i = 0; i < getNavElemnts.length; i++) {
    const navItem = getNavElemnts[i];

    navItem.addEventListener("mouseover", () => {
      if (i === 0) {
        if (!stateDropDownObj.isCountriesOpen) {
          createDropDownListWrapper(
            "drop-down__wrapper",
            "drop-down-item",
            "drop-down-title",
            dataDropDown.countries,
            navItem
          );
          stateDropDownObj.isCountriesOpen = true;
        } else {
          removeElement(stateDropDownObj, navItem, "isCountriesOpen"); 
        }
      } else if (i === 1) {
        if (!stateDropDownObj.isToursOpen) {
          createDropDownListWrapper(
            "drop-down__wrapper",
            "drop-down-item",
            "drop-down-title",
            dataDropDown.tours,
            navItem
          );
          stateDropDownObj.isToursOpen = true;
        } else {
          removeElement(stateDropDownObj, navItem, "isToursOpen"); 
        }
      }
    });
  }
};

export default mouseMoveHandler;
