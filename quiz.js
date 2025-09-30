const quizData = [
  {
    question: "What does HTML stand for?",
    options: {
      a: "Hyper Text Markup Language",
      b: "Home Tool Markup Language",
      c: "Hyperlinks and Text Markup Language",
      d: "Hyper Tech Main Language"
    },
    correct: "a"
  },
  {
    question: "Which language is used for styling web pages?",
    options: {
      a: "HTML",
      b: "Python",
      c: "CSS",
      d: "Java"
    },
    correct: "c"
  },
  {
    question: "Which language runs in a web browser?",
    options: {
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript"
    },
    correct: "d"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  answerBtns[0].textContent = q.options.a;
  answerBtns[1].textContent = q.options.b;
  answerBtns[2].textContent = q.options.c;
  answerBtns[3].textContent = q.options.d;
  nextBtn.style.display = "none";
  resultEl.textContent = "";
}

answerBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const selected = btn.getAttribute("data-answer");
    if (selected === quizData[currentQuestion].correct) {
      score++;
      resultEl.textContent = "✅ Correct!";
      resultEl.style.color = "lightgreen";
    } else {
      resultEl.textContent = "❌ Wrong!";
      resultEl.style.color = "red";
    }
    nextBtn.style.display = "block";
  });
});

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").innerHTML = `<h2>You scored ${score}/${quizData.length} 🎉</h2>`;
    nextBtn.style.display = "none";
  }
});

loadQuestion();
