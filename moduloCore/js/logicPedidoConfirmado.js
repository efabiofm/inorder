cargarNumOrden();
cargarTelefono();

function cargarNumOrden(){
    var peticion = $.ajax({
       url: "../moduloCore/php/consultarNumPedido.php",
       type: "post",
       data: {},
       dataType: 'json',
       success: function(response){
           document.querySelector('#numOrden').innerHTML = response[0]['id_pedido'];
       },
       error: function(request, error){
           alert(error);
       }
    });
}

function cargarTelefono(){
    var peticion = $.ajax({
       url: "../moduloConfiguracion/php/consultarParametros.php",
       type: "post",
       data: {},
       dataType: 'json',
       success: function(response){
           document.querySelector('#telefono').innerHTML = response[0]['telefono_rest'];
       },
       error: function(request, error){
           alert(error);
       }
    });
}