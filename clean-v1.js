const revealObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  }
}, { threshold: 0.12 });

document.querySelectorAll(".section-heading, .project-group, .metrics-grid article, .tools-grid article, .experience-list article, .contact-card").forEach((element) => {
  element.classList.add("reveal");
  revealObserver.observe(element);
});
