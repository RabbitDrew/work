import "./style/intro.css";
import ElementCreator from "../../components/global/utils/0_element-creator.js";
import formUiDataInputs from "./0_1_form-ui-data.js";

class Intro extends ElementCreator {
  constructor(formUiDataInputs) {
    super();
    this.placeholderList = formUiDataInputs.placeholderList;
    this.main = super.getParentElement(".page-main");
  }

  createIntro() {
    const intro = super.createElement("section", "main-intro-form");
    const introTitle = this.createTitle()
    super.renderElement(intro, introTitle);
    const form = this.createForm(this.placeholderList)
    super.renderElement(intro, form)
    super.renderElement(this.main, intro);
  }

  createTitle() {
    const titleWrapper = super.createElement("div","intro-form-title__wrapper");
    const title = super.createElement("h1", "intro-form-title");
          title.textContent = "Турагентство";
    const titleSpan = super.createElement("span", "title-brand-name");
          titleSpan.textContent = 'ЛимпоТур'
    super.renderElement(title, titleSpan)
    super.renderElement(titleWrapper, title)
    const subtitle = super.createElement('h2', 'intro-form-subtitle')
          subtitle.textContent = 'Ваш идеальный отдых по лучшим ценам!'
    super.renderElement(titleWrapper, subtitle)
    return titleWrapper;
  }

  createForm (placeholderList) {
    const formWrapper = super.createElement('div', 'intro-form__wrapper')
    const formTitle = super.createElement('h2', 'intro-form__form-title')
          formTitle.textContent = 'Подобрать тур'
    super.renderElement(formWrapper, formTitle)
    const form = super.createElement('ul', 'intro-form')
    placeholderList.forEach((title, i) => {
      const formItem = super.createElement('li', 'intro-form-item')
      const input = super.createElement('input', 'intro-form-input')
            input.id = 'field-label'
            input.type = 'text'
            input.autocomplete = 'off'
            input.placeholder = title
      super.renderElement(formItem, input)
      const styleLine = super.createElement('div', 'input-style-line')
      super.renderElement(formItem, styleLine)
      super.renderElement(form, formItem)
    });
    //btn item
    const formBtnItem = super.createElement('li', 'intro-form-item')
    formBtnItem.classList.add('intro-form-item--btn__wrapper')
    const formBtn = super.createElement('div', 'intro-form-item__btn')
    super.renderElement(formBtnItem, formBtn)
    const btnTitle = super.createElement('h2', 'intro-form-input-item__title')
          btnTitle.textContent = 'Отправить'
    super.renderElement(formBtn, btnTitle)
    super.renderElement(form, formBtnItem)
    super.renderElement(formWrapper, form)
    return formWrapper
  }
}

const intro = new Intro(formUiDataInputs);
intro.createIntro();
