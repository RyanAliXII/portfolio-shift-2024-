const getInTouchButton = document.querySelector("#getInTouchButton");
getInTouchButton.addEventListener("click", () => {
  window.scrollTo(0, document.body.scrollHeight);
});
const footerYear: HTMLSpanElement = document.querySelector(".year")
footerYear.innerText = new Date().getFullYear().toString();