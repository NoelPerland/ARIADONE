document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!popup.classList.contains("hidden")) {
      closeModal();
    }
    if (popup2.open) {
      closeDialog();
    }
    if (!menuContent.classList.contains("hidden")) {
      menuContent.classList.add("hidden");
    }
  }
});

// General toggle function for class 'hidden'
function toggle(element) {
  element.classList.toggle("hidden");
}

// --- Uppgift 1: Accessible Modal ---
const popupButton = document.getElementById("popUpBtn");
const popup = document.getElementById("accessibleModal");
const closePopop = document.getElementById("closeModalBtn");

popupButton.addEventListener("click", () => {
  toggle(popup);
  updateAriaExpanded(popupButton);
  closePopop.focus();
});

closePopop.addEventListener("click", () => {
  closeModal();
});

function closeModal() {
  popup.classList.add("hidden");
  popupButton.setAttribute("aria-expanded", "false");
  popupButton.focus();
}

// --- Uppgift 2: Dialog Element ---
const popupButton2 = document.getElementById("popupBtn2");
const popup2 = document.getElementById("accessibleDialog");
const closePopop2 = document.getElementById("closeDialogBtn");

popupButton2.addEventListener("click", () => {
  if (popup2.open) {
    popup2.close();
  } else {
    popup2.showModal();
    popupButton2.setAttribute("aria-expanded", "true");
    closePopop2.focus();
  }
});

closePopop2.addEventListener("click", () => {
  closeDialog();
});

function closeDialog() {
  popup2.close();
  popupButton2.setAttribute("aria-expanded", "false");
  popupButton2.focus();
}

// --- Uppgift 3: Hamburger Menu ---
const menuButton = document.getElementById("menuButton");
const menuContent = document.getElementById("menuContent");

menuButton.addEventListener("click", () => {
  toggle(menuContent);
});

function updateAriaExpanded(button) {
  const expanded = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", `${!expanded}`);
}

// Focus loop: move from the last focusable item back to the first
const focusableElements = document.querySelectorAll("button, a, [href]");
const firstFocusable = document.getElementById("popUpBtn"); // First popup button
const lastMenuItem = menuContent.querySelector("ul li:last-child a"); // Last menu item "Kontakt"

document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    if (document.activeElement === lastMenuItem && !e.shiftKey) {
      e.preventDefault();
      firstFocusable.focus(); // Loop back to the first popup button
    }
  }
});

//Uppgift 3

const hamburger = document.getElementById("menuButton");
const hamburgerContent = document.getElementById("menuContent");

hamburger.addEventListener("click", () => {
  hamburgerContent.classList.toggle("show");
});
