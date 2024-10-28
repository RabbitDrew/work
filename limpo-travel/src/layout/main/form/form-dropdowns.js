import './form-dropdowns.css'
import elementCreator from "../../../global/create_el";
import elementRendering from "../../../global/render_el";

const createInputOptionsWrapper = (arrOfOptions) => {
  const dropDownOptionsWrapper = elementCreator("ul", "input-options");
  arrOfOptions = createInputOptions(arrOfOptions);
  arrOfOptions.forEach((option) => {
    elementRendering(dropDownOptionsWrapper, option);
  });
  return  dropDownOptionsWrapper;
};

const createInputOptions = (arrOfOptions) => {
  let options = [];
  arrOfOptions.forEach((element) => {
    const createOptionItem = elementCreator("li", "option");
    const createOptionTitle = elementCreator("h2", "option-title");
    createOptionTitle.textContent = element;
    elementRendering(createOptionItem, createOptionTitle);
    options.push(createOptionItem);
  });
  return options;
};



export default createInputOptionsWrapper
