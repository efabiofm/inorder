var btnGuardar = document.querySelector('#btnGuardar'),
	btnAceptar = document.querySelector('#btnAceptar'),
	btnCancelar = document.querySelector('#btnCancelar'),
	txtPassActual = document.querySelector('#txtPassActual'),
	txtPassNuevo = document.querySelector('#txtPassNuevo'),
	txtConfirmarPass = document.querySelector('#txtConfirmarPass'),
	mensajeError=document.querySelector('#msjError'),
	msjConfirmacion=document.querySelector('#msjConfirmacion'),
	cuerpo = document.querySelector("#cuerpo");

mensajeError.classList.add('oculto');
msjConfirmacion.classList.add('oculto');

btnGuardar.addEventListener('click', function(){
    var peticion = $.ajax({
        url: "../moduloSeguridad/php/consultarContrasena.php",
        type: "post",
        data: {},
        dataType: 'json',
    
        success: function(response){
            if(response[0]['contrasena'] == txtPassActual.value){
                txtPassActual.classList.remove('error');
                msjError.classList.add('oculto');
                if (/[a-zA-Z]/.test(txtPassNuevo.value) && 
            	/[0-9]/.test(txtPassNuevo.value) && 
            	/[$&+,:;=?@#|'<>.-^*()%!]/.test(txtPassNuevo.value) && 
            	txtPassNuevo.value.length >= 8 &&
            	txtPassNuevo.value == txtConfirmarPass.value) {
        		    msjError.classList.add('oculto');
            		txtPassNuevo.classList.remove('error');
            		txtConfirmarPass.classList.remove('error');
            		cuerpo.classList.add('fade');
		            msjConfirmacion.classList.remove('oculto');
		            guardarContrasena(txtPassNuevo.value);
            	}else{
            	    msjError.innerHTML = 'Las contraseñas no cumplen con el formato requerido o no son iguales';
            	    msjError.classList.remove('oculto');
            		txtPassNuevo.classList.add('error');
            		txtConfirmarPass.classList.add('error');
            	}
            }else{
                msjError.innerHTML = 'La contrasena actual no es correcta';
                msjError.classList.remove('oculto');
                txtPassActual.classList.add('error');
            }
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
});

btnAceptar.addEventListener('click', function(){
	msjConfirmacion.classList.add('oculto');
	cuerpo.classList.remove('fade');
});

btnCancelar.addEventListener('click', function(){
	window.location.assign('../moduloSeguridad/ingresoCliente.php');
});

function guardarContrasena(pnuevoPass){
    var peticion = $.ajax({
        url: "../moduloSeguridad/php/modificarContrasena.php",
        type: "post",
        data: {
            'pcontrasena' : pnuevoPass
        },
        dataType: 'json',

        success: function(response){
            window.location.assign('iniciarSesion.html');
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}