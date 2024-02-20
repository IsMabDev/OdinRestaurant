import { content, body } from "./index.js";
import { createHtmlElement } from "./golbalFunctions.js";

function renderFooter() {
  const footerContainer = createHtmlElement("footer", "footerContainer", null);
  const copyright = createHtmlElement(
    "p",
    null,
    null,
    `Copyright © ${new Date().getFullYear()} IsMabDev `
  );
  const githubLink = createHtmlElement("a", null, null);
  githubLink.href = "https://github.com/IsMabDev/";

  const githubIcon = createHtmlElement("i", null, ["fab", "fa-github"]);

  githubLink.appendChild(githubIcon);
  footerContainer.append(copyright, githubLink);
  body.appendChild(footerContainer);
}

export { renderFooter };
