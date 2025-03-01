const svgCreator = () => {
    const svgElements = [];
    const svgMap = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgMap.classList.add('contact-item-map-svg');
    svgMap.setAttribute('width', '25px');
    svgMap.setAttribute('height', '25px');
    svgMap.setAttribute('viewBox', '0 0 24 24');
    svgMap.setAttribute('fill', 'none');
    
    const pathMap = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathMap.setAttribute('d', 'M12 6H12.01M9 20L3 17V4L5 5M9 20L15 17M9 20V14M15 17L21 20V7L19 6M15 17V14M15 6.2C15 7.96731 13.5 9.4 12 11C10.5 9.4 9 7.96731 9 6.2C9 4.43269 10.3431 3 12 3C13.6569 3 15 4.43269 15 6.2Z');
    pathMap.setAttribute('stroke', '#000');
    pathMap.setAttribute('stroke-width', '1.3');
    pathMap.setAttribute('stroke-linecap', 'round');
    pathMap.setAttribute('stroke-linejoin', 'round');  
    svgMap.appendChild(pathMap);
    svgElements.push(svgMap);

    const svgPhone = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgPhone.classList.add('contact-item-phone-svg');
    svgPhone.setAttribute('fill', '#000');
    svgPhone.setAttribute('width', '25px');
    svgPhone.setAttribute('height', '25px');
    svgPhone.setAttribute('viewBox', '0 0 32 32');
    
    const pathPhone = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathPhone.setAttribute('d', 'M15.331 19.76c-0.026-0.018-3.034-5.075-3.044-5.14-0.622-1.359-1.124-2.749-0.078-3.366l-4.341-7.32c-1.125 0.841-4.307 5.405 1.649 15.748 6.274 10.9 12.245 10.447 13.442 9.709l-4.23-7.145c-1 0.588-1.842-0.381-3.398-2.486zM25.862 26.617l0.001-0.006c0 0-3.303-5.566-3.305-5.568-0.262-0.441-0.825-0.58-1.264-0.324l-2.024 1.197 4.242 7.166c0 0 2.024-1.191 2.023-1.195h0.004c0.465-0.276 0.572-0.846 0.323-1.27zM14.786 9.736v-0.004c0.465-0.275 0.574-0.845 0.325-1.265l0.002-0.006c0 0-3.398-5.729-3.4-5.73-0.261-0.443-0.826-0.58-1.263-0.324l-2.024 1.197 4.336 7.324c0 0 2.023-1.189 2.024-1.192z');
    pathPhone.setAttribute('stroke', '#000');
    pathPhone.setAttribute('stroke-width', '1.3');
    pathPhone.setAttribute('stroke-linecap', 'round');
    pathPhone.setAttribute('stroke-linejoin', 'round');
    svgPhone.appendChild(pathPhone);
    svgElements.push(svgPhone);
  
    return svgElements;
  }

export default svgCreator