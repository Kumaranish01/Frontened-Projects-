const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const navlist = document.querySelector(".nav-list");
const rightNav = document.querySelector(".rightNav");

burger.addEventListener("click", () => {
  if (rightNav) {
    // Check if rightNav exists
    rightNav.classList.toggle("v-class-resp");
  }
  if (navlist) {
    // Check if navlist exists
    navlist.classList.toggle("v-class-resp");
  }
  if (navbar) {
    // Check if navbar exists
    navbar.classList.toggle("h-nav-resp");
  }
});



document.addEventListener("DOMContentLoaded", () => {
  // 🌟 Responsive Navigation Menu
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".nav-list");
  const rightNav = document.querySelector(".rightNav");

  burger.addEventListener("click", () => {
    navList.classList.toggle("v-class-resp");
    rightNav.classList.toggle("v-class-resp");
    document.querySelector(".navbar").classList.toggle("h-nav-resp");
  });

  // 🎯 Smooth Scroll to Sections
  document.querySelectorAll(".nav-list a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // 🔎 Search Functionality (Basic)
  document.querySelector(".btn-sm").addEventListener("click", function () {
    let query = document.getElementById("search").value.toLowerCase();
    if (query) {
      alert(`Searching for: ${query}`);
      // You can replace this alert with actual search logic
    }
  });

  // ✉️ Contact Form Validation
  document.querySelector(".btn-dark").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission for demo
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("Phone").value.trim();
    let email = document.getElementById("email id").value.trim();
    let message = document.getElementById("text").value.trim();

    if (!name || !phone || !email || !message) {
      alert("❌ Please fill out all fields.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("❌ Enter a valid 10-digit phone number.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("❌ Enter a valid email address.");
      return;
    }

    alert("✅ Form Submitted Successfully!");
    // You can replace this alert with actual form submission logic
  });
});
