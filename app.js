document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }
});

const btn = document.getElementById("see-more-btn");
    const moreText = document.getElementById("more-text");

    btn.addEventListener("click", (e) => {
      e.preventDefault(); // stop link refresh
      if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btn.textContent = "See Less";
      } else {
        moreText.style.display = "none";
        btn.textContent = "See More";
      }
    });

    