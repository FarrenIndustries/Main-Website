let body = document.getElementById("body01");
let colors = [
  "rgb(150, 0, 0)",
  "rgb(125, 125, 0)",
  "rgb(0, 150, 0)",
  "rgb(0, 0, 150)",
  "rgb(125, 0, 125)"
];
let currentIndex = 0;

setInterval(function() {
  body.style.backgroundColor = colors[currentIndex];
  if (!colors[currentIndex]) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
}, 500);
