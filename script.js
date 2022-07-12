const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const account = document.querySelector(".account");
const cross = document.querySelector(".menu-cross");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("active");
})
cross.addEventListener("click", () => {
  navigation.classList.toggle("active");
})
document.querySelectorAll(".navigation__link").forEach(n => n.addEventListener("click", () => {
  navigation.classList.toggle("active");
}))