import { createElement } from "../utils/dom.js";
import { createStatWrapper } from "./stat.js";
import { createBoard, renderBoard } from "./board.js";
import { CARDS } from "../../assets/data/cardsData.js";
import { createDeck } from "../utils/deck.js";
import { shuffle } from "../utils/shuffle.js";

export function createMainHtml() {
  const deck = shuffle(createDeck(CARDS));
  const board = createBoard(deck);

  const { element: statsElement, onMove, onMatch, onReset } = createStatWrapper();
  const main = createElement("main", { className: "main" }, createElement("section", { className: "stats" }, statsElement, board));

  function reshuffleBoard() {
    renderBoard(board, shuffle(createDeck(CARDS)));
  }
  return { element: main, handlers: { onMove, onMatch, onReset }, reshuffleBoard };
}
