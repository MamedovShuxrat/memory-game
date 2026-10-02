import { createElement } from "../utils/dom.js";
export function createHeaderButtons() {
  const btnNewGame = createElement("button", { className: "btn btn--primary", text: "Новая игра", attrs: { id: "newGame", type: "button" } });
  const btnLeaderboard = createElement("button", { className: "btn", text: "Таблица лидеров", attrs: { id: "leaderboard", type: "button" } });
  return [btnNewGame, btnLeaderboard];
}
