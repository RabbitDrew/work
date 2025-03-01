class ElementCreator {
  //create elements
  createElement(element, selectorName) {
    const createElement = document.createElement(element);
    createElement.className = selectorName;
    return createElement;
  }
  //render element 
  renderElement (parentElement, chieldElement) {
    parentElement.append(chieldElement)
  }

  // parent element getter
  getParentElement(element) {
    const elements = document.querySelectorAll(element);
    if (elements.length <= 0) {
      return null;
    } else if (elements.length === 1) {
      return elements[0];
    } else {
      return elements;
    }
  }

}


export default ElementCreator