const navList = document.querySelector(".nav--list");
const navBtn = document.querySelector(".nav--btn");

navBtn.addEventListener("click", () => {
  navList.classList.toggle("change");
});
