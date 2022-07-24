export function getRandomNumber(from = 1, to = 10000): number {
  return Math.floor(Math.random() * (to - from)) + from;
}

export function getBool() {
  return getRandomNumber() % 2 === 0;
}
