let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");
let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

year.textContent = currentYear;

date.textContent = currentDate;
