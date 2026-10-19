document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("birthdayModal");
  const openButton = document.getElementById("openSurprise");
  // Show the birthday surprise automatically on the home page only.
  if (modal) {
    document.body.classList.add("modal-open");
    const closeModal = () => {
      modal.classList.add("modal-hide");
      document.body.classList.remove("modal-open");
      setTimeout(() => modal.remove(), 650);
      launchConfetti();
    };
    if (openButton) openButton.addEventListener("click", closeModal);
    modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
    document.addEventListener("keydown", event => { if (event.key === "Escape" && document.getElementById("birthdayModal")) closeModal(); }, { once: true });
  }

  // Mobile navigation
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) toggle.addEventListener("click", () => {
    const opened = nav.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(opened));
    toggle.textContent = opened ? "×" : "☰";
  });

  // Floating hearts, sparkles and kiss marks
  const floaties = document.querySelector(".floaties");
  if (floaties) {
    const symbols = ["♡", "♥", "✦", "✧", "💋"];
    for (let i = 0; i < 24; i++) {
      const item = document.createElement("span");
      item.className = "floaty";
      item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      item.style.left = `${Math.random() * 100}%`;
      item.style.animationDuration = `${12 + Math.random() * 18}s`;
      item.style.animationDelay = `${Math.random() * -25}s`;
      item.style.fontSize = `${12 + Math.random() * 17}px`;
      item.style.setProperty("--drift", `${-60 + Math.random() * 120}px`);
      floaties.appendChild(item);
    }
  }

  // Birthday wish button
  const wishButton = document.getElementById("wishButton");
  const wishResult = document.getElementById("wishResult");
  if (wishButton && wishResult) wishButton.addEventListener("click", () => {
    wishResult.textContent = "May your year be full of love, peace, soft days, and beautiful surprises. Happy Birthday! 🎂💗✨";
    launchConfetti();
  });

  // Gentle reveal on scroll
  const revealTargets = document.querySelectorAll(".moment-card, .gallery-item, .voice-card, .video-card, .letter-paper, .sorry-paper, .quote-panel");
  revealTargets.forEach(el => el.classList.add("reveal"));
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("revealed"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    revealTargets.forEach(el => observer.observe(el));
  } else revealTargets.forEach(el => el.classList.add("revealed"));
});

function launchConfetti() {
  const symbols = ["♡", "♥", "✦", "✨", "💗", "💋"];
  for (let i = 0; i < 34; i++) {
    const bit = document.createElement("span");
    bit.className = "confetti-bit";
    bit.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    bit.style.left = `${Math.random() * 100}%`;
    bit.style.animationDelay = `${Math.random() * 0.8}s`;
    bit.style.setProperty("--x", `${-100 + Math.random() * 200}px`);
    document.body.appendChild(bit);
    setTimeout(() => bit.remove(), 3200);
  }
}