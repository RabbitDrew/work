import clickhandlerDropDown from "./1_dropdown_clickhandler"

const inputIndexes = [0, 1, 6, 7]

const inputClickHandler = function () {
    const getInputsWrappers = document.querySelectorAll('.row-input__wrapper')
    getInputsWrappers.forEach((input, i) => {
        input.addEventListener('click', (event) => {
            clickhandlerDropDown()
        })
    })
}   




export default inputClickHandler