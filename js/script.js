phoneMenuButton.addEventListener("click", function () {
  if (phoneMenu.style.display === "block") {
    hideMenu();
  } else {
    showMenu();
  }
});

// Add mouseenter and mouseleave event listeners to the mobile menu
phoneMenu.addEventListener("mouseleave", hideMenu);

function showMenu() {
  phoneMenu.style.display = "block";
}

// Function to hide the mobile menu
function hideMenu() {
  phoneMenu.style.display = "none";
}
