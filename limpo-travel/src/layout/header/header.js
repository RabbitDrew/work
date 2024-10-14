import "./header.css";
import "./header_dropdowns.css";
import mouseMoveHandler from "../../dynemic/toggle-dropdowns.js";
import elementCreator from "../../global/create_el";
import elementRendering from "../../global/render_el";
import page from "../body/page";

const headerElementsData = {
  addresLinks: [
    "https://maps.app.goo.gl/RfVjNmjfEJU8o2t37",
    "https://maps.app.goo.gl/8N1r9MZa9wGMxJQv7",
  ],
  addresTitles: [
    "г. Гомель, ул.Гагарина, 49",
    "г. Речица, ул. Советская, 134а",
  ],
  phoneLinks: ["tel:+375293566774", "tel:+375333586774"],
  phoneTitles: ["+375 29 359-67-74", "+375 33 358-67-74"],

  navTitles: [
    "Страны",
    "Туры",
    "Отзывы",
    "Ранее Бронирование",
    "Визы",
    "Контакты",
  ],
};

//create header block
const createHeader = () => {
  const header = elementCreator("header", "page-header");
  const addresWrapper = createHeaderContactsWrapper();
  elementRendering(header, addresWrapper);
  const logoAndNavWrapper = createHeaderLogoAndNavBlock();
  elementRendering(header, logoAndNavWrapper);
  return header;
};

// contacts and address section
const createHeaderContactsWrapper = () => {
  const headerContactWrapper = elementCreator("section", "header-contacts");
  const addressWrapper = createAddresWrapper("contacts-addreses__wrapper", 2);
  elementRendering(headerContactWrapper, addressWrapper);
  const phoneWrapper = createPhoneWrapper("contacts-phones__wrapper", 2);
  elementRendering(headerContactWrapper, phoneWrapper);
  const callbackBtn = callBackPhoneWrapper();
  elementRendering(headerContactWrapper, callbackBtn);
  return headerContactWrapper;
};
// address
const createAddresWrapper = (className, amountChieldElements) => {
  const addressWrapper = elementCreator("ul", className);
  for (let i = 0; i < amountChieldElements; i++) {
    const addresItem = createAddresAndPhoneItem("addreses-item");
    elementRendering(addressWrapper, addresItem);
    const mapMarkerSvg = createSvgAddres();
    elementRendering(addresItem, mapMarkerSvg);
    const addresLink = createAddresLink("addres");
    addresLink.href = `${headerElementsData.addresLinks[i]}`;
    addresLink.textContent = `${headerElementsData.addresTitles[i]}`;
    elementRendering(addresItem, addresLink);
  }
  return addressWrapper;
};
//phones
const createPhoneWrapper = (className, amountChieldElements) => {
  const phoneWrapper = elementCreator("ul", className);
  for (let i = 0; i < amountChieldElements; i++) {
    const phoneItem = createAddresAndPhoneItem("phones-item");
    elementRendering(phoneWrapper, phoneItem);
    const phoneSvg = createSvgPhone();
    elementRendering(phoneItem, phoneSvg);
    const phoneLink = createAddresLink("phone");
    phoneLink.href = `${headerElementsData.phoneLinks[i]}`;
    phoneLink.textContent = `${headerElementsData.phoneTitles[i]}`;
    elementRendering(phoneItem, phoneLink);
  }
  return phoneWrapper;
};

