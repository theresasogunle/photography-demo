const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // more than 10% in view
      if (entry.intersectionRatio > 0.1) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  },
  {
    threshold: [0.0, 0.1, 1.0]
  }
);

sections.forEach((section) => {
  observer.observe(section);

  const div = section.querySelector("div");

  const mq = window.matchMedia("prefers-reduced-motion: no-preference");

  if (!mq.matches) {
    document.addEventListener("mousemove", (event) => {
      const aimX = (event.clientX - window.innerWidth / 2) / 20;
      const aimY = (event.clientY - window.innerHeight / 2) / -20;
      div.style.transform = `rotateX(${aimY}deg) rotateY(${aimX}deg)`;
    });
  }
});
