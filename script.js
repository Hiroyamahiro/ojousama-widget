const quotes = [
  "一歩進んだだけでも、あなた様はとっても立派ですわ。",
  "たとえ小さなことでも、続けられるのは才能ですのよ。",
  "焦らず、でも止まらず──その歩みが美しいですわ。",
  "やるべきことに向き合う姿、わたくし見ておりますわ。",
  // …（続きは省略しますが、50件すべて入れてくださいませ）
];

function getQuoteIndexByDate() {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  return seed % quotes.length;
}

window.addEventListener("DOMContentLoaded", () => {
  const quoteBox = document.getElementById("ojousama-quote");
  const index = getQuoteIndexByDate();
  quoteBox.textContent = quotes[index];
});
