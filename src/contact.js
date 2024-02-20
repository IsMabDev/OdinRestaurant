import { createHtmlElement } from "./golbalFunctions.js";
import { content } from "./index.js";

function renderContact() {
  const contactContainer = createHtmlElement("div", "contactContainer");
  const phone = createHtmlElement("p", null, ["fa-solid", "fa-phone"]);
  const phoneIcon = createHtmlElement("i", null, ["fa-solid", "fa-phone"]);
  phone.appendChild(phoneIcon);
  phone.innerText += "\t+(9999) 321 321 321";
  const resataurantMap = document.createElement("img");
  resataurantMap.src = "./images/a-restaurant-on-the-moon.jpg";
  contactContainer.appendChild(phone);
  contactContainer.appendChild(resataurantMap);
  content.appendChild(contactContainer);
}

export { renderContact as contact };
