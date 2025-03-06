import "./style/header.css";
import Header from "./header";
//AdoptMenu extends Header and then Header  extends elementCreator
class AdoptMenu extends Header {
  constructor() {
    super(listItemsData, svgCreator);
    this.header = super.getParentElement(".page-header");
  }

  headerAdoptMenu() {
    const adoptNavWrapper = super.createElement("div","page-header-adopt__nav__wrapper");
    const headerAdoptNav = this.adoptNav(this.titleList);
          super.renderElement(adoptNavWrapper, headerAdoptNav);
    const headerAdoptContacts = super.headerContacts(this.svgList, "header-adopt-contacts");
          super.renderElement(adoptNavWrapper, headerAdoptContacts);
    super.renderElement(this.header, adoptNavWrapper);
  }

  adoptNav(listTitles) {
    const adoptNav = super.createElement("ul", "header-adopt-nav");
    listTitles.forEach((title) => {
      const listItem = super.createElement("li", "adopt-nav-item");
      const listItemTitle = super.createElement("h2", "item-link");
      listItemTitle.textContent = title;
            super.renderElement(listItem, listItemTitle);
     super.renderElement(adoptNav, listItem);
    });
    return adoptNav;
  }
}

export default AdoptMenu;
