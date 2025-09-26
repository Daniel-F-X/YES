const hamburguesa = document.querySelector("#hamburguer")
const enlaces = document.querySelector("#nav-links")

hamburguesa.addEventListener("click", () => {
    enlaces.classList.toggle("show")
});
// Submenú desplegable en móvil solo para "Rutas"
const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    dropdown.classList.toggle('show');
  }
});