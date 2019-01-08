
llenarTabla();
contarPlatos();


function llenarTabla(){
    var peticion = $.ajax({
        url: "../moduloSeguridad/php/consultarColaOrdenes.php",
        type: "post",
        data: {},
        dataType: 'json',

        success: function(response){
            
            var tbody = document.querySelector('#colaPlatos tbody');
            tbody.innerHTML = '';

            for(var i = 0; i<response.length;i++){
                
                var fila = tbody.insertRow(i);
                var celdaItem = fila.insertCell(0);
                var celdaOrden = fila.insertCell(1);
                var celdaPlato = fila.insertCell(2);
                var celdaCantidad = fila.insertCell(3);
                var celdaEstado = fila.insertCell(4);
                var celdaIconos = fila.insertCell(5);
                
                celdaItem.innerHTML = response[i]['id_item'];
                celdaItem.setAttribute('class', 'itemOculto');
                celdaOrden.innerHTML = response[i]['id_orden'];
                celdaPlato.innerHTML = response[i]['nombre_plato'];
                celdaCantidad.innerHTML = response[i]['cantidad'];
                
                var cuadro = document.createElement('input');
                cuadro.setAttribute('type','text');
                cuadro.setAttribute('class','color');
                cuadro.setAttribute('disabled','true');
                
                switch(response[i]['estado']){
                    case 'Pendiente':
                        cuadro.style.background = '#FF5050';
                        break;
                    case 'Listo para entregar':
                        cuadro.style.background = '#FFFF66';
                        break;
                    case 'Entregado':
                        cuadro.style.background = '#00CC00';
                        break;
                        /*
                    case 'En tránsito':
                        cuadro.style.background = '#3399FF';
                        break;
                        */
                    default:
                }
                celdaEstado.appendChild(cuadro);
                
                var estado = crearListaEstados(response[i]['estado']);
                estado.setAttribute('id', 'sltEstados'+i);
                var idEstado = 'sltEstados'+i;
                celdaEstado.appendChild(estado);
                celdaIconos.innerHTML = '<i class="fa fa-check" onclick="cambiarEstado(this)"></i>';
            }
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}

function crearListaEstados(seleccion){
    var sltEstados = document.createElement("select"),
        option1 = document.createElement('option'),
        option2 = document.createElement('option'),
        option3 = document.createElement('option'),
        option4 = document.createElement('option');
        
    option1.text = 'Pendiente';
    option2.text = 'Listo para entregar';
    option3.text = 'Entregado';
    //option4.text = 'En tránsito';
    
    sltEstados.add(option1);
    sltEstados.add(option2);
    sltEstados.add(option3);
    //sltEstados.add(option4);
    sltEstados.value = seleccion;
    return sltEstados;
}

function cambiarEstado(check){
    var rowIndex = check.parentNode.parentNode.rowIndex;
    var row = document.getElementsByTagName("tr")[rowIndex];
    var i = rowIndex-1;
    var peticion = $.ajax({
        url: "../moduloSeguridad/php/modificarEstadoPlatoOrden.php",
        type: "post",
        data: {
            'pidItem' : row.cells[0].innerHTML,
            'pestado' : document.querySelector('#sltEstados'+i).value
        },
        dataType: 'json',

        success: function(response){
            location.reload();
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}

function contarPlatos(){
    var peticion = $.ajax({
        url: "../moduloSeguridad/php/contarPlatosLocales.php",
        type: "post",
        data: {},
        dataType: 'json',
    
        success: function(response){
            for(var i=0; i<response.length;i++){
                switch(response[i]['estado']){
                    case 'Pendiente':
                        document.querySelector('#txtPendientes').value = response[i]['cantidad'];
                        break;
                    case 'Listo para entregar':
                        document.querySelector('#txtListos').value = response[i]['cantidad'];
                        break;
                    case 'Entregado':
                        document.querySelector('#txtEntregados').value = response[i]['cantidad'];
                        break;
                    default:
                }
            }
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}