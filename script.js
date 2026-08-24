const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyper Transfer Machine Language",
      "Home Tool Markup Language"
    ],
    correct: 0
  },

  {
    question: "Which language is used to style web pages?",
    answers: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python"
    ],
    correct: 1
  },

  {
    question: "Which language makes a website interactive?",
    answers: [
      "CSS",
      "HTML",
      "JavaScript",
      "SQL"
    ],
    correct: 2
  },

  {
    question: "Which company created GitHub?",
    answers: [
      "Google",
      "Microsoft",
      "Apple",
      "Amazon"
    ],
    correct: 1
  },

  {
    question: "What does JS stand for?",
    answers: [
      "Java Style",
      "Java Source",
      "JavaScript",
      "Just Script"
    ],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("nextBtn");

function startQuiz() {
  currentQuestion = 0;
  score = 0;

  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");

  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestion];

  questionElement.textContent =
    `${currentQuestion + 1}. ${question.question}`;

  answersElement.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.textContent = answer;
    button.classList.add("answer");

    button.addEventListener("click", () => {
      selectAnswer(button, index);
    });

    answersElement.appendChild(button);
  });

  nextButton.style.display = "none";
}

function selectAnswer(button, selectedIndex) {
  const correctIndex = questions[currentQuestion].correct;

  const allButtons = document.querySelectorAll(".answer");

  allButtons.forEach(btn => {
    btn.disabled = true;
  });

  if (selectedIndex === correctIndex) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    allButtons[correctIndex].classList.add("correct");
  }

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  document.getElementById("score").textContent =
    `You scored ${score} out of ${questions.length}!`;
}

function restartQuiz() {
  startQuiz();
}

startQuiz();
