let theme = localStorage.getItem("theme");
if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}
/* 
TODO: submit Form validation needed
TODO: Add Images of past works 
TODO: Add gallery of images in about me section
*/

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css";
  }
  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }
  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
  }
  if (mode == "purple") {
    document.getElementById("theme-style").href = "purple.css";
  }

  localStorage.setItem("theme", mode);
}

var year = new Date();

document.getElementById(
  "thisYear"
).innerHTML = `<div> © ${year.getFullYear()} </div>`;
