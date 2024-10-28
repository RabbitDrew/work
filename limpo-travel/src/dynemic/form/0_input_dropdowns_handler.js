import {
  toogleInputsFlags,
  isInputOptionsOpen,
} from "./1_input-selector-flags";
import elementRendering from "../../global/render_el";
import createDropDownOptionLIst from "./2_render_options";
const inputIndexes = [0, 1, 6, 7];

let isOptionOpend = false;

const inputClickHandler = function () {
  const getInputsWrappers = document.querySelectorAll(".row-input__wrapper");
  getInputsWrappers.forEach((input, i) => {

    if (inputIndexes.includes(i)) {
      input.addEventListener("click", (event) => {
        if (!isOptionOpend) {
          const optinInputsWrapper = createDropDownOptionLIst(inputIndexes, i);
          elementRendering(input, optinInputsWrapper);
          isOptionOpend = true;
        } else {
          const getElement = document.querySelector(".input-options");
          getElement.remove();
          isOptionOpend = false;
        }
      });
    }
    
  });
};

export default inputClickHandler;

/*                if (!isOptionOpend) {
                    const optinInputsWrapper = createDropDownOptionLIst(inputIndexes, i)
                    elementRendering(input,optinInputsWrapper)
                    isOptionOpend = true
                }else  {
                    const getElement = document.querySelector('.input-options')
                    getElement.remove()
                    isOptionOpend = false 
                }*/
