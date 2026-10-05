import { createElement } from "../utils/dom.js";
import { CARDS } from "../../assets/data/cardsData.js";

function createStat(label, value) {
  const labelEl = createElement("span", { className: "stat__label", text: label });
  const valueEl = createElement("span", { className: "stat__value", text: value });
  return {
    element: createElement("div", { className: "stat" }, labelEl, valueEl),
    valueEl,
  };
}

export function createStatWrapper() {
  let moves = 0;
  let pairs = 0;
  const totalPairs = CARDS.length;

  const movesStat = createStat("Ходы", moves);
  const pairsStat = createStat("Пары", `0 из ${totalPairs}`);

  function onMove() {
    moves += 1;
    movesStat.valueEl.textContent = moves;
  }

  function onMatch() {
    pairs += 1;
    pairsStat.valueEl.textContent = `${pairs} из ${totalPairs}`;
  }

  function onReset() {
    moves = 0;
    pairs = 0;
    movesStat.valueEl.textContent = moves;
    pairsStat.valueEl.textContent = `${pairs} из ${totalPairs}`;
  }
  return { element: createElement("div", { className: "stats__wrapper" }, movesStat.element, pairsStat.element), onMove, onMatch, onReset };
}
