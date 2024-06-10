document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();
    enviarCorreo();
    document.getElementById("formulario").style.display = "none";
    document.getElementById("enviado").style.display = "block";
});

function enviarCorreo() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    // Utiliza fetch para enviar una solicitud POST al servidor
    fetch('/enviar-correo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, email, mensaje }),
    })
    .then(response => {
      if (response.ok) {
        console.log('Correo enviado exitosamente');
      } else {
        console.error('Error al enviar el correo');
      }
    })
    .catch(error => {
      console.error('Error de red:', error);
    });
}
