import { createElement } from "../utils/dom.js";
import { createCard } from "./card.js";

export function createBoard(deck) {
  const cards = deck.map((item) => {
    return createCard(item);
  });

  return createElement("div", { className: "board", attrs: { id: "board" } }, ...cards);
}
