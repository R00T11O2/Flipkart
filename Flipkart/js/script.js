function applyResponsiveLayout() {
  const screenWidth = window.innerWidth;

  // Navbar adjustments
  const navBar = document.querySelector(".navBar");
  if (screenWidth < 768) {
    navBar.classList.add("navBar-mobile");
  } else {
    navBar.classList.remove("navBar-mobile");
  }

  // Item section - show fewer items per row
  const itemSections = document.querySelectorAll(".itemSection");
  itemSections.forEach((section) => {
    if (screenWidth < 768) {
      section.classList.add("itemSection-mobile");
    } else {
      section.classList.remove("itemSection-mobile");
    }
  });

  // Below NavBar icons
  const belowNav = document.querySelector(".belowNavBar");
  if (screenWidth < 600) {
    belowNav.classList.add("belowNavBar-mobile");
  } else {
    belowNav.classList.remove("belowNavBar-mobile");
  }
}

// Run on load
applyResponsiveLayout();

// Run on resize
window.addEventListener("resize", applyResponsiveLayout);
