import { createElement } from "../utils/dom.js";

export function createCard(cardData) {
  const back = createElement("div", { className: "card__face card__face--back" });
  const front = createElement("div", { className: "card__face card__face--front" }, createImage(cardData.image, cardData.alt));
  const cardInner = createElement("div", { className: "card__inner" }, back, front);
  const card = createElement("button", { className: "card card--flipped", attrs: { type: "button", "data-id": cardData.id } }, cardInner);
  return card;
}

function createImage(src, alt) {
  return createElement("img", { className: "card__image", attrs: { alt, src } });
}
