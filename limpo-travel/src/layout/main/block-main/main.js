import "../../body/common.css";
import elementCreator from "../../../global/create_el";
import elementRendering from "../../../global/render_el";
import page from "../../body/page";

import createTitleSection from "../intro/intro";
import createFormSection from "../form/form";

const mainBlock = function () {
  const main = elementCreator("main", "page-main");
  elementRendering(page, main);
  // introSection
  const titleSection = createTitleSection() 
  elementRendering(main, titleSection)
  // form section
  const formSection = createFormSection()
  elementRendering(main, formSection)
};
mainBlock();
