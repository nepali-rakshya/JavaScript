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

const imgHover = document.querySelector(".img-adjust");

const realImage = document.querySelector("img");

function magicImage() {
  if (realImage.classList.contains("hidden-content")) {
    realImage.classList.remove("hidden-content");
    realImage.classList.add("reveal-btn");
    realImage.setAttribute("id", "distance");
  } else {
    realImage.classList.remove("reveal-btn");
    realImage.classList.add("hidden-content");
  }
}

imgHover.addEventListener("mouseover", magicImage);
