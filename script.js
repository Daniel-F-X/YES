const hamburguesa = document.querySelector("#hamburguer")
const enlaces = document.querySelector("#nav-links")

hamburguesa.addEventListener("click", () => {
    enlaces.classList.toggle("show")
});
// 🔹 Submenú en móvil (solo para Rutas)
dropdown.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {   // Solo aplica en pantallas pequeñas
        e.preventDefault();           // Evita que "Rutas.html" se abra directo
        dropdown.classList.toggle("active");
    }
});