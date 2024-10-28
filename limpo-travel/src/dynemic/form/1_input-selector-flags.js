import createDropDownOptionLIst from "./2_render_options";
import elementRendering from "../../global/render_el";
const arrOfIndexes = [0, 1, 6, 7];
let isOptionOpend = false;

const toggleInputOptionsDropDown = function (input, i) {
  //gett arr of all opened dropdowns
  const getElement = document.querySelectorAll(".input-options");
  if (getElement.length > 0) {
    //check are there opened windows if yes than remove is already opend window
    getElement.forEach(el => el.remove());
    isOptionOpend = false;
  }
  //check if there arre indexes in arrOfIndexes (arr with indexes for inputs with dropdowns)
  if (arrOfIndexes.includes(i)) {
            if (!isOptionOpend) {
            const optinInputsWrapper = createDropDownOptionLIst(arrOfIndexes, i);
            elementRendering(input, optinInputsWrapper);
            isOptionOpend = true;
            } else {
                const openedElement = input.querySelector(".input-option");
                console.log(openedElement)
                if (openedElement) {
                  openedElement.remove();
                  isOptionOpend = false; // Устанавливаем состояние, что меню закрыто
                }
            }
  } else {
    const openedElement = document.querySelector(".input-option");
    if (openedElement) {
      openedElement.remove();
      isOptionOpend = false; 
    }
  }
};

export default toggleInputOptionsDropDown;
