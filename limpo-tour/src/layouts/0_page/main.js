import ElementCreator from "../../components/global/utils/0_element-creator";
class Main extends ElementCreator {
  constructor() {
    super();
    this.page = super.getParentElement(".page");
  }

  createMain() {
    const main = super.createElement("main", "page-main");
    super.renderElement(this.page, main);
  }
}

const main = new Main();
main.createMain();
