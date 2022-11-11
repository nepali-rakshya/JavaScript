//  E V E N T   L I S T E N E R S

const btn = document.querySelector(".btn-1");

function showEvent() {
  alert("Hey we did it! ;) ");
}

btn.addEventListener("click", showEvent);

const bg = document.querySelector(".box-2");
function bgChange() {
  bg.style.backgroundColor = "pink";
  alert("HEHEHE");
}

bg.addEventListener("mouseover", bgChange);
