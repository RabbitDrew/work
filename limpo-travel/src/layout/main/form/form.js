import './form.css'
import elementCreator from '../../../global/create_el'
import elementRendering from '../../../global/render_el'

const dataFormListContent = {

    inputLabels: [
        'Страна отдыха:',
        'Вылет из:',
        'Вылет c:',
        'Дней отдыха:',
        'Количество взрослых:',
        'Количество детей:',
        'Категория отеля:',
        'Питание:',
        'Ваше имя:',
        'Ваш e-mail:',
        'Ваш телефон:',
    ],
    inputPlaceholder: [
        'Выбрать страну',
        'Выбрать место вылета',
        'Выбрать дату вылета',
        'Укажите кол-во дней отдыха',
        'Укажите кол-во взрослых',
        'Укажите кол-во детей',
        'Выберете категорию отеля',
        'Выберите тип питания',
        'Укажите Ваше имя',
        'Укажите Ваш e-mail',
        'Укажите Ваш телефон'
    ], 
    inputId: [
        'country',
        'departure',
        'departure-time',
        'days',
        'adults',
        'children',
        'category',
        'food',
        'name',
        'e-mail',
        'phone'
    ]

}


const  createFormSection = () => {
    const formSection = elementCreator('section', 'main-form')
    const formWrapper = createFormWrapper ()
    elementRendering(formSection, formWrapper)
    return formSection
}
const createFormWrapper = () => {
    const formWrapper = elementCreator('div', 'form__wrapper')
    const formTitleWrapper = createFormTitleWrapper ()
    elementRendering(formWrapper, formTitleWrapper)
    const formInputsWrapper = createFormInputsWrapper()
    elementRendering(formWrapper, formInputsWrapper)
    return formWrapper
}
// create form title
const createFormTitleWrapper = () => {
    const element = elementCreator('div', 'form-title__wrapper')
    const formTitle = createFormTitle ()
    elementRendering(element, formTitle)
    const formSubtitle = createFormSubtitle ()
    elementRendering (element, formSubtitle)
    return element
}

const createFormTitle = () => {
    const element = elementCreator('h2', 'form-title')
    element.textContent = 'Хотите подобрать тур?'
    return element
}

const createFormSubtitle = () => {
    const element = elementCreator('h2', 'form-subtitle')
    element.textContent = 'Лучшие предложения по оптимальным ценам'
    return element
}


// form block
const createFormInputsWrapper = () => { //create main wrapper for rows and background
    const formInputsWrapper = elementCreator('div', 'form-inputs__wrapper')
    //inputs and btn
    const inputsRows = createInputsRows(3) // call rows creater and pass amount of rows
    inputsRows.forEach(row => {
        elementRendering (formInputsWrapper, row)
    })
    //warning block
    const warningWrapper = creatWarningWrapper()
    elementRendering (formInputsWrapper, warningWrapper)
    return formInputsWrapper
}
// create rows
const createInputsRows = (rowsAmount) => {
     let arrOfRows = []
     let elementsAmount = 0 // init vereable to chose amount of elemnts in every row
     const labels = createLabels () // call function to create labels 
     const inputs = createInputs ()// call function to create inputs 
     let inputIndex = 0 // index to iterates inputs and labels (labels[inputIndex], inputs[inputIndex])
     for (let i = 0; i < rowsAmount; i++) { // loop to create rows
        const createRow = elementCreator('div','inputs-row')
        arrOfRows.push(createRow)
     }

     arrOfRows.forEach((row, i) => { // iterate rows to create wrapers for input and labels
        if (i < 2) { // check condition to control amount of wrappers for inputs and labels
            elementsAmount = 4  
        }else {
            elementsAmount = 3
        }
        
        for (let j = 0; j < elementsAmount; j++) { // loop to create wrappers for inputs and labels
            const createInputWrapper = elementCreator('div', 'row-input__wrapper')
                elementRendering(row, createInputWrapper) // add in every row wrappers 
                elementRendering(createInputWrapper, labels[inputIndex]); // add in wrappers lables 
                elementRendering(createInputWrapper, inputs[inputIndex]); //add in wrappers inputs
            inputIndex++
        }
     })
     //add in the last block btn wrapper in the last row
     const rowInput = arrOfRows[arrOfRows.length-1] //get the last row
     const submitBtn = createSubmitBtnWrapper() //call func that creates btn
     elementRendering(rowInput, submitBtn)//add btn in the last row

     return arrOfRows
}


