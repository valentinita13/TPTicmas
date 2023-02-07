var nombre = document.getElementById(nombre);
var apellido = document.getElementById (apellido);
document.getElementById (error);
error.style.color = 'red';

function enviarFormulario() {
    console.log('Enviando formulario');

var mensajesError = [];

if(nombre.value === null  || nombre.value ==='') {
      mensajesError.push('Ingresa tu nombre');
}

if(apellido.value === null || apellido.value ==='') {
    mensajesError.push('Ingresa tu apellido');
}

error.innerHTML = mensajesError.join (', ');


    return false;
}

var form = document.getElementById('formulario');
    form.addEventListener ('submit', function(evt) {
        evt.preventDefault()

        var mensajesError = [];

        if(nombre.value === null  || nombre.value ==='') {
              mensajesError.push('Ingresa tu nombre');
        }
        
        if(apellido.value === null || apellido.value ==='') {
            mensajesError.push('Ingresa tu apellido');
        }
        
        error.innerHTML = mensajesError.join (', ');

         });
        


