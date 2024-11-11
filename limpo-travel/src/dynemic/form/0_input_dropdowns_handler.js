import toggleInputOptionsDropDown from "./1_input-selector-flags";



const inputClickHandler = function () {
  document.addEventListener('click', (event) => {
    toggleInputOptionsDropDown(event)
  })
};

export default inputClickHandler;


/*
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
*/

