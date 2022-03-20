const allSections = document.querySelectorAll(".square-wrapper");

const options = {
  root: null,
  threshold: 0.3,
};
const sectionObserver = new IntersectionObserver(callback, options);

allSections.forEach((section) => {
  sectionObserver.observe(section);
});

function callback(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    entry.target.classList.remove("square-animation");
    return;
  }

  entry.target.classList.add("square-animation");
}
