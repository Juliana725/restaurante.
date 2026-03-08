function contactar(e) {
    // evitar envío normal del formulario
    if (e && e.preventDefault) e.preventDefault();

    // Obtener valores
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    // Validación simple
    if(!nombre || !correo || !mensaje){
        alert("completa todos los campos antes de enviar.");
        return;
    }

    // Mensaje de confirmación
    alert("👌ok " + nombre + ", tu mensaje fue enviado con éxito 😎, en un momento te atenderemos");

}