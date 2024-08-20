function toggleMenu () {
    document.getElementById("menu-button").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("hidden");
    });

    document.getElementById("close-button").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("hidden");
    });
}