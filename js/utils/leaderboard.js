const STORAGE_KEY = "memory-game-leaderboard";
const MAX_RESULTS = 10;

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}.${month}.${date.getFullYear()}`;
}

export function getResults() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveResult(moves) {
  const now = new Date();
  const results = [...getResults(), { moves, date: formatDate(now), playedAt: now.getTime() }];

  const top = results.sort((a, b) => a.moves - b.moves || a.playedAt - b.playedAt).slice(0, MAX_RESULTS);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(top));
}