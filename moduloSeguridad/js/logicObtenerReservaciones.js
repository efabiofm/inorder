    var peticion = $.ajax({
        url: "../moduloSeguridad/php/phpObtenerFecha.php",
        type: "post",
        data: {},
        dataType: 'json',

        success: function(response){
            var dia = response[0];
            var mes = response[1];
            var anho = response[2];
            var fecha = anho + '-' + mes + '-' + dia;
            
            $.ajax({
                url: "../moduloSeguridad/php/phpObtenerReservacionesDiarias.php",
                type: "post",
                data: {
                  fecha: '2015-08-29'
                },
                dataType: 'json',
                success: function(response){
                    llenarTabla();
                    function llenarTabla(){
                        $.ajax({
                            url: "../moduloCore/php/phpConsultarPlatosOrden.php",
                            type: "POST",
                            data: {id_orden: '3'},
                            dataType: 'json',
                    
                            success: function(response){
                            var tbody = document.querySelector('#tablaReservaciones tbody');
                    
                                for(var i = 0; i<response.length;i++){
                                    var fila = tbody.insertRow(i);
                                    var celdaHora = fila.insertCell(0);
                                    var celdaMesa = fila.insertCell(1);
                                    var celdaPersonas = fila.insertCell(2);
                                    
                                    celdaCantidad.innerHTML = response[i]['hora'];
                                    celdaNombrePlato.innerHTML = response[i]['numero_mesa'];
                                    celdaPrecio.innerHTML = response[i]['cantidad_personas'];
                                }
                            },
                        });
                    }    
                }
            });
        },
        
        error: function(request, error) {
            alert(error);
        }
    });