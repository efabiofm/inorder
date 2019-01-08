obtenerFecha();

function obtenerFecha(){
    $.ajax({
        url: "../moduloSeguridad/php/phpObtenerFecha.php",
        type: "POST",
        data: {},
        dataType: 'json',

        success: function(response){
            
            var dia = response[0];
            var mes = response[1];
            var anho = response[2];
            
            var fecha = anho + '-' + mes + '-' + dia;
            
            alert(fecha);
            
            llenarTabla(fecha);
            
            function llenarTabla(pfecha){
                
                alert('Fx Llenar Tabla');
                
                $.ajax({
                    url: "../moduloSeguridad/php/phpConsultarReservacionesDiarias.php",
                    type: "POST",
                    data: {fecha: pfecha},
                    dataType: 'json',
                    
                    success: function(response){
                        
                        var tbody = document.querySelector('#tablaReservaciones tbody');
                        
                        for(var i = 0; i<response.length;i++){
                            var fila = tbody.insertRow(i);
                            var celdaHora = fila.insertCell(0);
                            var celdaMesa = fila.insertCell(1);
                            var celdaPersonas = fila.insertCell(2);
                            
                            var Hora = response[i]['hora'] +':00' 
                            celdaHora.innerHTML = Hora;
                            celdaMesa.innerHTML = response [i]['numero_mesa'];
                            celdaPersonas.innerHTML = response [i]['cantidad_personas']; 
                        }
                
                        
                        var test = response [0]['hora'];
                        alert(response.length);
                        
                        alert(test);
                    },
                    error: function(){
                        alert('test1');
                    }
                    
                });
                
            }
        },
    });
}  