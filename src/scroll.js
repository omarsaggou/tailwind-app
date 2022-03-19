// Create the observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".square");
    if (entry.isIntersecting) {
      square.classList.add("square-animation");
      return;
    }
    square.classList.remove("square-animation");
  });
});

// Tell the observer which elements to track
observer.observe(document.querySelector(".square-wrapper"));
