function mostrarDescripcion(event) {
    let elementoTipoCuenta = document.getElementById("tipoCuenta").value;
    let elementoDescripcion = document.getElementById("descripcion");
    if (elementoTipoCuenta === "free") {
        elementoDescripcion.innerText = "Acceso limitado a los contenidos";
    } else if (elementoTipoCuenta === "basic") {
        elementoDescripcion.innerText = "Acceso básico a los contenidos";
    } else {
        elementoDescripcion.innerText = "Acceso ilimitado a todos los contenidos";
    }
}