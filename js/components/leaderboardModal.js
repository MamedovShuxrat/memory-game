import { createElement } from "../utils/dom.js";
import { createModal } from "./createModal.js";

function createRow(place, result) {
  return createElement("tr", {}, createElement("td", { text: place }), createElement("td", { text: result.moves }), createElement("td", { text: result.date }));
}

export function createLeaderboardModal({ results }) {
  return createModal(({ close, titleId }) => {
    const title = createElement("h2", { className: "modal__title", text: "Таблица лидеров" });
    title.id = titleId;

    const content = results.length
      ? createElement(
          "table",
          { className: "leaderboard" },
          createElement("thead", {}, createElement("tr", {}, createElement("th", { text: "Место" }), createElement("th", { text: "Ходы" }), createElement("th", { text: "Дата" }))),
          createElement("tbody", {}, ...results.map((result, index) => createRow(index + 1, result)))
        )
      : createElement("p", { className: "leaderboard__empty", text: "Пока нет результатов" });

    const modalBody = createElement("div", { className: "modal__body" }, content);

    const closeBtn = createElement("button", {
      className: "btn",
      text: "Закрыть",
      attrs: { type: "button" },
      onClick: close,
    });
    closeBtn.focus()

    return [title, modalBody, createElement("div", { className: "modal__actions" }, closeBtn)];
  });
}
