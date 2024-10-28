//inputs flags 
export const isInputOptionsOpen = {
    countries: false, 
    cities: false, 
    hotleCategory: false, 
    nutrition: false
}

export const toogleInputsFlags = function (arrOfindexes, i) {
    let inputFlag = getKey (arrOfindexes, i)
    for (let key in isInputOptionsOpen) {
        if (key === inputFlag) {
            if (!isInputOptionsOpen[key]) {
                isInputOptionsOpen[key]  = true 
            }else {
                isInputOptionsOpen[key]  = false 
            }
        }else {
            isInputOptionsOpen[key] = false
        }
    }

    console.log(isInputOptionsOpen)
}


const getKey = (arrOfIndexes, i) => {
    let key
    const optionsKeyArr = Object.keys(isInputOptionsOpen)
    let indexOfElemnt = arrOfIndexes.indexOf(i)
    key = optionsKeyArr[indexOfElemnt]
    return key
}

