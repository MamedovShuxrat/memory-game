export function handleBoardClick() {
  const board = document.querySelector("#board");
  let firstCard = null;
  let isBlocked = false;

  board.addEventListener("click", function (e) {
    const card = e.target.closest(".card");
    if (!card) return;
    if (isBlocked) return;
    if (card.classList.contains("card--flipped")) return;

    card.classList.add("card--flipped");

    if (!firstCard) {
      firstCard = card;
      return;
    }

    if (card.dataset.id === firstCard.dataset.id) {
      card.classList.add("card--matched");
      firstCard.classList.add("card--matched");
      firstCard = null;
      return;
    }

    isBlocked = true;

    setTimeout(() => {
      card.classList.remove("card--flipped");
      firstCard.classList.remove("card--flipped");
      firstCard = null;
      isBlocked = false;
    }, 700);
  });
}
