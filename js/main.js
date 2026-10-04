import { createHeader } from "./components/header.js";
import { createMainHtml } from "./components/mainHtml.js";
import { handleBoardClick } from "./utils/handleBoardClick.js";

document.addEventListener("DOMContentLoaded", () => {
  document.body.append(createHeader());
  document.body.append(createMainHtml());
  handleBoardClick();
});
