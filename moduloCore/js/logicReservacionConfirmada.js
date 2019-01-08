llenarTabla();


function llenarTabla(){
    var peticion = $.ajax({
        url: "../moduloCore/php/phpReservacionConfirmada.php",
        type: "post",
        data: {
            
        },
        dataType: 'json',
        success: function(response){
            var fecha = document.querySelector('#fecha');
            var hora = document.querySelector('#hora');
            var personas = document.querySelector('#personas');
            var mesa = document.querySelector('#mesa');
            var numMesa = document.querySelector('#numMesa');
            var numReserva = document.querySelector('#numReserva');
            var numReserva2 = document.querySelector('#numReserva2');
            fecha.innerHTML = '';
            hora.innerHTML = '';
            personas.innerHTML = '';
            mesa.innerHTML = '';
            numMesa.innerHTML = '';
            numReserva.innerHTML = '';
            numReserva2.innerHTML = '';
            
            fecha.innerHTML = response[0]['fecha'];
            hora.innerHTML = response[0]['hora'];
            personas.innerHTML = response[0]['cantidad_personas'];
            mesa.innerHTML = response[0]['mesa'];
            numMesa.innerHTML = response[0]['numero_mesa'];
            numReserva.innerHTML = response[0]['numero_reserva'];
            numReserva2.innerHTML = response[0]['numero_reserva'];
        },   
        error: function(request, error){
        }
    });
}