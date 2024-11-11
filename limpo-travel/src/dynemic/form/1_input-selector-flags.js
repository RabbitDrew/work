import createDropDownOptionLIst from "./2_render_options";
import elementRendering from "../../global/render_el";

const arrOfIndexes = [0, 1, 6, 7];
let isWinOpen = false;
let isBtnIndex = null;

const toggleInputOptionsDropDown = function (event) {
  const inputs = document.querySelectorAll(".input-field"); // get just fields
  const input = Array.from(inputs).find((input) => input === event.target); // create arr from fields to get  pusshed input
  const inputIndex = input ? Array.from(inputs).indexOf(input) : null; //  the same as previouse one  and get index of input
  const inputWrapper = input ? input.parentElement : null; //if input exist get parent element of input
  // get is already option dropDown WIndow and check it if it exists delete it
  const isOptionList = document.querySelector(".input-options");
  if (isOptionList) {
    isOptionList.remove();
  }
  //init general checking to open dropDown win for right inputs
  if (arrOfIndexes.includes(inputIndex)) {
    //init check wheather is pushed right input or not
    if (event.target === input) {
      //init checking wheather is pushed the same window
      if (isBtnIndex === inputIndex) {
        // init chec for pushed input wheather the window open or not
        if (!isWinOpen) { // if false creatate and open window 
          let optionList = createDropDownOptionLIst(arrOfIndexes, inputIndex);
          elementRendering(inputWrapper, optionList);
          isWinOpen = true;
        } else { // if yes close the window
          if (isOptionList) { 
            isOptionList.remove();
          }
          isWinOpen = false;
          return;
        }
      } else if (isBtnIndex !== inputIndex) { //if pushed not the same btn create window
        isBtnIndex = inputIndex;
        let optionList = createDropDownOptionLIst(arrOfIndexes, inputIndex);
        elementRendering(inputWrapper, optionList);
        isWinOpen = true;
      }
    } else {
      if (isOptionList ) {
        isOptionList.remove();
      }
    }
  } else {
    if (isOptionList ) {
      isOptionList .remove();
      isWinOpen = false;
      return;
    }
  }
};

export default toggleInputOptionsDropDown;

/*

const arrOfIndexes = [0, 1, 6, 7];
let isWinOpen = false

let isBtnIndex = null

const inputClickHandler = function () {

  document.addEventListener('click', (event) => {
    const inputs = document.querySelectorAll('.input-field') // get just fields
    const input = Array.from(inputs).find(input => input === event.target) // create arr from fields to get  pusshed input 
    const inputIndex = input? Array.from(inputs).indexOf(input): null; //  the same as previouse one  and get index of input 
    const inputWrapper = input? input.parentElement: null; 
   
    const getOptionList = document.querySelector('.input-options')
    if (getOptionList) {
         getOptionList.remove()
       }   

  if (arrOfIndexes.includes(inputIndex)) {
    if (event.target === input) {
        if (isBtnIndex === inputIndex) {
          if (!isWinOpen) {
            let optionList = createDropDownOptionLIst(arrOfIndexes, inputIndex)
            elementRendering(inputWrapper, optionList)
            isWinOpen = true 
          }else {
            if (getOptionList) {
              getOptionList.remove()
            }
            isWinOpen = false
            return
          }

        }else if (isBtnIndex !== inputIndex) {   
          isBtnIndex = inputIndex
          let optionList = createDropDownOptionLIst(arrOfIndexes, inputIndex)
          elementRendering(inputWrapper, optionList)
          isWinOpen = true;
        }

      }else {
        if (getOptionList) {
          getOptionList.remove()
        }   
      }


  }else {
    if (getOptionList) {
      getOptionList.remove()
      isWinOpen = false
      return
    }   
  }


  })
};

export default inputClickHandler;





*/
