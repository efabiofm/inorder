llenarCampos();
var impuestoVentas;
var impuestoServicio;

var tablaProductos = document.querySelector('#tablaProductos');
var btnImprimir = document.querySelector('#btnImprimir');

function llenarCampos(){
    var peticion = $.ajax({
            url: "../moduloConfiguracion/php/consultarParametros.php",
            async:false,
            type: "post",
            data: {},
            dataType: 'json',

            success: function(response){
                document.querySelector('#nombre').innerHTML = response[0]['nombre_rest'];
                document.querySelector('#cedula').innerHTML = response[0]['cedula_juridica'];
                document.querySelector('#direccion').innerHTML = response[0]['direccion_rest'];
                document.querySelector('#telefono').innerHTML = response[0]['telefono_rest'];
                document.querySelector('#horario').innerHTML = response[0]['horario_rest'];
                impuestoVentas= response[0]['impuesto_ventas'];
                impuestoServicio=response[0]['impuesto_servicio'];
            },
            
            error: function(request, error) {
                alert(error);
            }

     });
}

llenarCamposFactura();

function llenarCamposFactura(){
    $.ajax({
        url: "../moduloCore/php/consultarOrdenMesa.php",
        type: "POST",
        data: {
            numMesa: getUrlVars()['numMesa']
        },
        dataType: 'json',

        success: function(response){
            var tbody = document.querySelector('#tablaProductos tbody');

            for(var i = 0; i<response.length;i++){
                var fila = tbody.insertRow(i);
                var celdaCantidad = fila.insertCell(0);
                var celdaNombrePlato = fila.insertCell(1);
                var celdaPrecio = fila.insertCell(2);
                //var celdaEliminar = fila.insertCell(3);
                
                celdaCantidad.innerHTML = response[i]['cantidad'];
                celdaNombrePlato.innerHTML = response[i]['nombre_plato'];
                celdaPrecio.innerHTML = response[i]['precio'];
                //celdaEliminar.innerHTML = '<i class="fa fa-trash" onclick="borrar(this)"></i>';
            }
            calcularSubtotal();
        },
    });
}

btnImprimir.addEventListener('click', function(){
    $.ajax({
        url: "../moduloCore/php/phpCambiarEstadoMesa.php",
        type: "POST",
        data: {
            'pmesa' : getUrlVars()['numMesa'],
            'pestado' : 'Libre'
        },
        dataType: 'json',

        success: function(response){
            cambiarEstadoOrden();
            window.location.assign('../moduloSeguridad/ingresoCajero.php');
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
});

function cambiarEstadoOrden(){
    $.ajax({
        url: "../moduloCore/php/phpConsultarIdOrden.php",
        type: "POST",
        data: {
            'mesa' : getUrlVars()['numMesa']
        },
        dataType: 'json',

        success: function(response){
            $.ajax({
                url: "../moduloCore/php/cambiarEstadoOrden.php",
                type: "POST",
                data: {
                    'pidOrden' : response[0]['id_orden'],
                    'pestado' : 'Facturada'
                },
                dataType: 'json',
        
                success: function(response){
                    
                },
                
                error: function(request, error) {
                    alert(error);
                }
            });
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}
    
function calcularSubtotal(){
    var filas = tablaProductos.getElementsByTagName('tr');
    var subtotal = 0;
    
    for(var i=1; i<filas.length;i++){
        subtotal = subtotal + Number.parseInt(filas[i].cells[2].innerHTML);
    }

    var celdaSubtotal = document.querySelector('#subtotal');
    var celdaImpuestoVentas = document.querySelector('#impuestoVentas');
    var celdaImpuestoServicios = document.querySelector('#impuestoServicio');
    var celdaTotal = document.querySelector('#total');
    
    celdaSubtotal.innerHTML = subtotal.toFixed(2);
    var calculoImpuestoVentas = subtotal*impuestoVentas;
    var calculoImpuestoServicio = subtotal*impuestoServicio;
    celdaImpuestoVentas.innerHTML = calculoImpuestoVentas.toFixed(2);
    celdaImpuestoServicios.innerHTML =calculoImpuestoServicio.toFixed(2);
    celdaTotal.innerHTML = (Number.parseInt(celdaImpuestoVentas.innerHTML) + Number.parseInt(celdaImpuestoServicios.innerHTML) + subtotal).toFixed(2);
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
    });
    return vars;
}