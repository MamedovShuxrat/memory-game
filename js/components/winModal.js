import { createElement } from "../utils/dom.js";
import { createModal } from "./createModal.js";

export function createWinModal({ moves, onNewGame }) {
  const modalTitle = createElement("h2", {
    className: "modal__title",
    attrs: { id: "modal-title" },
    text: "Победа!",
  });

  const modalBody = createElement(
    "div",
    { className: "modal__body" },
    createElement(
      "p",
      { className: "modal__text" },
      "Все пары найдены! Ходов: ",
      createElement("strong", { text: moves })
    )
  );

  return createModal(({ close, titleId }) => {
    modalTitle.id = titleId;

    const newGameBtn = createElement("button", {
      className: "btn btn--primary",
      text: "Новая игра",
      attrs: { type: "button" },
      onClick: () => {
        close();
        onNewGame?.();
      },
    });

    const closeBtn = createElement("button", {
      className: "btn",
      text: "Закрыть",
      attrs: { type: "button" },
      onClick: close,
    });

    const modalActions = createElement("div", { className: "modal__actions" }, newGameBtn, closeBtn);

    return [modalTitle, modalBody, modalActions];
  });
}