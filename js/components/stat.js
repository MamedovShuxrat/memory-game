import { createElement } from "../utils/dom.js";

function createStat(label, value) {
  const labelEl = createElement("span", { className: "stat__label", text: label });
  const valueEl = createElement("span", { className: "stat__value", text: value });
  return createElement("div", { className: "stat" }, labelEl, valueEl);
}
export function createStatWrapper() {
  const movesStat = createStat("Ходы", 0);
  const pairsStat = createStat("Пары", "0 из 8");
  return createElement("div", { className: "stats__wrapper" }, movesStat, pairsStat);
}
