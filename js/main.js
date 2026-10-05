import { createHeader } from "./components/header.js";
import { createMainHtml } from "./components/mainHtml.js";
import { createWinModal } from "./components/winModal.js";
import { createLeaderboardModal } from "./components/leaderboardModal.js";
import { handleBoardClick } from "./utils/handleBoardClick.js";
import { getResults, saveResult } from "./utils/leaderboard.js";

document.addEventListener("DOMContentLoaded", () => {
  const { element, handlers, reshuffleBoard } = createMainHtml();
  const header = createHeader();
  document.body.append(header, element);

  let winModal = null;

  const board = handleBoardClick({ ...handlers, onWin });

  function onWin(moves) {
    saveResult(moves);
    winModal = createWinModal({ moves, onNewGame: newGame });
    winModal.open();
  }

  function newGame() {
    board.reset();
    reshuffleBoard();
    handlers.onReset();
    winModal?.close();
    winModal = null;
  }

  function openLeaderboard() {
    createLeaderboardModal({ results: getResults() }).open();
  }

  header.querySelector("#newGame").addEventListener("click", newGame);
  header.querySelector("#leaderboard").addEventListener("click", openLeaderboard);
});
