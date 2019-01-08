llenarCampos();
function llenarCampos(){
    var peticion = $.ajax({
            url: "../moduloConfiguracion/php/consultarParametros.php",
            type: "post",
            data: {},
            dataType: 'json',

            success: function(response){
                document.querySelector('#nombre').innerHTML = response[0]['nombre_rest'];
                document.querySelector('#direccion').innerHTML = response[0]['direccion_rest'];
                document.querySelector('#horario').innerHTML = response[0]['horario_rest'];
                document.querySelector('#telefono').innerHTML = response[0]['telefono_rest'];
                document.querySelector('#correo').innerHTML = response[0]['correo_rest'];
            },
            
            error: function(request, error) {
                alert(error);
            }

     });
}