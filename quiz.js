const data = [
  {
    id: 1,
    question: "What is reborn after its Birth?",
    answers: [
      { answer: "The Sun", isCorrect: false },
      { answer: "The Moon", isCorrect: true },
      { answer: "The Earth", isCorrect: false },
      { answer: "All the Above", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "What is that which stays Alone?",
    answers: [
      { answer: "The Sun", isCorrect: true },
      { answer: "The Moon", isCorrect: false },
      { answer: "The Earth", isCorrect: false },
      { answer: "All the Above", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "What is heavier than Earth?",
    answers: [
      { answer: "The Father", isCorrect: false },
      { answer: "The Mother", isCorrect: true },
      { answer: "The Siblings", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "What is higher than Heaven?",
    answers: [
      { answer: "The Father", isCorrect: true },
      { answer: "The Mother", isCorrect: false },
      { answer: "The Siblings", isCorrect: false },
    ],
  },
  {
    id: 45,
    question: "Who is Soul of a Man?",
    answers: [
      { answer: "His Son", isCorrect: true },
      { answer: "His Daughter", isCorrect: false },
      { answer: "His Wife", isCorrect: false },
      { answer: "His Relatives", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "What is fleeter(travel fast) than light?",
    answers: [
      { answer: "Wind", isCorrect: false },
      { answer: "Mind", isCorrect: true },
      { answer: "Consciousness", isCorrect: false },
      { answer: "thought", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: "What is more numerous than grass?",
    answers: [
      { answer: "Mind", isCorrect: true },
      { answer: "Subconscios Mind", isCorrect: false },
      { answer: "thoughts", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: "What is it, which swells in its own Impetus?",
    answers: [
      { answer: "River", isCorrect: true },
      { answer: "Mountain", isCorrect: false },
      { answer: "Tree", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: "Select the animal, which doesn't close eyes while Sleeping?",
    answers: [
      { answer: "Crocodile", isCorrect: true },
      { answer: "Fish", isCorrect: false },
      { answer: "Dolphins", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "What is that wealth, which no one can ever steal from you?",
    answers: [
      { answer: "Power", isCorrect: false },
      { answer: "Fame", isCorrect: false },
      { answer: "Money", isCorrect: false },
      { answer: "Knowledge", isCorrect: true },
    ],
  },
  {
    id: 8,
    question: "What is it, which burns a person more than fire?",
    answers: [
      { answer: "Pride", isCorrect: false },
      { answer: "Greed", isCorrect: false },
      { answer: "Anger", isCorrect: true },
      { answer: "Desire", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "What if Renounced, makes the person more wealthy?",
    answers: [
      { answer: "Greed", isCorrect: false },
      { answer: "Desire", isCorrect: true },
      { answer: "Pride", isCorrect: false },
      { answer: "Anger", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "What if Renounced, makes the person more Agreeable?",
    answers: [
      { answer: "Greed", isCorrect: false },
      { answer: "Desire", isCorrect: false },
      { answer: "Pride", isCorrect: true },
      { answer: "Anger", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "What if Renounced, Person have no Regrets?",
    answers: [
      { answer: "Greed", isCorrect: false },
      { answer: "Desire", isCorrect: false },
      { answer: "Pride", isCorrect: false },
      { answer: "Anger", isCorrect: true },
    ],
  },
  {
    id: 10,
    question:
      "Select the person who survives even if the Time, material world and Spiritual world are against him?",
    answers: [
      { answer: "The person who is born in higher cast", isCorrect: false },
      { answer: "The person who follows his own Dharma", isCorrect: false },
      { answer: "The person who acquired more knowledge", isCorrect: false },
      { answer: "The person who has patience & sheetaltha", isCorrect: true },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};

play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Score: ${
    (correctCount - wrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
  <div class="answer">
      <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
      <label for="1">${item.answer}</label>
  </div>
  `
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert("Select an answer!");
  });
};

showQuestion(qIndex);
submitAnswer();
