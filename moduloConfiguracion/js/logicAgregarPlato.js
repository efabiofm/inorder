var boton = document.getElementById("btnGuardar");
var btnCancelar = document.getElementById("botonCancelar");
var camposNecesarios = document.getElementsByClassName("campoNecesario");
var mensajeError = document.getElementById("msjError");

var nombrePlato = document.querySelector('#nombrePlato'),
    nombreIngles = document.querySelector('#nombreIngles'),
    precioPlato = document.querySelector('#precioPlato'),
    ingredientes = document.querySelector('#ingredientes'),
    caracteristicas = document.querySelector('#caractEspeciales'),
    calorias = document.querySelector('#calorias'),
    tipoPlato = document.querySelector('#sltTiposPlato');

boton.addEventListener('click', function(){
   
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
        agregarPlato();
    } else {
        mensajeError.classList.remove("oculto");
    }
});

function agregarPlato(){
    if(calorias.value == ''){
        calorias.value = 0;
    }
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/insertarPlato.php",
        type: "post",
        data: {
            'pnombre' : nombrePlato.value,
            'ptipoPlato' : tipoPlato.value,
            'pprecio' : precioPlato.value,
            'pingredientes' : ingredientes.value,
            'pcaracteristicas' : caracteristicas.value,
            'pnombreIngles' : nombreIngles.value,
            'pcalorias' : calorias.value
        },
        dataType: 'json',
        success: function(response){
            window.location.assign('adminPlatos.php');
        },
        error: function(request, error){
            alert(error);
        }
    });
}