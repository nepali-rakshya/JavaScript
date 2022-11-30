let link = document.getElementById("youtube");

link.addEventListener("click", function () {
  let newD = document.createElement("div");
  link.parentNode.insertBefore(newD, link);
  newD.append(link);

  link.before(newD);
  newD.append(link);
});
