import {
  getPassingGrades,
  getFailingGrades,
  getNumberOfGrades,
  getAverageValue,
  getLowestValue,
  getHighestValue,
  getRaisedGrades,
} from "./grades.js";

const gradesForm = document.querySelector("#grades-form");
const yourGrade = document.querySelector("#your-grade");
const gradesAll = document.querySelector("#grades-all");
const clearGrades = document.querySelector("#clear-grades");

const grades = [12, 19, 10, 4, 15, 9];

const renderSecondTable = (grades) => {
  document.querySelector("#passing-grades").innerHTML = getPassingGrades(
    grades
  );
  document.querySelector("#failing-grades").innerHTML = getFailingGrades(
    grades
  );
  document.querySelector("#raised-grades").innerHTML = getRaisedGrades(grades);
};

const renderStatsTable = (grades) => {
  const tbody = document.querySelector("#stats-table tbody");
  tbody.innerHTML = `<tr>
        <td>${getLowestValue(grades)}</td>
        <td>${getAverageValue(grades)}</td>
        <td>${getNumberOfGrades(grades)}</td>
        <td>${getHighestValue(grades)}</td>
    </tr>`;
};

const render = (grades) => {
  const gradesText = grades.join(", ");
  console.log("Grades: " + gradesText);
  gradesAll.textContent = gradesText;
  renderStatsTable(grades);
  renderSecondTable(grades);
};

console.log(gradesForm);
gradesForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newGrade = Number.parseInt(yourGrade.value, 10);
  grades.push(newGrade);
  yourGrade.value = "";
  render(grades);
});

clearGrades.addEventListener("click", () => {
  grades.length = 0;
  render(grades);
});

render(grades);
