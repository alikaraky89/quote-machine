"use strict";

let dataGlobal;

const getData = async () => {
  const response = await fetch("https://type.fit/api/quotes");
  const data = await response.json();
  dataGlobal = data;
  return data;
};

(async () => {
  await getData();
  console.log(dataGlobal);
})();

const container = document.getElementById("container-dev");
const btn = document.getElementById("btn-quote");
const twitterIcon = document.getElementById("twitter-icon");
const backround = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("qoute-author");
const twitterLink = document.getElementById("twitter-link");

document.querySelector("#btn-quote").addEventListener("click", function () {
  let randCol1 = backround[Math.floor(Math.random() * backround.length)];
  let randCol2 = backround[Math.floor(Math.random() * backround.length)];
  let randCol3 = backround[Math.floor(Math.random() * backround.length)];
  let randCol4 = backround[Math.floor(Math.random() * backround.length)];
  let randCol5 = backround[Math.floor(Math.random() * backround.length)];
  let randCol6 = backround[Math.floor(Math.random() * backround.length)];

  let randQuote = Math.floor(Math.random() * dataGlobal.length);
  console.log("heyyyyyyyyyyyy :" + randQuote);
  let randomColor =
    "#" + randCol1 + randCol2 + randCol3 + randCol4 + randCol5 + randCol6;
  let randomColor2 =
    "#" + randCol6 + randCol5 + randCol4 + randCol3 + randCol2 + randCol1;
  const linear =
    "linear-gradient(to right bottom, " +
    randomColor +
    ", " +
    randomColor2 +
    ")";

  //changing background color
  container.style.background = linear;
  btn.style.background = linear;
  twitterIcon.style.color = randomColor;
  quoteText.style.color = randomColor;
  quoteAuthor.style.color = randomColor;

  //changing text content
  quoteText.textContent = dataGlobal[randQuote].text;
  quoteAuthor.textContent = dataGlobal[randQuote].author;
});

twitterIcon.addEventListener("click", function () {
  twitterLink.setAttribute(
    "href",
    // %0D%0A this to break line !important
    `https://twitter.com/intent/tweet?text=${quoteText.textContent}&text=%0D%0A&text=${quoteAuthor.textContent}`
  );
});
