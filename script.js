const correctCode = "240223";
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
        window.location.href = "index.html";
      } else {
        enteredCode = "";
        updateDots();
        document.querySelector(".lockscreen").classList.add("shake");
        setTimeout(() => {
          document.querySelector(".lockscreen").classList.remove("shake");
        }, 400);
      }
    }
  });
});
