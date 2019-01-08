var btnConsultar=document.querySelector('#btnConsultar');
var btnEliminar=document.querySelector('#btnEliminar');
var btnCancelar=document.querySelector('#btnCancelar');
var alert1=document.querySelector('#msjError');
var numReservacion=document.querySelector('#numReservacion');
var fecha = document.querySelector('#fecha');
var hora = document.querySelector('#hora');
var personas = document.querySelector('#personas');
var mesa = document.querySelector('#mesa');
var numMesa = document.querySelector('#numMesa');
var numReserva = document.querySelector('#numReserva');
var nomCliente = document.querySelector('#nomCliente');
var estado = document.querySelector('#estado');
var btnRedimir = document.querySelector('#btnRedimir');
var msjConfirmacion = document.querySelector('#msjConfirmacion');
var btnAceptar = document.querySelector('#btnAceptar');
var consultaReal = false;
var numeroMesa = 0;

alert1.classList.add('oculto');
msjConfirmacion.classList.add('oculto');

btnConsultar.addEventListener('click', function(){
    var bError=false;

    if (numReservacion.value==="" || (isNaN(numReservacion.value))===true) {
        bError=true;
        alert1.classList.remove('oculto');
        numReservacion.classList.add('error');
    }else{
        bError=false;
        alert1.classList.add('oculto');
        numReservacion.classList.remove('error');
    }

    if (bError===false) {
        consultarReservacion();
    }
});

btnEliminar.addEventListener('click', function(){
    var bError=false;

    if (numReservacion.value==="" || (isNaN(numReservacion.value))===true) {
        bError=true;
        alert1.classList.remove('oculto');
        numReservacion.classList.add('error');
    }else{
        bError=false;
        alert1.classList.add('oculto');
        numReservacion.classList.remove('error');
    }

    if (bError===false) {
        cancelarReservacion();
    }
});

btnRedimir.addEventListener('click', function(){
    redimirReservacion();
});

btnAceptar.addEventListener('click', function(){
    msjConfirmacion.classList.add('oculto');
    body.classList.remove('fade');
});

function consultarReservacion(){
    consultaReal=false;
    var peticion = $.ajax({
        url: "../moduloCore/php/phpConsultarReserva.php",
        type: "post",
        data: {
            'pnumreserva' : numReservacion.value
        },
        dataType: 'json',
        success: function(response){
            if(response.length===0){
                alert1.classList.remove('oculto');
                numReservacion.classList.add('error');
                fecha.innerHTML = '';
                hora.innerHTML = '';
                personas.innerHTML = '';
                mesa.innerHTML = '';
                numMesa.innerHTML = '';
                numReserva.innerHTML = '';
                nomCliente.innerHTML = '';
                estado.innerHTML = '';
            } else {
                var peticion2 = $.ajax({
                    url: "../moduloConfiguracion/php/consultarUsuarioXUsername.php",
                    type: "post",
                    data: {
                        'pusuario' : response[0]['usuario']
                    },
                    dataType: 'json',
                    success: function(response2){
                        fecha.innerHTML = '';
                        hora.innerHTML = '';
                        personas.innerHTML = '';
                        mesa.innerHTML = '';
                        numMesa.innerHTML = '';
                        numReserva.innerHTML = '';
                        nomCliente.innerHTML = '';
                        estado.innerHTML = '';
                        
                        fecha.innerHTML = response[0]['fecha'];
                        hora.innerHTML = response[0]['hora'];
                        personas.innerHTML = response[0]['cantidad_personas'];
                        mesa.innerHTML = response[0]['mesa'];
                        numMesa.innerHTML = response[0]['numero_mesa'];
                        numeroMesa = response[0]['numero_mesa'];
                        numReserva.innerHTML = response[0]['numero_reserva'];
                        var nombre = ""
                        if(response2[0]['primer_nombre']!=="") {
                            nombre = response2[0]['primer_nombre']+" "
                        }
                        if(response2[0]['segundo_nombre']!=="") {
                            nombre = nombre+response2[0]['segundo_nombre']+" ";
                        }
                        if(response2[0]['primer_apellido']!=="") {
                            nombre = nombre+response2[0]['primer_apellido']+" ";
                        }
                        if(response2[0]['segundo_apellido']!=="") {
                            nombre = nombre+response2[0]['segundo_apellido'];
                        }
                        nomCliente.innerHTML = nombre;
                        estado.innerHTML = response[0]['estado'];
                        consultaReal = true;
                    },
                    error: function(request, error){
                        alert("error en consulta de cliente");
                    }
                });
            }
        },
        error: function(request, error){
            alert("error en consulta de reserva");
        }
    });
}

function redimirReservacion(){
    if (consultaReal===true) {
        var peticion = $.ajax({
            url: "../moduloCore/php/phpConsultarReserva.php",
            type: "post",
            data: {
                'pnumreserva' : numReservacion.value
            },
            dataType: 'json',
            success: function(response){
                if ((response[0]['estado'])==="Cancelada") {
                    msjConfirmacion.classList.remove('oculto');
                    body.classList.add('fade');
                } else {
                    var peticion2 = $.ajax({
                        url: "../moduloCore/php/phpRedimirReservacion.php",
                        type: "post",
                        data: {
                            'pnumreserva' : numReservacion.value
                        },
                        dataType: 'json',
                        success: function(response2){
                        },
                        error: function(request, error){
                        }
                    });
                    var peticion3 = $.ajax({
                        url: "../moduloCore/php/phpCambiarEstadoMesa.php",
                        type: "post",
                        data: {
                            'pmesa' : numeroMesa,
                            'pestado' : "Ocupada"
                        },
                        dataType: 'json',
                        success: function(response3){
                            consultarReservacion();
                        },
                        error: function(request, error){
                        }
                    });
                }
            },
            error: function(request, error){
                alert(error);
            }
        });
    } else {
        alert1.classList.add('oculto');
        numReservacion.classList.remove('error');
    }
}

function cancelarReservacion(){
    var peticion = $.ajax({
        url: "../moduloCore/php/phpCancelarReservacion.php",
        type: "post",
        data: {
            'pnumreserva' : numReservacion.value
        },
        dataType: 'json',
        success: function(response){
            liberarMesaReservada();
            consultarReservacion();
        },
        error: function(request, error){
            alert("error en consulta de reserva");
        }
    });
}

function liberarMesaReservada(){
    var estado = "Libre";
    var peticion = $.ajax({
        url: "../moduloCore/php/phpCambiarEstadoMesa.php",
        type: "post",
        data: {
            'pmesa' : numMesa.innerHTML,
            'pestado' : estado
        },
        dataType: 'json',
        success: function(response){
        },
        error: function(request, error){
        }
    });
}