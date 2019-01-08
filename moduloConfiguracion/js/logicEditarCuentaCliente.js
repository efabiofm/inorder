var txtNombreUsuario = document.querySelector('#txtNombreUsuario'),
    txtNombre = document.querySelector('#txtNombre'),
    txt1erApellido = document.querySelector('#txt1erApellido'),
    calFechaNacimiento = document.querySelector('#calFechaNacimiento'),
    txtEmail = document.querySelector('#txtEmail'),
    txt2doNombre = document.querySelector('#txt2doNombre'),
    txt2doApellido = document.querySelector('#txt2doApellido'),
    spinEdad = document.querySelector('#spinEdad'),
    txtTelefono = document.querySelector('#txtTelefono'),
    txtNacionalidad = document.querySelector('#txtNacionalidad'),
    txtContrasena = document.querySelector('#txtContrasena');

var mensajeError=document.querySelector('#msjError'),
	msjConfirmacion=document.querySelector('#msjConfirmacion'),
	btnAceptar = document.querySelector('#btnAceptar'),
	btnGuardar = document.querySelector('#btnGuardar'),
	cuerpo = document.querySelector("#cuerpo"),
	hayError = false;

mensajeError.classList.add('oculto');
msjConfirmacion.classList.add('oculto');
llenarInfo();

function llenarInfo(){
     var peticion = $.ajax({
        url: "../moduloConfiguracion/php/consultarUsuario.php",
        type: "post",
        data: {},
        dataType: 'json',

        success: function(response){
            txtNombreUsuario.value = response[0]['username'];
            txtNombre.value = response[0]['primer_nombre'];
            txt1erApellido.value = response[0]['primer_apellido'];
            calFechaNacimiento.value = response[0]['fecha_nacimiento'];
            txtEmail.value = response[0]['correo_electronico'];
            txt2doNombre.value = response[0]['segundo_nombre'];
            txt2doApellido.value = response[0]['segundo_apellido'];
            spinEdad.value = response[0]['edad'];
            txtTelefono.value = response[0]['telefono'];
            txtNacionalidad.value = response[0]['nacionalidad'];
            txtContrasena.value = response[0]['contrasena'];
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}

btnGuardar.addEventListener('click', function(){
	var inputs = document.querySelectorAll('input[name="obligatorio"]');
	hayError = false;
	for(var i=0; i<inputs.length; i++){
		if(inputs[i].value == ''){
			inputs[i].classList.add('error');
			hayError = true;
		}else{
			inputs[i].classList.remove('error');
		}
	}
	if(hayError){
		mensajeError.classList.remove('oculto');
	}else{
		mensajeError.classList.add('oculto');
		guardar();
	}
});

btnAceptar.addEventListener('click', function(){
	window.location.assign('cuentaCliente.php');
});

function guardar(){
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/modificarCliente.php",
        type: "post",
        data: {
            'pprimerNombre' : txtNombre.value,
            'psegundoNombre' : txt2doNombre.value,
            'pprimerApellido' : txt1erApellido.value,
            'psegundoApellido' : txt2doApellido.value,
            'pcorreo' : txtEmail.value,
            'pfechaNacimiento' : calFechaNacimiento.value,
            'pedad' : spinEdad.value,
            'ptelefono' : txtTelefono.value,
            'pnacionalidad' : txtNacionalidad.value
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