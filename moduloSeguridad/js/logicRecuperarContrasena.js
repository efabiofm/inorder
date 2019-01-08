var btnEnviar = document.querySelector('#btnEnviar'),
	btnCancelar = document.querySelector('#btnCancelar'),
	bntAceptar = document.querySelector('#btnAceptar'),
	msjError = document.querySelector('#msjError'),
	txtUsuario = document.querySelector('#txtUsuario'),
	txtEmail = document.querySelector('#txtEmail'),
	msjConfirmacion = document.querySelector('#msjConfirmacion'),
	cuerpo = document.querySelector('#cuerpo'),
	hayError, inputs;

msjError.classList.add('oculto');
msjConfirmacion.classList.add('oculto');

btnEnviar.addEventListener('click', function(){
	if((txtUsuario.value == '' && txtEmail.value == '') ||
	    (txtUsuario.value != '' && txtEmail.value != '')){
	    txtUsuario.classList.add('error');
	    txtEmail.classList.add('error');
	    msjError.classList.remove('oculto');
	}else{
        txtUsuario.classList.remove('error');
	    txtEmail.classList.remove('error');
	    msjError.classList.add('oculto');
	    if(txtUsuario.value == '' && txtEmail.value != ''){
	        cambiarContrasenaPorEmail(txtEmail.value);
	    }else{
	        cambiarContrasenaPorUser(txtUsuario.value);
	    }
	}
});

function cambiarContrasenaPorEmail(email){
    var peticion = $.ajax({
        url: "../moduloSeguridad/php/resetearContrasenaPorEmail.php",
        type: "post",
        data: {
            'pcorreo' : email,
            'pcontrasena' : 'abcd1234'
        },
        dataType: 'json',

        success: function(response){
            if(response > 0){
                msjConfirmacion.classList.remove('oculto');
	            cuerpo.classList.add('fade');
            }else{
                alert('El usuario o correo no corresponde a ningún usuario');
            }
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}

function cambiarContrasenaPorUser(user){
    var peticion = $.ajax({
        url: "../moduloSeguridad/php/resetearContrasenaPorUser.php",
        type: "post",
        data: {
            'pusuario' : user,
            'pcontrasena' : 'abcd1234'
        },
        dataType: 'json',

        success: function(response){
            if(response > 0){
                msjConfirmacion.classList.remove('oculto');
	            cuerpo.classList.add('fade');
            }else{
                alert('El usuario o correo no corresponde a ningún usuario');
            }
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}

btnCancelar.addEventListener('click', function(){
	window.location.assign('iniciarSesion.html');
});

btnAceptar.addEventListener('click', function(){
	msjConfirmacion.classList.add('oculto');
	cuerpo.classList.remove('fade');
	window.location.assign(iniciarSesion.html);
});