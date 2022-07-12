const hamburgerIco = document.querySelector(".hamburger-ico");
const navigation = document.querySelector(".navigation");

hamburgerIco.addEventListener("click", () => {
    navigation.classList.toggle("active");
})