const createAddresAndPhoneItem = (className) => {
  const element = elementCreator("li", className);
  return element;
};
//addres svg
const createSvgAddres = () => {
  const elementSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  elementSvg.setAttribute("width", "20px");
  elementSvg.setAttribute("height", "20px");
  elementSvg.setAttribute("viewBox", "0 0 24 24");
  elementSvg.setAttribute("fill", "none");
  const elementPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  elementPath.setAttribute("fill", "#e3e3e3");
  elementPath.setAttribute("fill-rule", "evenodd");
  elementPath.setAttribute(
    "d",
    "M11.291 21.706L12 21l-.709.706zM12 21l.708.706a1 1 0 0 1-1.417 0l-.006-.007-.017-.017-.062-.063a47.708 47.708 0 0 1-1.04-1.106 49.562 49.562 0 0 1-2.456-2.908c-.892-1.15-1.804-2.45-2.497-3.734C4.535 12.612 4 11.248 4 10c0-4.539 3.592-8 8-8 4.408 0 8 3.461 8 8 0 1.248-.535 2.612-1.213 3.87-.693 1.286-1.604 2.585-2.497 3.735a49.583 49.583 0 0 1-3.496 4.014l-.062.063-.017.017-.006.006L12 21zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
  );
  elementPath.setAttribute("clip-rule", "evenodd");
  elementSvg.appendChild(elementPath);
  return elementSvg;
};
//phone svg
const createSvgPhone = () => {
  const elementSvg = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  elementSvg.setAttribute("version", "1.0");
  elementSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  elementSvg.setAttribute("width", "18px");
  elementSvg.setAttribute("height", "18px");
  elementSvg.setAttribute("viewBox", "0 0 997.000000 1280.000000");
  elementSvg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  const elementG = document.createElementNS("http://www.w3.org/2000/svg", "g");
  elementG.setAttribute(
    "transform",
    "translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
  );
  elementG.setAttribute("fill", "#e3e3e3");
  elementG.setAttribute("stroke", "none");
  const pathData = [
    "M3045 12782 c-27 -10 -230 -122 -450 -248 -220 -127 -506 -291 -635 -364 -301 -171 -350 -219 -382 -374 -23 -106 -15 -124 273 -615 480 -820 1464 -2453 1505 -2500 54 -59 132 -106 213 -127 113 -28 117 -27 650 279 262 151 553 318 648 371 236 134 298 204 325 370 21 129 12 151 -211 521 -1045 1729 -1554 2566 -1580 2597 -73 87 -245 131 -356 90z",
    "M1193 11440 c-530 -152 -892 -537 -1069 -1139 -285 -967 -66 -2490 601 -4181 675 -1710 1696 -3334 2810 -4469 954 -971 1864 -1506 2775 -1632 127 -18 508 -18 625 -1 218 33 412 85 604 161 86 35 177 76 189 86 5 4 -872 1531 -975 1695 -105 168 -311 504 -630 1030 -170 279 -140 257 -293 219 -128 -31 -394 -34 -545 -5 -331 61 -711 251 -1050 523 -139 111 -397 363 -527 513 -197 228 -397 506 -563 785 -101 170 -151 270 -218 440 -168 426 -272 819 -323 1220 -25 198 -23 540 5 722 53 353 178 647 377 890 30 36 52 68 50 72 -2 3 -56 95 -120 204 -168 286 -414 732 -816 1477 -492 914 -776 1420 -795 1419 -5 0 -56 -13 -112 -29z",
    "M7690 4686 c-19 -8 -237 -130 -485 -273 -247 -143 -533 -306 -635 -363 -199 -113 -268 -169 -308 -251 -51 -105 -48 -215 7 -313 701 -1244 1679 -2927 1734 -2984 18 -18 61 -48 97 -65 59 -29 73 -32 160 -32 l96 0 159 92 c88 50 385 220 660 377 275 158 512 299 528 314 41 38 76 95 98 160 22 63 26 199 7 253 -6 19 -100 185 -208 369 -109 184 -403 688 -655 1120 -656 1125 -854 1460 -887 1502 -18 23 -55 50 -96 70 -57 28 -78 33 -152 35 -53 2 -98 -3 -120 -11z",
  ];
  pathData.forEach((d) => {
    const elementPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    elementPath.setAttribute("d", d);
    elementG.appendChild(elementPath);
  });
  elementSvg.appendChild(elementG);
  return elementSvg;
};

const createAddresLink = (className) => {
  const element = elementCreator("a", className);
  element.type = "addres";
  return element;
};

//callback btn
const callBackPhoneWrapper = () => {
  const callBackPhoneWrapperBtn = elementCreator("div", "phones-call__back");
  const btn = callBackBtn();
  elementRendering(callBackPhoneWrapperBtn, btn);
  const btnTitle = callBackBtnTitle();
  btnTitle.textContent = "Заказать обратный звонок";
  elementRendering(btn, btnTitle);
  return callBackPhoneWrapperBtn;
};

const callBackBtn = () => {
  const element = elementCreator("div", "call-back__btn");
  return element;
};

const callBackBtnTitle = () => {
  const element = elementCreator("h2", "call-back-title");
  return element;
};


/* header logo and nav block*/
const createHeaderLogoAndNavBlock = () => {
  const headerLogoAndNav = elementCreator("section", "header__wrapper");
  const logoWrapper = crateLogoWrapper();
  elementRendering(headerLogoAndNav, logoWrapper);
  const logoImg = createLogoImg();
  elementRendering(logoWrapper, logoImg);
  const navWrapper = createNavWrapper();
  elementRendering(headerLogoAndNav, navWrapper);
  for (let i = 0; i < headerElementsData.navTitles.length; i++) {
    const navItem = createNavItems ()
    elementRendering(navWrapper, navItem)
    const navLinks = createItemsLinks ()
          navLinks.textContent = headerElementsData.navTitles[i]
    elementRendering(navItem, navLinks)
  }
  return headerLogoAndNav;
};

//logo
const crateLogoWrapper = () => {
  const element = elementCreator("a", "header-logo");
  element.href = "./main.html";
  return element;
};
const createLogoImg = () => {
  const element = elementCreator("img", "");
  element.src = "./assets/header_img/Logo-without-title.png";
  element.alt = "logo";
  return element;
};
//navigation block
const createNavWrapper = () => {
  const element = elementCreator("ul", "header-nav");
  return element;
};

const createNavItems = () => {
  const element = elementCreator("li", "nav-item");
  return element;
};

const createItemsLinks = () => {
  const element = elementCreator("h2", "item-title");
  return element;
};

//render header
const header = function () {
  const headerSection = createHeader();
  elementRendering(page, headerSection);
};

//header();
//mouseMoveHandler ()