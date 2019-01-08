
llenarTabla();
function llenarTabla(){
    
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/consultarOrdenes.php",
        type: "post",
        data: {

               },
        dataType: 'json',

        success: function(response){
            var tbody = document.querySelector('#tablaOrdenes tbody');
            tbody.innerHTML = '';

            for(var i = 0; i<response.length;i++){
            
                var fila = tbody.insertRow(i);
                var celdaId = fila.insertCell(0);
                var celdaNombre = fila.insertCell(1);
                var celdaEstado = fila.insertCell(2);
                var celdaSalonero = fila.insertCell(3);
                
                celdaId.innerHTML = response[i]['id_orden'];
                celdaNombre.innerHTML = response[i]['numero_mesa'];
                celdaEstado.innerHTML = response[i]['estado'];
                celdaSalonero.innerHTML = response[i]['username_salonero'];
                //cada icono tiene la propiedad onclick para ejecutar una funcion
            }
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}