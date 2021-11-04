function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "CSS/default.css";
  }
}

var year = new Date();

document.getElementById(
  "thisYear"
).innerHTML = `<div> <strong>©</strong> ${year.getFullYear()} Carrot Person</div>`;
