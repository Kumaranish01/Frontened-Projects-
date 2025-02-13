// 🌿 Falling Leaves Animation
document.addEventListener("DOMContentLoaded", () => {
    const leaves = document.querySelectorAll(".leaves .set div img");
  
    function animateLeaves() {
      leaves.forEach((leaf, index) => {
        let randomX = Math.random() * window.innerWidth;
        let randomY = Math.random() * window.innerHeight;
        let randomRotation = Math.random() * 360;
  
        leaf.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
        leaf.style.transition = `transform ${Math.random() * 3 + 2}s ease-in-out`;
      });
    }
  
    setInterval(animateLeaves, 3000);
  });
  
  // 🎭 Parallax Effect on Scroll
  window.addEventListener("scroll", function () {
    let scrollValue = window.scrollY;
    document.querySelector(".girl").style.transform = `translateY(${scrollValue * 0.3}px)`;
    document.querySelector(".trees").style.transform = `translateY(${scrollValue * 0.1}px)`;
    document.querySelector(".bg").style.transform = `translateY(${scrollValue * 0.05}px)`;
  });
  
  // 🔘 Login Button Click Animation
  document.getElementById("btn").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission for demo
    this.classList.add("clicked");
    setTimeout(() => this.classList.remove("clicked"), 300); // Remove animation effect
  });
  