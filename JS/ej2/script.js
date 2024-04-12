window.onload = function() {
    let colores = ["#C9C", "#C9F", "#F9F", "#F9C", "#F99"];
    let index = 0;

    function cambiarColor() {
        let elementoContenido = document.getElementById("contenido");
        elementoContenido.style.backgroundColor = colores[index];
        index = (index + 1) % colores.length;
    }

    setInterval(cambiarColor, 1000);
}