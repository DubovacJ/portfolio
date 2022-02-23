var dropdown = document.getElementById("dropdown");
var menuList = document.getElementById("menuList");
function toggleDropdown() {
  menuList.classList.toggle("showMenu");
}
dropdown.addEventListener("click", toggleDropdown);
