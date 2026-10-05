export function shuffle(array) {
  let newArr = [...array];
  let m = newArr.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = newArr[m];
    newArr[m] = newArr[i];
    newArr[i] = t;
  }

  return newArr;
}
