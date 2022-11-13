// D O M
// R E V E A L    E V E N T

const revealBtn = document.querySelector("button");

const hiddenContent = document.querySelector(".hidden-content");

revealBtn.addEventListener("click", magicButton);

function magicButton() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}
