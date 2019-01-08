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
    txtPtsDisponibles = document.querySelector('#txtPtsDisponibles'),
    txtContrasena = document.querySelector('#txtContrasena');

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
            txtPtsDisponibles.value = response[0]['puntos'];
            txtContrasena.value = response[0]['contrasena'];
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}