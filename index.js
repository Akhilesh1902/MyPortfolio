const navList = document.querySelector(".nav--list");
const navBtn = document.querySelector(".nav--btn");
const navLink = document.querySelectorAll(".nav li ");

navBtn.addEventListener("click", () => {
  navList.classList.toggle("change");
  navLink.forEach((link, index) => {
    if (link.style.animation) link.style.animation = "";
    else {
      link.style.animation = `navAnim 0.5s ease ${index / 7 + 1}s`;
    }
    if (link.style.opacity) console.log("here");
    console.log(index / 7);
  });
});
console.log(navLink);
