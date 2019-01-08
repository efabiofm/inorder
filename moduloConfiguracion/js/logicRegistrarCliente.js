var btnRegistrar = document.querySelector('#btnRegistrarCliente'),
	btnCancelar = document.querySelector('#btnCancelarCliente'),
	txtContrasena = document.querySelector('#txtContrasena'),
	txtConfirmacion = document.querySelector('#txtConfirmacion'),
	tag = document.querySelector('#formatoContrasena'),
	msjError = document.querySelector('#msjError'),
	msjConfirmacion = document.querySelector('#msjConfirmacion'),
	btnContinuar = document.querySelector('#btnContinuar'),
	hayError;

tag.classList.add('oculto');
msjError.classList.add('oculto');
msjConfirmacion.classList.add('oculto');

txtContrasena.addEventListener('mouseover', function(){
	tag.classList.remove('oculto');
});

txtContrasena.addEventListener('mouseout', function(){
	tag.classList.add('oculto');
});

btnRegistrar.addEventListener('click', function(){
	var inputs = document.querySelectorAll('input[name="obligatorio"]');
	hayError = false;
	for(var i=0; i<inputs.length; i++){
		if(inputs[i].value == ''){
			inputs[i].classList.add('error');
			msjError.classList.remove('oculto');
			hayError = true;
		}else{
			inputs[i].classList.remove('error');
			tag.classList.add('oculto');
		}
	}

	if (/[a-zA-Z]/.test(txtContrasena.value) && 
		/[0-9]/.test(txtContrasena.value) && 
		/[$&+,:;=?@#|'<>.-^*()%!]/.test(txtContrasena.value) && 
		txtContrasena.value.length >= 8 &&
		txtContrasena.value == txtConfirmacion.value) {
		txtContrasena.classList.remove('error');
		txtConfirmacion.classList.remove('error');
	}else{
		txtContrasena.classList.add('error');
		txtConfirmacion.classList.add('error');
		hayError = true;
	}

	if(!hayError){
	    msjError.classList.add('oculto');
		registrarCliente();
	}
});

btnCancelar.addEventListener('click', function(){
    //var date = new Date();
    //alert(date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate());
	window.location.assign('../moduloSeguridad/iniciarSesion.html');
});

function registrarCliente(){
    var username = document.querySelector('#txtNombreUsuario').value,
        primerNombre = document.querySelector('#txtNombre').value,
        primerApellido = document.querySelector('#txt1erApellido').value,
        fechaNacimiento = document.querySelector('#calFechaNacimiento').value,
        correo = document.querySelector('#txtEmail').value,
        segundoNombre = document.querySelector('#txt2doNombre').value,
        segundoApellido = document.querySelector('#txt2doApellido').value,
        edad = document.querySelector('#spinEdad').value,
        telefono = document.querySelector('#txtTelefono').value,
        nacionalidad = document.querySelector('#txtNacionalidad').value;
        
        var peticion = $.ajax({
        url: "../moduloConfiguracion/php/insertarUsuario.php",
        type: "post",
        data: {
            'pprimerNombre' : primerNombre,
            'psegundoNombre' : segundoNombre,
            'pprimerApellido' : primerApellido,
            'psegundoApellido' : segundoApellido,
            'pcorreo' : correo,
            'pfechaNacimiento' : fechaNacimiento,
            'pedad' : edad,
            'ptelefono' : telefono,
            'pnacionalidad' : nacionalidad,
            'pcontrasena' : txtContrasena.value,
            'pusername' : username,
            'pfechaIngreso' : '2015-08-24',
            'ptipoUsuario' : 'Cliente',
            'pestado' : 'Activo',
            'ppuesto' : 'N/A'
        },
        dataType: 'json',
        success: function(response){
            cuerpo.classList.add('fade');
            msjConfirmacion.classList.remove('oculto');
        },
        error: function(request, error){
            alert(error);
        }
    });
}

btnContinuar.addEventListener('click', function(){
    window.location.assign('../moduloSeguridad/iniciarSesion.html');
});