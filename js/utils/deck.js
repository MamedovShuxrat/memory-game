export function createDeck(cards) {
  return cards.flatMap((card) => [card, card]);
}
