import { createHtmlElement } from "./index.js";
import { content } from "./index.js";

function home() {
  const homeContainer = createHtmlElement("div", "homeContainer", null, null);
  const greetingsTitle = createHtmlElement(
    "h1",
    null,
    null,
    "Welcome to minzo's - Where Every Meal is a Culinary Journey"
  );
  const greetingsText = createHtmlElement(
    "p",
    null,
    ["texte"],
    `At minzo's, we believe in transforming dining into an experience, a moment to savor and remember. Nestled in the heart of the Moon, our culinary haven invites you to embark on a gastronomic adventure like no other.`
  );

  homeContainer.append(greetingsTitle, greetingsText);

  content.appendChild(homeContainer);
}

export { home };
