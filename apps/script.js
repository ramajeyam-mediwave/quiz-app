const state = {
  categories: [
    {
      id:100,
      name: "Computer Science",
      value: "computer",
    },
    {
      id:200,
      name: "biology",
      value: "bio",
    },
  ],
  questions: [
    {
      id: 220,
      question: "What does CPU stand for?",
      options: [
        {id: 10, text:"Central Processing Unit",isCorrect: true},
        {id: 20, text:"Computer Personal Unit", isCorrect:false},
        {id: 30, text:"Central Process Unit",isCorrect:false},
        {id:40, text:"Central Processor Unit",isCorrect:false},
        ],
      category: 2345,
      
    },
    {
      id: 230,
      question: "Which programming language is often used for web development?",
      options: [
                {id:50,text:"Python", isCorrect:false},
                {id:51,text:"java", isCorrect:false},
                {id:52,text:"javascript", isCorrect:true},
                {id:53,text:"c++", isCorrect:false},
              ],
      category:2346
    },]}




// const category = [
//   {
//     id: 100,
//     name: "Computer Science",
//     value: "computer",
//   },
//   {
//     id: 200,
//     name: "biology",
//     value: "bio",
//   },
// ];
const computer = [
  {
    id: 220,
    question: "What does CPU stand for?",
    options: [
      { id: 10, text: "Central Processing Unit", isCorrect: true },
      { id: 20, text: "Computer Personal Unit", isCorrect: false },
      { id: 30, text: "Central Process Unit", isCorrect: false },
      { id: 40, text: "Central Processor Unit", isCorrect: false },
    ],
    category: 2345,
  },
  {
    id: 230,
    question: "Which programming language is often used for web development?",
    options: [
      { id: 50, text: "Python", isCorrect: false },
      { id: 51, text: "java", isCorrect: false },
      { id: 52, text: "javascript", isCorrect: true },
      { id: 53, text: "c++", isCorrect: false },
    ],
    category: 2346,
  },
  {
    id: 240,
    question: "What does HTML stand for?",
    options: [
      { id: 50, text: "Hypertext Markup Language", isCorrect: true },
      { id: 51, text: "Hypelink Markup Language", isCorrect: false },
      { id: 52, text: "Markup Language", isCorrect: false },
      { id: 53, text: "text Markup Language", isCorrect: false },
    ],
    category: 2347,
  },
];
const bio = [
  {
    id: "250",
    question: "The human heart is ",
    options: [
      { id: 54, text: "Neurogenic heart", isCorrect: false },
      { id: 55, text: "Myogenic heart", isCorrect: true },
      { id: 56, text: "heart", isCorrect: false },
      { id: 57, text: "Neurogenic", isCorrect: false },
    ],
    category: 2350,
  },
  {
    id: "260",
    question: "Spermology is the study of ",
    options: [
      { id: 59, text: "Seed", isCorrect: true },
      { id: 60, text: "leaf", isCorrect: false },
      { id: 61, text: "tree", isCorrect: true },
      { id: 52, text: "grass", isCorrect: true },
    ],
    category: 2360,
  },
  {
    id: "270",
    question: "Who is known as father of Zoology ",
    options: [
      { id: 55, text: "Darwin", isCorrect: false },
      { id: 56, text: "Aristotlee", isCorrect: false },
      { id: 57, text: "Aristotle", isCorrect: true },
      { id: 58, text: "thoms", isCorrect: true },
    ],
    category: 2370,
  },
];

const appdiv = document.querySelector("#app");
appdiv.style.display = "none";

const quizForm = document.getElementById("quizForm");
const categorySelect = document.getElementById("option");
document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();
  const appdiv = document.querySelector("#app");
  const quizdiv = document.querySelector("#quizForm");
  let selectedValue = categorySelect.value;
  let categoryindex = categorySelect
  console.log(selectedValue);

  appdiv.style.display = "block";
  quizdiv.style.display = "none";
  updateQuizListUI(selectedValue);
});
for (let sub of state.categories) {
  const option = document.createElement("option");
  option.value = sub.value;
  option.innerHTML = sub.name;
  categorySelect.appendChild(option);
}

// {
//   id: "1",
//   question: "The human heart is ",
//   options: [" Neurogenic heart", "Myogenic heart", "Ampullary", "Pulsating"],
//   answer: "Myogenic heart",
// },

const questionCollection = {
  computer: computer,
  bio: bio,
};

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

  // const button = document.createElement("button");
  // button.setAttribute("class", "btn");
  // button.innerHTML = "Check Answer";
  button.addEventListener("click", function () {
    const selectedOption = document.querySelector(
      `input[name="answer-${quiz.id}"]:checked`
    );
    if (selectedOption) {
      const selectedAnswer = selectedOption.value;
      const correctAnswer = quiz.options.find((option) => option.isCorrect);
      if (selectedAnswer === correctAnswer.text) {
        resDiv.innerHTML = "Correct Answer!";
        resDiv.style.color = "green";
      } else {
        resDiv.innerHTML = "Sorry, correct answer is " + correctAnswer.text;
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
    radio.value = quiz.options[i].text;
    label.appendChild(radio);
    label.appendChild(document.createTextNode(quiz.options[i].text));
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
  const app = document.querySelector("#app");
  app.innerHTML = "";
  for (let i = 0; i < questionCollection[sub].length; i++) {
    const quizDiv = makeQuizDiv(questionCollection[sub][i]);
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
