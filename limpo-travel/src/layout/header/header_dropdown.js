import elementCreator from "../../global/create_el.js";
import elementRendering from "../../global/render_el.js";


const createDropDownListWrapper =  (
  classNameWrapper,
  classNameItem,
  classNameTitle,
  contentArr,
  parentElement
) => {
  const dropDownWrapper = elementCreator("ul", classNameWrapper);
  elementRendering (parentElement, dropDownWrapper)
  for (let i = 0; i < contentArr.length; i++) {
    const dropDownItem = createDropDownItem(classNameItem);
    elementRendering(dropDownWrapper, dropDownItem);
    const dropDownTitle = createDropDownTitle(classNameTitle);
    dropDownTitle.textContent = contentArr[i]; 
    elementRendering(dropDownItem, dropDownTitle); 
  }
  return dropDownWrapper
};
const createDropDownItem = (classNameItem) => {
  return elementCreator("li", classNameItem);
};
const createDropDownTitle = (classNameTitle) => {
  return elementCreator("h2", classNameTitle);
};



export default createDropDownListWrapper