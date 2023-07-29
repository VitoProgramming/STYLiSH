// Change profile colour when hovering
const member = document.querySelector(".member");
member.addEventListener("mouseover", (event) => {
  event.target.src = "./images/member-hover.png";
});

member.addEventListener("mouseout", (event) => {
  event.target.src = "./images/member.png";
});

// Change cart colour when hovering
const cart = document.querySelector(".cart");
cart.addEventListener("mouseover", (event) => {
  event.target.src = "./images/cart-hover.png";
});

cart.addEventListener("mouseout", (event) => {
  event.target.src = "./images/cart.png";
});

cart.addEventListener("click", () => {
  window.location.assign("/cart");
});

// // Search bar appears when the search icon is clicked
const searchBtn2 = document.querySelector(".form__searchbtn2");
const form = document.querySelector(".main-header__form");

searchBtn2.addEventListener("click", (event) => {
  event.target.style.display = "none";
  form.style.display = "flex";
});

export default "effect";
