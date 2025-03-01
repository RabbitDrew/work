import "./style/header.css";
import ElementCreator from "../../components/global/utils/0_element-creator";
import listItesData from "../../components/global/data/0_list-item-data";
import svgCreator from "./svg-creator";

class Header extends ElementCreator {
    constructor (listItemsData, svgCreator) {
      super()
      this.page = super.getParentElement(".page");
      this.listItemsTitles = listItemsData.navItemsTitles //titles 
      this.svgList = svgCreator() // svg element
      console.log(this.svgList)
    }
  // create main header block
  createHeader() {
    const header = super.createElement("header", "page-header");
    const headerLogo = this.headerLogo()
          super.renderElement(header, headerLogo)
    const headerNav = this.headerNav(this.listItemsTitles)
          super.renderElement(header, headerNav)
    const headerContacts = this.headerContacts(this.svgList)
          super.renderElement(header, headerContacts)
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
  headerContacts (svgList) {
    const headerContacts = super.createElement('ul', 'header-contacts')
    svgList.forEach(svg => {
      const contactsItem = super.createElement('li', 'contacts-item')
      super.renderElement(contactsItem, svg)
      super.renderElement(headerContacts, contactsItem)
    })
    return headerContacts
  }

}

const header = new Header(listItesData, svgCreator)
header.createHeader()
