import createInputOptionsWrapper from "../../layout/main/form/form-dropdowns"

//data for inputs
const optionsData = {
    countries:['Болгария', 'Греция', 'Египет', 'Испания', 'Кипр', 'ОАЭ', 'Тунис', 'Турция'], 
    cities:['Минск', 'Киев', 'Гомель', 'Москва'], 
    hotleCategory:['2-ух звёздочный отель', '3-ёх звёздочный отель', '4-ёх звёздочный отель', '5-и звёздочный отель',], 
    nutrition:['Всё включено', 'Завтрак и ужин', 'Только завтрак', 'Без питания', 'Завтрак, обед и ужин']
}


const createDropDownOptionLIst = function (arrOfIndexes, i) {
    let inputOptionsWrapper 
    const optionsArr = selectDropDownData(arrOfIndexes, i)
    inputOptionsWrapper = createInputOptionsWrapper(optionsArr)
    return inputOptionsWrapper
}

const selectDropDownData = (arrOfIndexes, i) => {
    let resultData
    const optionsKeyArr = Object.keys(optionsData)
    //looking for key with relevant data
    // getIndex offor right key  
    let indexOfElemnt = arrOfIndexes.indexOf(i)
    //get right key
    let key = optionsKeyArr[indexOfElemnt]
    //get right data with options
    resultData = optionsData[key]
    return resultData
}

export default createDropDownOptionLIst