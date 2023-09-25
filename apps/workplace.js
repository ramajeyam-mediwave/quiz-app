const appdiv = document.querySelector("#app");
appdiv.style.display = "none";

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
  const appdiv = document.querySelector("#app");
  const quizdiv = document.querySelector("#quizForm");
  let selectedValue = categorySelect.value;
  console.log(selectedValue)
  // window.location.href = `index.html?type=${selectedValue}`;
  appdiv.style.display = "block";
  quizdiv.style.display = "none";
  updateQuizListUI(selectedValue);
});
for (let sub of category) {
  const option = document.createElement("option");
  option.value = sub.value;
  option.innerHTML = sub.name;
  categorySelect.appendChild(option);
}

const computer = [
  {
    id: 1,
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Process Unit",
      "Central Processor Unit",
    ],
    answer: "Central Processing Unit",
  },
  {
    id: 2,
    question: "Which programming language is often used for web development?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    id: 3,
    question: "What does HTML stand for?",
    options: [
      "Hypertext Markup Language",
      "Hyperlink and Text Markup Language",
      "Highly Textual Markup Language",
      "Hypertext Text Markup Language",
    ],
    answer: "Hypertext Markup Language",
  },
];
const bio = [
  {
    id: "1",
    question: "The human heart is ",
    options: [" Neurogenic heart", "Myogenic heart", "Ampullary", "Pulsating"],
    correctAns: "Myogenic heart",
  },
  {
    id: "2",
    question: "Spermology is the study of ",
    options: ["Seed", "Leaf", "Fruit", "Pollen"],
    correctAns: "Seed",
  },
  {
    id: "3",
    question: "Who is known as father of Zoology ",
    options: ["Darwin", "Aristotle", "Aristotle", "Theophrastus"],
    correctAns: "Aristotle",
  },
];
const questionCollection = {
  computer: computer,
  bio: bio,
};
// const urlParams = new URLSearchParams(window.location.search);
// const myType = urlParams.get("type");
// console.log(questionCollection[myType]);
function makeQuizDiv(quiz) {
  const div = document.createElement("div");
  div.setAttribute("id", `question-${quiz.id}`);
  div.setAttribute("class", "quiz-app");
  const h2 = document.createElement("h2");
  h2.innerText = quiz.question;
  const subDiv = document.createElement("div");
  subDiv.setAttribute("class", "subdiv");
  const resDiv = document.createElement("div");
  resDiv.setAttribute("class", "res-div");

  button.addEventListener("click", function () {
    const selectedOption = document.querySelector(
      `input[name="answer-${quiz.id}"]:checked`
    );
    if (selectedOption) {
      const selectedAnswer = selectedOption.value;
      if (selectedAnswer === quiz.answer) {
        resDiv.innerHTML = "Correct Answer!";
        resDiv.style.color = "green";
      } else {
        resDiv.innerHTML = "Sorry,correct answer is " + quiz.answer;
        resDiv.style.color = "red";
      }
    } else {
      resDiv.innerHTML = "Please select an option.";
      resDiv.style.color = "yellow";
    }
  });
  for (let i = 0; i < quiz.options.length; i++) {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", `answer-${quiz.id}`);
    radio.setAttribute("class", "radioBtn");
    radio.value = quiz.options[i];
    label.appendChild(radio);
    label.appendChild(document.createTextNode(quiz.options[i]));
    subDiv.appendChild(label);
  }
  div.appendChild(h2);
  div.appendChild(subDiv);
  div.appendChild(resDiv);
  div.appendChild(button);
  div.appendChild(back);
  return div;
}
const button = document.createElement("button");
button.setAttribute("class", "btn");
button.innerHTML = "Check Answer";
function appendToApp(quizDiv) {
  const app = document.querySelector("#app");
  app.appendChild(quizDiv);
}
function updateQuizListUI(sub) {
  let selectedValue = categorySelect.value;
  for (let i = 0; i < questionCollection[selectedValue].length; i++) {
    const quizDiv = makeQuizDiv(questionCollection[selectedValue][i]);
    appendToApp(quizDiv);
  }
}
const back = document.createElement("button");
back.setAttribute("class", "back");
back.innerHTML = "Back";
back.addEventListener("click", goBack);
function goBack() {
  const appdiv = document.querySelector("#app");
  const quizdiv = document.querySelector("#quizForm");
  appdiv.style.display = "none";
  quizdiv.style.display = "block";
}