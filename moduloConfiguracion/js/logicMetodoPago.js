var btnGuardar=document.querySelector('#btnGuardar');
var btnAceptar=document.querySelector('#btnAceptar');
var btnAceptar2=document.querySelector('#btnAceptar2');
var btnAceptar3=document.querySelector('#btnAceptar3');
var msjError=document.querySelector('#msjError');
var msjConfirmacion=document.querySelector('#msjConfirmacion');
var msjPrimario=document.querySelector('#msjPrimario');
var msjSecundario=document.querySelector('#msjSecundario');
var body=document.querySelector('#body');

var prioridad=document.querySelector('#prioridadTarjeta');
var tipoTarjeta=document.querySelector('#tipoTarjeta');
var numTarjeta=document.querySelector('#numTarjeta');
var nomTarjeta=document.querySelector('#nomTarjeta');
var fechaExpiracion=document.querySelector('#fechaExpiracion');
var cvv=document.querySelector('#cvv');

msjError.classList.add('oculto');
msjConfirmacion.classList.add('oculto');
msjPrimario.classList.add('oculto');
msjSecundario.classList.add('oculto');

llenarMetodoPrimario();
llenarMetodoSecundario();

btnGuardar.addEventListener('click', function(){
var inputs = document.querySelectorAll('input[name="obligatorio"]');
    hayError = false;
    for(var i=0; i<inputs.length; i++){
        if(inputs[i].value == ''){
            inputs[i].classList.add('error');
            msjError.classList.remove('oculto');
            hayError = true;
        }else{
            inputs[i].classList.remove('error');
        }
    }

    if(prioridadTarjeta.selectedIndex == 0){
        hayError = true;
        prioridadTarjeta.classList.add('error');
    }else{
        prioridadTarjeta.classList.remove('error');
    }
    
    if(tipoTarjeta.selectedIndex == 0){
        hayError = true;
        tipoTarjeta.classList.add('error');
    }else{
        tipoTarjeta.classList.remove('error');
    }
    
    if(!hayError){
        msjError.classList.add('oculto');
        agregarMetodo();
    }
});

btnAceptar.addEventListener('click', function(){
    msjConfirmacion.classList.add('oculto');
    body.classList.remove('fade');
    window.location.assign('metodoDePago.php');
});
btnAceptar2.addEventListener('click', function(){
    msjPrimario.classList.add('oculto');
    body.classList.remove('fade');
});
btnAceptar3.addEventListener('click', function(){
    msjSecundario.classList.add('oculto');
    body.classList.remove('fade');
});

function llenarMetodoPrimario(){
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/consultarMediosPago.php",
        type: "post",
        data: {
            'pprioridad' : 'Primario'
        },
        dataType: 'json',

        success: function(response){
            document.querySelector('#numeroPrimario').innerHTML = response[0]['num_tarjeta'];
            document.querySelector('#clientePrimario').innerHTML = response[0]['nombre_titular'];
            document.querySelector('#expiracionPrimario').innerHTML = response[0]['fecha_expiracion'];
            switch(response[0]['tipo_tarjeta']){
                case 'VISA':
                    document.querySelector('#rbTarjeta1').innerHTML = '<i class="fa fa-cc-visa fa-2x"></i><i class="fa fa-trash fa-2x" id="delPrimario" onclick="eliminar(this)"></i>';
                    break;
                case 'Master Card':
                    document.querySelector('#rbTarjeta1').innerHTML = '<i class="fa fa-cc-mastercard fa-2x"></i><i class="fa fa-trash fa-2x" id="delPrimario" onclick="eliminar(this)"></i>';
                    break;
                case 'American Express':
                    document.querySelector('#rbTarjeta1').innerHTML = '<i class="fa fa-cc-amex fa-2x"></i><i class="fa fa-trash fa-2x" id="delPrimario" onclick="eliminar(this)"></i>';
                    break;
            }
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}

function llenarMetodoSecundario(){
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/consultarMediosPago.php",
        type: "post",
        data: {
            'pprioridad' : 'Secundario'
        },
        dataType: 'json',

        success: function(response){
            document.querySelector('#numeroSecundario').innerHTML = response[0]['num_tarjeta'];
            document.querySelector('#clienteSecundario').innerHTML = response[0]['nombre_titular'];
            document.querySelector('#expiracionSecundario').innerHTML = response[0]['fecha_expiracion'];
            switch(response[0]['tipo_tarjeta']){
                case 'VISA':
                    document.querySelector('#rbTarjeta2').innerHTML = '<i class="fa fa-cc-visa fa-2x"></i><i class="fa fa-trash fa-2x" id="delSecundario" onclick="eliminar(this)"></i>';
                    break;
                case 'Master Card':
                    document.querySelector('#rbTarjeta2').innerHTML = '<i class="fa fa-cc-mastercard fa-2x"></i><i class="fa fa-trash fa-2x" id="delSecundario" onclick="eliminar(this)"></i>';
                    break;
                case 'American Express':
                    document.querySelector('#rbTarjeta2').innerHTML = '<i class="fa fa-cc-amex fa-2x"></i><i class="fa fa-trash fa-2x" id="delSecundario" onclick="eliminar(this)"></i>';
                    break;
            }
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}

function agregarMetodo(){
    if(prioridad.value == 'Primario'){
        if(document.querySelector('#numeroPrimario').innerHTML == ''){
            var peticion = $.ajax({
                url: "../moduloConfiguracion/php/insertarMedioPago.php",
                type: "post",
                data: {
                    'pprioridad' : prioridad.value,
                    'ptipoTarjeta' : tipoTarjeta.value,
                    'pnumTarjeta' : numTarjeta.value,
                    'pnomTarjeta' : nomTarjeta.value,
                    'pfechaExpiracion' : fechaExpiracion.value,
                    'pcvv' : cvv.value
                },
                dataType: 'json',
        
                success: function(response){
                    body.classList.add('fade');
                    msjConfirmacion.classList.remove('oculto');
                },
                
                error: function(request, error) {

                }
            });
        }else{
            body.classList.add('fade');
            msjPrimario.classList.remove('oculto');
            
        }
    }else{
        if(document.querySelector('#numeroSecundario').innerHTML == ''){
            var peticion = $.ajax({
                url: "../moduloConfiguracion/php/insertarMedioPago.php",
                type: "post",
                data: {
                    'pprioridad' : prioridad.value,
                    'ptipoTarjeta' : tipoTarjeta.value,
                    'pnumTarjeta' : numTarjeta.value,
                    'pnomTarjeta' : nomTarjeta.value,
                    'pfechaExpiracion' : fechaExpiracion.value,
                    'pcvv' : cvv.value
                },
                dataType: 'json',
        
                success: function(response){
                    body.classList.add('fade');
                    msjConfirmacion.classList.remove('oculto');
                },
                
                error: function(request, error) {

                }
            });
        }else{
            body.classList.add('fade');
            msjSecundario.classList.remove('oculto');
        }
    }
}

function eliminar(boton){
    var sPrioridad;
    if(boton.id == 'delPrimario'){
        sPrioridad = 'Primario';
    }else{
        sPrioridad = 'Secundario';
    }
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/eliminarMedioPago.php",
        type: "post",
        data: {
            'pprioridad' : sPrioridad
        },
        dataType: 'json',

        success: function(response){
            window.location.assign('metodoDePago.php');
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}