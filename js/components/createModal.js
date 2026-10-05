import { createElement } from "../utils/dom.js";

const TITLE_ID = "modal-title";

export function createModal(buildContent) {
  const modal = createElement("div", {
    className: "modal",
    attrs: { role: "dialog", "aria-modal": "true", "aria-labelledby": TITLE_ID },
  });
  const overlay = createElement("div", { className: "modal-overlay" }, modal);

  let previousOverflow = "";

  function onKeydown(e) {
    if (e.key === "Escape") close();
  }

  function onOverlayClick(e) {
    if (e.target === overlay) close();
  }

  function open() {
    previousOverflow = document.body.style.overflow;
    document.body.append(overlay);
    modal.querySelector("button")?.focus();
    overlay.addEventListener("click", onOverlayClick);
    document.addEventListener("keydown", onKeydown);
    document.body.style.overflow = "hidden";
  }

  function close() {
    if (!overlay.isConnected) return;

    overlay.remove();
    overlay.removeEventListener("click", onOverlayClick);
    document.removeEventListener("keydown", onKeydown);
    document.body.style.overflow = previousOverflow;
  }

  modal.append(...buildContent({ close, titleId: TITLE_ID }));

  return { open, close, element: overlay };
}
