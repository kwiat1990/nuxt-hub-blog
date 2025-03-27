const WORDS_PER_MINUTE = 200;

export function calcReadTime(content = "") {
  const time = content.split(" ").length / WORDS_PER_MINUTE;
  return `${Math.round(time)} min`;
}
