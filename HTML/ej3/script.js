function mostrarDescripcion() {
    let elementoTipoCuenta = document.getElementById("tipoCuenta").value;
    let elementoDescripcion = document.getElementById("descripcion");
    if (elementoTipoCuenta === "free") {
        elementoDescripcion.innerHTML = "Acceso limitado a los contenidos";
    } else if (elementoTipoCuenta === "basic") {
        elementoDescripcion.innerHTML = "Acceso básico a los contenidos";
    } else {
        elementoDescripcion.innerHTML = "Acceso ilimitado a todos los contenidos";
    }
}