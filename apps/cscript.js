let questions = [
    {
      id: 1,
      question: "What does CPU stand for?",
      options : ["Central Processing Unit", "Computer Personal Unit", "Central Process Unit", "Central Processor Unit"],
      answer: "Central Processing Unit"
  },
  {
      id: 2,
      question: "Which programming language is often used for web development?",
      options: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript"
  },
  {
      id: 3,
      question: "What does HTML stand for?",
      options: ["Hypertext Markup Language", "Hyperlink and Text Markup Language", "Highly Textual Markup Language", "Hypertext Text Markup Language"],
      answer: "Hypertext Markup Language"
  }
  ];
function makeQuizeDiv(quiz) {
  
    const div = document.createElement("div");
    div.setAttribute("class", "quiz-app");
    const h2 = document.createElement("h2");
    h2.innerText = quiz["question"];
    const list = document.createElement("li");
    const input = document.createElement("input")
    input.type="radio";
    const p =document.createElement("p")
    p.innerText = quiz["options"];

    const deleteBtn = document.createElement("button");
    div.appendChild(h2);
    list.appendChild(input)
    list.appendChild(p)
    div.appendChild(list);
    return div;
  
}
function appendToApp(quizDiv) {
  const app = document.querySelector("#app");
  app.appendChild(quizDiv);
}
function updateQuizListUI() {
  for (let i = 0; i < questions.length; i++) {
    const quizDiv = makeQuizeDiv(questions[i]);
    appendToApp(quizDiv);
  }
}
function add() {
        const quiz = {
        id: new Date().getTime(),
        question: ques,
        options: ops,
        isEdit: false,
      };
      clear();
    }
  updateQuizListUI();
function goBack() {
    window.history.back();
}