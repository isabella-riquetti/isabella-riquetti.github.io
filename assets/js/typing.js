

$(document).ready(async function () {
  carousel(".typing-roles");
  carousel(".typing-soon-projects");
});


async function carousel(elementClass) {
  var i = 0;
  const eleRef = `${elementClass} .type-text`;
  const carouselList = $(`${elementClass} .keywords`).text().split(',');
  while (true) {
    await typeSentence(carouselList[i], eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++
    if (i >= carouselList.length) { i = 0; }
  }
}

async function typeSentence(sentence, eleRef, delay = 150) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(25);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}