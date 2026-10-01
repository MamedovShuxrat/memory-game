import { createElement } from "../utils/dom.js";
export function createHeaderButtons() {
  const btnNewGame = createElement("button", { className: "btn btn--primary", text: "Новая игра", id: "newGame", attrs: { type: "button" } });
  const btnLeaderboard = createElement("button", { className: "btn", text: "Таблица лидеров", id: "leaderboard", attrs: { type: "button" } });
  return [btnNewGame, btnLeaderboard];
}
