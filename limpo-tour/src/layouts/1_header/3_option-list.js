import ElementCreator from "../../components/global/utils/0_element-creator";

class OptionList extends ElementCreator {
  constructor(optionListTitles) {
    super();
    this.titleList = optionListTitles;
  }
  optionList(optionListTitles) {
    const optionList = super.createElement("ul", "option-list");
    optionListTitles.forEach((title) => {
      const optionItem = super.createElement("li", "option-item");
      const optionListTitle = super.createElement("h2", "option-item-title");
      optionListTitle.textContent = title;
      super.renderElement(optionItem, optionListTitle);
      super.renderElement(optionList, optionItem);
    });
  }
}



export default OptionList