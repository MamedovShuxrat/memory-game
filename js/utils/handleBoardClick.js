import { CARDS } from "../../assets/data/cardsData.js";

const TOTAL_PAIRS = CARDS.length;
const FLIP_BACK_DELAY = 800;

export function handleBoardClick({ onMove, onMatch, onWin } = {}) {
  const board = document.querySelector("#board");
  let firstCard = null;
  let isBlocked = false;
  let isFinished = false;
  let timerId = null;
  let moves = 0;
  let pairs = 0;

  function cancelTimer() {
    clearTimeout(timerId);
    timerId = null;
  }

  function reset() {
    cancelTimer();
    firstCard = null;
    isBlocked = false;
    isFinished = false;
    moves = 0;
    pairs = 0;
  }

  board.addEventListener("click", function (e) {
    const card = e.target.closest(".card");
    if (!card) return;
    if (isBlocked) return;
    if (isFinished) return;
    if (card.classList.contains("card--flipped")) return;

    card.classList.add("card--flipped");

    if (!firstCard) {
      firstCard = card;
      return;
    }

    moves += 1;
    onMove?.();

    if (card.dataset.id === firstCard.dataset.id) {
      card.classList.add("card--matched");
      firstCard.classList.add("card--matched");
      firstCard = null;

      pairs += 1;
      onMatch?.();

      if (pairs === TOTAL_PAIRS) {
        isFinished = true;
        isBlocked = true;
        onWin?.(moves);
      }
      return;
    }

    isBlocked = true;

    timerId = setTimeout(() => {
      card.classList.remove("card--flipped");
      firstCard.classList.remove("card--flipped");
      firstCard = null;
      isBlocked = false;
      timerId = null;
    }, FLIP_BACK_DELAY);
  });

  return { reset };
}
