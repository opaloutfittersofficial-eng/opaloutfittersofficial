function toggleSearch() {
  let bar = document.getElementById("searchBar");
  bar.style.display = bar.style.display === "block" ? "none" : "block";
}

function toggleMenu() {
  let menu = document.getElementById("dropdown");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}
