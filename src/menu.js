import { content } from "./index.js";
import { data } from "./data.js";
import { createHtmlElement } from "./golbalFunctions.js";

function renderMenu() {
  const menuCategories = ["starter", "main course", "dessert"];
  const menuContainer = createHtmlElement("div", "menu", null, null);
  menuCategories.forEach((category) => {
    const categoryContainer = createHtmlElement("div", null, ["menuCategory"]);
    const categoryTitle = createHtmlElement("h1", null, null, category);
    categoryContainer.appendChild(categoryTitle);
    data.forEach((item) => {
      const menuItem = createHtmlElement("div", null, ["menuItem"]);
      const titleImage = createHtmlElement("div", null, ["titleImage"]);
      const itemTitle = createHtmlElement("h2", null, null, item[1]);
      const itemImage = document.createElement("img");
      itemImage.src = item[3];
      itemImage.alt = item[0];
      const itemDescription = createHtmlElement("p", null, null, item[4]);
      const itemPrice = createHtmlElement("p", null, null, `(${item[2]} $)`);
      itemTitle.appendChild(itemPrice);
      titleImage.appendChild(itemTitle);
      titleImage.appendChild(itemImage);
      menuItem.appendChild(titleImage);
      menuItem.appendChild(itemDescription);
      if (item[0] === category) {
        categoryContainer.appendChild(menuItem);
      }
    });
    menuContainer.appendChild(categoryContainer);
  });
  content.appendChild(menuContainer);
}

export { renderMenu as menu };
