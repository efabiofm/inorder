var msjError=document.querySelector('#msjError'),
	btnAgregar = document.querySelector('#btnAgregar'),
	tipoUsuario = document.querySelector('#sltTipoUsuario'),
	primerNombre = document.querySelector('#primerNombre'),
	segundoNombre = document.querySelector('#segundoNombre'),
	primerApellido = document.querySelector('#primerApellido'),
	segundoApellido = document.querySelector('#segundoApellido'),
	correo = document.querySelector('#correo'),
	fechaNacimiento = document.querySelector('#fechaNacimiento'),
	edad = document.querySelector('#edad'),
	telefono = document.querySelector('#telefono'),
	nacionalidad = document.querySelector('#nacionalidad'),
	username = document.querySelector('#username'),
	contrasena = document.querySelector('#contrasena'),
	fechaIngreso = document.querySelector('#fechaIngreso'),
	puesto = document.querySelector("#sltPuestos"),
	estado = document.querySelector("#sltEstado"),
	hayError;

msjError.classList.add('oculto');
llenarSelectPuestos();

btnAgregar.addEventListener('click', function(){
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
	if(!hayError){
	    msjError.classList.add('oculto');
	    agregarUsuario();
	}
});

function agregarUsuario(){
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/insertarUsuario.php",
        type: "post",
        data: {
            'pprimerNombre' : primerNombre.value,
            'psegundoNombre' : segundoNombre.value,
            'pprimerApellido' : primerApellido.value,
            'psegundoApellido' : segundoApellido.value,
            'pcorreo' : correo.value,
            'pfechaNacimiento' : fechaNacimiento.value,
            'pedad' : edad.value,
            'ptelefono' : telefono.value,
            'pnacionalidad' : nacionalidad.value,
            'pcontrasena' : contrasena.value,
            'pusername' : username.value,
            'pfechaIngreso' : fechaIngreso.value,
            'ptipoUsuario' : tipoUsuario.value,
            'pestado' : estado.value,
            'ppuesto' : puesto.value
        },
        dataType: 'json',
        success: function(response){
            window.location.assign('adminUsuarios.php');
        },
        error: function(request, error) {
            alert(error);
        }
    });
}

function llenarSelectPuestos(){
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/consultarPuestos.php",
        type: "post",
        data: {},
        dataType: 'json',
        success: function(response){
            var sltPuestos = document.querySelector('#sltPuestos');
            for(var i = 0; i<response.length;i++){
                var option = document.createElement('option');
                option.text = response[i]['nombre'];
                sltPuestos.add(option);
            }
            var optionNA = document.createElement('option');
            optionNA.text = 'N/A';
            sltPuestos.add(optionNA);
        },
        error: function(request, error){
            alert(error);
        }
    });
}
