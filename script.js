const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");
const textToType = document.getElementById("textToType");
const inputArea = document.getElementById("inputArea");
const result = document.getElementById("result");

const texts = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing speed improves with daily practice.",
  "Focus on accuracy before increasing speed."
];

let startTime;

startBtn.addEventListener("click", () => {
  gameArea.classList.remove("hidden");
  inputArea.disabled = false;
  inputArea.value = "";
  result.textContent = "";

  // Random câu
  textToType.textContent = texts[Math.floor(Math.random() * texts.length)];

  // Bắt đầu tính giờ
  startTime = new Date().getTime();
});

inputArea.addEventListener("input", () => {
  if (inputArea.value === textToType.textContent) {
    let endTime = new Date().getTime();
    let timeTaken = (endTime - startTime) / 1000;

    let words = textToType.textContent.split(" ").length;
    let wpm = Math.round((words / timeTaken) * 60);

    result.textContent = `🎉 Done! Time: ${timeTaken.toFixed(2)}s | Speed: ${wpm} WPM`;
    inputArea.disabled = true;
  }
});
