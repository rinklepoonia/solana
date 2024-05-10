function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overFlowHidden");
    document.querySelector(".menuIcon").classList.toggle("cross")
}

AOS.init({
    duration: 1200,
    once: true,
})