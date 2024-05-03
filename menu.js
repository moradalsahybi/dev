document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menu-button");
  var menu = document.getElementById("menu");
  menuButton.addEventListener("click", function () {
    menu.classList.toggle("show");
  });
  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
      menu.classList.remove("show");
    }
  });
});
