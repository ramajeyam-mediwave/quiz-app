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
    div.setAttribute("id", `question-${quiz["id"]}`);
    div.setAttribute("class", "quiz-app");


    const h2 = document.createElement("h2");
    h2.innerText = quiz["question"];

    const subDiv = document.createElement("div")
    subDiv.setAttribute("class", "subdiv")

    for(let i=0; i<quiz.options.length;i++){
    const label = document.createElement("label")

    const radio = document.createElement("input")
    radio.setAttribute("type","radio")
    radio.setAttribute("class","radioBtn")
    radio.value = quiz.options[i];

    label.appendChild(radio);
    label.appendChild(document.createTextNode( quiz.options[i]));
     subDiv.appendChild(label);

    }



    

    
    div.appendChild(h2);
    div.appendChild(subDiv);
 
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