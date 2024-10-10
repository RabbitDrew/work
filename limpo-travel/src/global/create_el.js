const elementCreator = (el, className)  => { 
    const element = document.createElement(el)
    element.className = className
    return element
}

export default elementCreator 