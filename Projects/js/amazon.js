document.addEventListener("DOMContentLoaded", function () {
    // **🛠 Responsive Navbar Toggle**
    const menuToggle = document.querySelector(".panel-all");
    const panelOptions = document.querySelector(".panel-option");
  
    menuToggle.addEventListener("click", function () {
      panelOptions.classList.toggle("show");
    });
  
    // **🔎 Search Input Functionality**
    const searchInput = document.querySelector(".search-input");
    const searchButton = document.querySelector(".search-icon");
  
    searchButton.addEventListener("click", function () {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        console.log(`Searching for: ${searchTerm}`);
        alert(`Searching for: ${searchTerm}`);
        searchInput.value = "";
      } else {
        alert("Please enter a search term!");
      }
    });
  
    // **🛒 Cart Alert Notification**
    const cartButton = document.querySelector(".nav-Cart");
  
    cartButton.addEventListener("click", function () {
      alert("Your cart is currently empty! Start shopping now.");
    });
  
    // **🔝 Back to Top Button**
    const backToTop = document.querySelector(".foot-panel1");
  
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // **🛍️ "See More" Button Click Events**
    const seeMoreButtons = document.querySelectorAll(".box p");
  
    seeMoreButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const category = this.previousElementSibling.textContent;
        alert(`Exploring more items in: ${category}`);
        console.log(`See More clicked for: ${category}`);
      });
    });
  
    // **📱 Responsive Panel Toggle**
    function handleResize() {
      if (window.innerWidth > 768) {
        panelOptions.classList.remove("show");
      }
    }
    window.addEventListener("resize", handleResize);
  });
  