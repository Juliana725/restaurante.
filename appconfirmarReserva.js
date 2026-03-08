function confirmarReserva(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let personas = document.getElementById('personas').value;

    if (!nombre || !correo || !fecha || !hora || !personas) {
        alert('ups.. faltan datos porfavor,completa la informacion para confirmar tu reserva');
        return;
    }

    if (confirm("seguro " + nombre + ", que quieres confirmar tu reserva para el dia " + fecha + " a las " + hora + " para " + personas + " personas?")) {
        alert("gracias " + nombre + " por reservar con sonosotros,te esperamos para que disfrutra de la mejor comida que podras probar preparada con amor y tradicion ❤️");
    }
}
