import { MIN_COLOR, MAX_COLOR } from "./settings";

// Максимум и минимум включаются
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

export function getRandomColor() {
  const colorNumber = getRandomIntInclusive(MIN_COLOR, MAX_COLOR);
  return '#' + String(colorNumber.toString(16));
}