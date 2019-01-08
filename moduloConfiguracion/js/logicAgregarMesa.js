var boton = document.getElementById("btnGuardar");
var btnCancelar = document.getElementById("botonCancelar");
var camposNecesarios = document.getElementsByClassName("campoNecesario");
var mensajeError = document.getElementById("msjError");

var numeroMesa = document.querySelector('#numeroMesa'),
    nombreMesa = document.querySelector('#nombreMesa'),
    descripcionMesa = document.querySelector('#descripcionMesa'),
    capacidadMesa = document.querySelector('#capacidadMesa'),
    tipoMesa = document.querySelector('#tipoMesa');
    
function validarTodos() {
   
    var formularioValido = true,
        i = 0,
        ii = camposNecesarios.length;
    for (0; i < ii; i = i + 1) {
        if (camposNecesarios[i].value === '') {
            camposNecesarios[i].classList.add("error");
            formularioValido = false;
        } else {
            camposNecesarios[i].classList.remove("error");
        }
    }
    
    if (formularioValido) {
        mensajeError.classList.add("oculto");
    } else {
        mensajeError.classList.remove("oculto");
    }
    return formularioValido;
    
}

boton.addEventListener('click', function(){
    
    if (validarTodos()) guardar();
});


 function guardar(){
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/insertarMesa.php",
        type: "post",
        data: {
            'pnumero' : numeroMesa.value,
            'pnombre' : nombreMesa.value,
            'pdescripcion' : descripcionMesa.value,
            'pcapacidad' : capacidadMesa.value,
            'ptipo' : tipoMesa.value,
           
        },
        dataType: 'json',
        success: function(response){
            window.location.assign('adminMesas.php');
        },
        error: function(request, error) {
            alert(error);
        }
    });
}