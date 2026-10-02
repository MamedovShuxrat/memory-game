import { createElement } from "../utils/dom.js";
import { createStatWrapper } from "./stat.js";
import { createBoard } from "./board.js";
import { CARDS } from "../../assets/data/cardsData.js";
import { createDeck } from "../utils/deck.js";
import { shuffle } from "../utils/shuffle.js";

export function createMainHtml() {
  const deck = shuffle(createDeck(CARDS));
  const main = createElement("main", { className: "main" }, createElement("section", { className: "stats" }, createStatWrapper(), createBoard(deck)));
  return main;
}
