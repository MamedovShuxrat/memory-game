import { createElement } from "../utils/dom.js";
import { createHeaderButtons } from "./btn.js";

export function createHeader() {
  const h1 = createElement("h1", { className: "header__title", text: "Космо-мемори" });
  const headerActions = createElement("div", { className: "header__actions" }, ...createHeaderButtons());
  return createElement("header", { className: "header" }, h1, headerActions);
}
