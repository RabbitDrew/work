import elementCreator from "../../global/create_el.js";
import elementRendering from "../../global/render_el.js";

const stateDropDownObj = {
    isCountriesOpen: false,
    isToursOpen: false
}
let isCountriesOpen = false 
let isToursOpen = false

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

const removeElement = function (stateDropDownObj, el, stateKey) { 
    const dropDownEl = document.querySelector('.drop-down__wrapper');

    if (!dropDownEl) return; 

    const mouseMoveHandler = (event) => {
        const isOutside = !dropDownEl.contains(event.target) && !el.contains(event.target);
        if (isOutside) {
            dropDownEl.remove();
            stateDropDownObj[stateKey] = false; 
            document.removeEventListener('mousemove', mouseMoveHandler); 
        }
    };

    document.addEventListener('mousemove', mouseMoveHandler); 
};

const mouseMoveHandler = function () {
    const getNavElemnts = document.querySelectorAll('.nav-item');

    for (let i = 0; i < getNavElemnts.length; i++) {
        const navItem = getNavElemnts[i];
        
        navItem.addEventListener('mouseover', (event) => {
            if (i === 0) {
                if (!stateDropDownObj.isCountriesOpen) {
                    createDropDownListWrapper(
                        'drop-down__wrapper',
                        'drop-down-item',
                        'drop-down-title',
                        dataDropDown.countries,
                        navItem
                    );
                    stateDropDownObj.isCountriesOpen = true;
                } else {
                    removeElement(stateDropDownObj, navItem, 'isCountriesOpen'); // Закрываем меню
                }
            } else if (i === 1) {
                if (!stateDropDownObj.isToursOpen) {
                    createDropDownListWrapper(
                        'drop-down__wrapper',
                        'drop-down-item',
                        'drop-down-title',
                        dataDropDown.tours,
                        navItem
                    );
                    stateDropDownObj.isToursOpen = true;
                } else {
                    removeElement(stateDropDownObj, navItem, 'isToursOpen'); // Закрываем меню
                }
            }
        });
    }
};

export default mouseMoveHandler;
/*



     getNavElemnts.forEach((el, i) => {
        el.addEventListener ('mousemove', () => {
            if (i === 0) {
                if (!isCountriesOpen && el)  {
                    createDropDownListWrapper ('drop-down__wrapper',
                        'drop-down-item',
                        'drop-down-title',
                        dataDropDown.countries,
                        el
                    )
                     isCountriesOpen = true
                } else {
                    removeElement(isCountriesOpen, el)
                }
            }else if (i === 1) {
                if (!isToursOpen)  {
                    createDropDownListWrapper ('drop-down__wrapper',
                        'drop-down-item',
                        'drop-down-title',
                        dataDropDown.tours,
                        el
                    )
                    isToursOpen = true
                }else {
                    removeElement(isToursOpen, el)
                }
            }
        })
     })

 document.addEventListener('mousemove', (event) => {
        if (isCountriesOpen || isToursOpen) {
            const headerWrapper = document.querySelector('.header__wrapper');

            // Проверяем, что мышка не над элементами навигации и дропдауном
            if (
                !Array.from(getNavElements).includes(event.target) &&
                !(dropDownEl && dropDownEl.contains(event.target)) &&
                !headerWrapper.contains(event.target)
            ) {
                // Закрываем дропдаун и сбрасываем флаги
                if (isCountriesOpen) {
                    dropDownEl.remove();
                    isCountriesOpen = false;
                }
                if (isToursOpen) {
                    dropDownEl.remove();
                    isToursOpen = false;
                }
            }
        }
    });



*/