import "./style/header.css";
import ElementCreator from "../../components/global/utils/0_element-creator";
import listItemsData from "./0_1_list-header-item-data";
import svgCreator from "./0_2_svg-creator";

class Header extends ElementCreator {
    constructor (listItemsData, svgCreator) {
      super()
      this.page = super.getParentElement(".page");
      this.titleList = listItemsData.navItemsTitles //titles 
      this.svgList = svgCreator() // svg element
    }
  // create main header block
  createHeader() {
    const header = super.createElement("header", "page-header");
    const headerLogo = this.headerLogo()
          super.renderElement(header, headerLogo)
    const headerNav = this.headerNav(this.titleList)
          super.renderElement(header, headerNav)
    const headerContacts = this.headerContacts(this.svgList, 'header-contacts')
          super.renderElement(header, headerContacts)
    const headerAdoptMenuBtn = this.headerAdoptMenuBtn()
          super.renderElement(header, headerAdoptMenuBtn)
    super.renderElement(this.page, header)
  }
  // header logo block
  headerLogo() {
    const headerLogo = super.createElement('div', 'header-logo__wrapper')
    const logoLink = super.createElement('a', 'logo-link')
          logoLink.href = 'main.html'
    super.renderElement(headerLogo, logoLink)
    const logoLinkImg = super.createElement('img','logo-link-img')
          logoLinkImg.src = './assets/logo/Logo-without-title.png' 
          logoLinkImg.alt = 'logo'
    super.renderElement(logoLink, logoLinkImg)
    return headerLogo
  }
  // header nav
  headerNav (listTitles) {
    const navWrapper = super.createElement('div', 'page-header__wrapper')
    const nav = super.createElement('ul', 'header-nav')
    super.renderElement(navWrapper, nav)
    
    listTitles.forEach(title => {
      const navItem = super.createElement('li', 'nav-item')
      const navTitle = super.createElement('h2', 'item-link') 
            navTitle.textContent = title
      super.renderElement(navItem, navTitle)
      super.renderElement(nav, navItem)
    });
    return navWrapper
  }
  //header contacts
  headerContacts (svgList, className) {
    const headerContacts = super.createElement('ul', className)
    svgList.forEach(svg => {
      const contactsItem = super.createElement('li', 'contacts-item')
      super.renderElement(contactsItem, svg)
      super.renderElement(headerContacts, contactsItem)
    })
    return headerContacts
  }
  //header adopt menu btn
  headerAdoptMenuBtn () {
    const clasessArr = [
      'modal-btn-line line-one--rotate line-one--rotate-reset', 
      "modal-btn-line line-two--hide line-two--show",
      "modal-btn-line line-three--rotate  line-three--rotate-reset"
    ]
    const btnWrapper = super.createElement('div', 'page-header-modal-btn__wrapper')
    const btn = super.createElement('ul', 'modal-btn__wrapper')
    clasessArr.forEach(selectorName => {
      const line = super.createElement('li', selectorName)
            super.renderElement(btn, line)
    })
          super.renderElement(btnWrapper, btn)
    return btnWrapper
  }

}

const header = new Header(listItemsData, svgCreator)
header.createHeader()
export default Header

