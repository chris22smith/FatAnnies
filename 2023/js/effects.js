// heading effect
const headingss = [...document.querySelectorAll("h1, h2, h3")];

function wrapCharsInSpans(text) {
  const chars = text.split("");
  const spans = chars.map((c) => `<span>${c}</span>`).join("");
  return spans;
}

headings.forEach((h) => {
  if (!h.querySelector("span")) {
    h.innerHTML = wrapCharsInSpans(h.textContent);
  }
});
