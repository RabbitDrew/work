import createDropDownListWrapper from "../layout/header/header_dropdown";
//flags signal what window is open
const stateDropDownObj = {
  isCountriesOpen: false,
  isToursOpen: false,
};
//content for dropdowns 
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

//function to remove element when cursour out of element
const removeElement = function (stateDropDownObj, el, stateKey) {
  const dropDownEl = document.querySelector(".drop-down__wrapper");
  if (!dropDownEl) return; // chec if dropdown exist
  //if dropdown exist create subfunction to close element 
  const mouseMoveHandler = (event) => {
    const isOutside = !dropDownEl.contains(event.target) && !el.contains(event.target);
    if (isOutside) {
      dropDownEl.remove();
      stateDropDownObj[stateKey /*access to particulal key*/] = false;
      //than remove listner
      document.removeEventListener("mousemove", mouseMoveHandler);
    }
  };
   // add listner on the page with remover  subfunction 
  document.addEventListener("mousemove", mouseMoveHandler);
};

//function to open dropdowns 
const mouseMoveHandler = function () {
  // get items from the page
  const getNavElemnts = document.querySelectorAll(".nav-item"); 
  //iterate header elements
  for (let i = 0; i < getNavElemnts.length; i++) {
    const navItem = getNavElemnts[i]; // single element of header (nav-item)
    //add handler to particlular elements
    navItem.addEventListener("mouseover", () => {
      if (i === 0) {
        if (!stateDropDownObj.isCountriesOpen) {//check if flag is false open the window 
          // create the block and open it
          createDropDownListWrapper(
            "drop-down__wrapper",
            "drop-down-item",
            "drop-down-title",
            dataDropDown.countries,
            navItem
          );
          stateDropDownObj.isCountriesOpen = true; // shift the flag in true mode
        } else {//if flag is true add close the function 
          /*add class to smooth hide of element*/
          removeElement(stateDropDownObj, navItem, "isCountriesOpen");
        }
      } else if (i === 1) {
        // the as previous one
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
          /*add class to smooth hide of element*/
          removeElement(stateDropDownObj, navItem, "isToursOpen"); 
        }
      }
    });
  }
};

export default mouseMoveHandler;
