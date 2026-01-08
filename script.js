const correctCode = "240223"; // TTMMJJ
let enteredCode = "";

const dots = document.querySelectorAll(".code-dots span");
const buttons = document.querySelectorAll(".keypad button");

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("filled", index < enteredCode.length);
  });
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("delete")) {
      enteredCode = enteredCode.slice(0, -1);
    } else if (btn.textContent && enteredCode.length < 6) {
      enteredCode += btn.textContent;
    }

    updateDots();

    if (enteredCode.length === 6) {
      if (enteredCode === correctCode) {
        window.location.href = "home.html"; // Zielseite nach richtigem Code
      } else {
        enteredCode = "";
        updateDots();
        const lockscreen = document.querySelector(".lockscreen");
        lockscreen.classList.add("shake");
        setTimeout(() => lockscreen.classList.remove("shake"), 400);
      }
    }
  });
});