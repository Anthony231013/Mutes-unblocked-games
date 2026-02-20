// Optional: smooth scroll for the "Start Drawing" button
document.addEventListener("DOMContentLoaded", () => {
  const link = document.querySelector('a[href="#steps"]');
  if (!link) return;

  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector("#steps");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
