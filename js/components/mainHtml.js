import { createElement } from "../utils/dom.js";
import { createStatWrapper } from "./stat.js";
export function createMainHtml() {
  const main = createElement("main", { className: "main" }, createElement("section", { className: "stats" }, createStatWrapper()));
  return main;
}
