// Create the observer

const allSections = document.querySelectorAll("square-wrapper");
const options = {
  root: null,
  threshold: 0.3,
};
const sectionObserver = new IntersectionObserver(callback, options);

allSections.forEach((section) => {
  sectionObserver.observe(section);
});

function callback(entries, observer) {
  entries.forEach((entry) => {
    const square = entry.target.querySelector(".square-first");
    if (entry.isIntersecting) {
      square.classList.add("square-animation");
      return;
    }
    square.classList.remove("square-animation");
  });
}

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     const square = entry.target.querySelector(".square");
//     if (entry.isIntersecting) {
//       square.classList.add("square-animation");
//       return;
//     }
//     square.classList.remove("square-animation");
//   });
// });

// observer.observe(document.querySelector(".square-wrapper"));
