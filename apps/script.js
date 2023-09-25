const category = [
  {
    name: "Computer Science",
    value: "Computer_Science",
  },
  {
    name: "biology",
    value: "biology",
  },
];
const quizForm = document.getElementById("quizForm");
const categorySelect = document.getElementById("option");
document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  var selectedValue = categorySelect.value;
  window.location.href = `computer_sciene.html?type=${selectedValue}`;
});
for (let sub of category) {
  const option = document.createElement("option");
  option.value = sub.value;
  option.innerHTML = sub.name;
  categorySelect.appendChild(option);
}