const createLabels = () => {
    const labels = [];
    dataFormListContent.inputLabels.forEach((content, i) => {
        const createLabelElement = elementCreator('label', 'input-label'); 
        createLabelElement.textContent = content;
        createLabelElement.htmlFor = dataFormListContent.inputId[i]; 
        labels.push(createLabelElement); 
    });
    //add start to hilited important tips 
    const labelIndexes = [0, 2, 3, 4, 8, 10]
    labels.forEach((label, i) => {
        if (labelIndexes.includes(i)){
            const createSpanEl = elementCreator ('span', 'obligatory-field')
            createSpanEl.textContent ='*'
            elementRendering(label, createSpanEl)
        }
    })
    return labels; 
}

const createInputs = () => {
    const inputs = []
    dataFormListContent.inputId.forEach((id, i) => {
        const createInputElement = elementCreator('input', 'input-field')
              createInputElement.placeholder = dataFormListContent.inputPlaceholder[i]
              createInputElement.id = id
              createInputElement.autocomplete = 'off'
        inputs.push(createInputElement)
    })
    //add readonly attribute to some inputs
    const readonlyIndexes = [0, 1, 2, 6, 7];
    inputs.forEach((input, i) => {
        if (readonlyIndexes.includes(i)) {
            input.readOnly = true; 
        }

        if (i === 10) {
            input.placeholder = '+375 (__) ___-__-__'
        }
    })
    return inputs
}
//submit btn  
const createSubmitBtnWrapper  = () =>  {
  const btnWrapper = elementCreator('div', 'input-btn__wrapper')
  const btn = createBtn ()
  elementRendering(btnWrapper, btn)
  const btnTitle = createBtnTitle () 
  elementRendering(btn, btnTitle)
  return btnWrapper
} 
const createBtn  = () => { 
    const element = elementCreator('div', 'input-btn')
    return element
}
const createBtnTitle = () => {
    const element = elementCreator('div', 'input-btn-title')
    element.textContent = 'Отправить'
    return element
}

//warining block
const creatWarningWrapper = () => {
    const wariningWrapper = elementCreator('div', 'input-warning__wrapper')
    const warningImportantTitleWrapper = createWarningImportantTitleWrapper ()
    elementRendering(wariningWrapper, warningImportantTitleWrapper)
    const description = createDescriptionWrapper ()
    elementRendering (wariningWrapper, description)
        
    return wariningWrapper
}
// title block
const createWarningImportantTitleWrapper = () => {
    const warningInmortantWrapper = elementCreator('div', 'warning-important-title__wrapper')
    const warnongImportantSighn = createWarningImportantSign ()
    elementRendering (warningInmortantWrapper, warnongImportantSighn)
    const warningTitle = createWarningImportan ()
    elementRendering (warningInmortantWrapper, warningTitle)
    return warningInmortantWrapper 
}


const createWarningImportantSign = () => {
    const element = elementCreator('h2', 'warning-important-title')
    element.textContent = '*'
    return element
}

const createWarningImportan = () => {
    const element = elementCreator ('h2', 'warning-important-title')
    element.textContent = '- Поля, обязательные для заполнения'
    return element
}
//description block
const createDescriptionWrapper = () => {
    const element = elementCreator ('p', 'warning-descriptio')
    element.textContent = `Опишите Ваши пожелания по туру и мы быстро подберем для Вас самые лучшие предложения. 
    Мы используем самые современные системы поиска и бронирования туров, и работаем с туроператорами напрямую. 
    Поэтому мы знаем где и как найти для Вас самые лучшие цены.`
    return element
}



export default createFormSection

