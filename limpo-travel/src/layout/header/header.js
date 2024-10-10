import './header.css'
import elementCreator from "../../global/create_el";
import elementRendering from "../../global/render_el";
import page from "../body/page";



//create header block
const createHeader = () => {
     const header = elementCreator('header', 'page-header')
     return header
}

// contacts and address section 
const createContactsWrapper = () => {

}

//logo block
const createlogoBlock =  () => {
    const logoWrapper = elementCreator('div', 'header-logo__wrapper')
    const logoImage = elementCreator ('img', 'logo-img')
          logoImage.src = '../../assets/Logo-without-title.png'
          logoImage.alt = 'logo'
    elementRendering(logoWrapper, logoImage)
    return logoWrapper
}

//navigation wrapper
const createNavWrapper = () => {

}

//render header
const header = function () {
    const headerSection = createHeader()
    elementRendering (page, headerSection)
    const logo = createlogoBlock ()
    elementRendering (headerSection, logo)
}

//header ()