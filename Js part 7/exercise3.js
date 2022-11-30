let link = document.getElementById("youtube");

link.addEventListener("click", function () {
  let wrapper = document.createElement("a");
  link.parentNode.insertBefore(wrapper, link);
  wrapper.append(link);
});
