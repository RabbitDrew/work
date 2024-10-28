
import toggleInputOptionsDropDown from "./1_input-selector-flags";

import createDropDownOptionLIst from "./2_render_options";
import elementRendering from "../../global/render_el";
const arrOfIndexes = [0, 1, 6, 7];
let winIsOpen = false
const inputClickHandler = function () {
  const getInputsWrappers = document.querySelectorAll(".row-input__wrapper");
  getInputsWrappers.forEach((input, i) => {
    input.addEventListener("click", (event) => {
      toggleInputOptionsDropDown (input, i)
    });
  }); 


};

export default inputClickHandler;

/*



const inputClickHandler = function () {
  const getInputsWrappers = document.querySelectorAll(".row-input__wrapper");
  getInputsWrappers.forEach((input, i) => {
    input.addEventListener("click", (event) => {
      const getElement = document.querySelector(".input-options");
      let  getInnputOfOenedOption = getElement ? getElement.parentElement : null;
      if (getElement && getInnputOfOenedOption !== input) {
        getElement.remove();
        isOptionOpend = false
      }
      if (inputIndexes.includes(i) && !isOptionOpend) {
          const optinInputsWrapper = createDropDownOptionLIst(inputIndexes, i);
          elementRendering(input, optinInputsWrapper);
          isOptionOpend = true
        } else  {
        getElement? getElement.remove(): null;
        isOptionOpend = false
      }
    });

    
  });
};
             
 */




/*
   getInputsWrappers.forEach((input, i) => {
    input.addEventListener("click", (event) => {
      toggleInputOptionsDropDown (input, i)
    });
  }); 

  const getElement = document.querySelectorAll(".input-options"); 
    if (inputIndexes.includes(i)) {
       if (getElement.length > 0) {
        getElement[getElement.length -1].remove()
        isOptionOpend = false
       }
       if (!isOptionOpend) {
        const optinInputsWrapper = createDropDownOptionLIst(inputIndexes, i);
        elementRendering(input, optinInputsWrapper);
        isOptionOpend = true;
       }else {
        getElement[getElement.length -1].remove();
        isOptionOpend = false
       }
      } else  {
        getElement[getElement.length -1].remove();
        isOptionOpend = false
    }




*/