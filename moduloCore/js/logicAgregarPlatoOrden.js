
llenarInfoOrden();

llenarTabla();
function llenarTabla(){
    $.ajax({
        url: "../moduloCore/php/phpConsultarPlatosOrden.php",
        type: "POST",
        data: {id_orden: getUrlVars()['id_orden']},
        dataType: 'json',

        success: function(response){
        var tbody = document.querySelector('#tablaProductos tbody');

            for(var i = 0; i<response.length;i++){
                var fila = tbody.insertRow(i);
                var celdaCantidad = fila.insertCell(0);
                var celdaNombrePlato = fila.insertCell(1);
                var celdaPrecio = fila.insertCell(2);
                var celdaEstado = fila.insertCell(3);
                var celdaIdItem = fila.insertCell(4);
                var celdaEliminar = fila.insertCell(5);
                
                celdaCantidad.innerHTML = response[i]['cantidad'];
                celdaNombrePlato.innerHTML = response[i]['nombre_plato'];
                celdaPrecio.innerHTML = response[i]['precio'];
                celdaEstado.innerHTML = response[i]['estado'];
                celdaIdItem.innerHTML = response[i]['id_item'];
                celdaIdItem.setAttribute('class', 'itemOculto');
                celdaEliminar.innerHTML = '<i class="fa fa-trash" onclick="borrar(this)"></i>';
                }
            },
        });
    }    
    

function borrar(basurero){
    
    var tablaProductos = document.getElementById('tablaProductos');
    
    rowIndex = basurero.parentNode.parentNode.rowIndex;
    
    row = tablaProductos.getElementsByTagName("tr")[rowIndex];
    
    $.ajax({
        url: "../moduloCore/php/phpEliminarPlatoOrden.php",
        type: "post",
        data: {
            'pidItem' : row.cells[4].innerHTML
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


$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: '../moduloCore/php/phpPlatoOrden.php',
		data: {id:'lista'},
		success: function(response){ /* response devuelve un String (que puede ser un arreglo) 
										el cual viene del php (al hacer el print json_encode), 
										hay q convertirlo en un JSON */
			//document.write(response);//para ver si trae errores, borrar en codigo final
			var platos = JSON.parse(response); // convierte todo el String en un objeto
			var plato;  //es también un objeto

			for (var i=0; i<platos.length; i++){
				
				plato = platos[i];
				
				var select;
				var option;

				switch(plato.tipo_plato){

				case 'Plato fuerte':

					select = $('#listaPlatos'); //selecciona donde se va a insertar

					option = $('<option></option>');   // se crea un objeto de jquery option

					option.val(plato.precio);

					option.text(plato.nombre_plato);

					select.append(option); // ingresa el option al select

				break;

				case 'Coctel':

					select = $('#listaBebidas'); //selecciona donde se va a insertar

					option = $('<option></option>');   // se crea un objeto de jquery option

					option.val(plato.precio);

					option.text(plato.nombre_plato);

					select.append(option); // ingresa el option al select

				break;


				}		

			}

		},

        error: function(request, error){
            alert('Error al obtener lista de platos');
        },

	});


});

var mensajeError = document.getElementById("msjError");
var cantidadBebida = document.getElementById("cantidadBebida");
var tipoBebida = document.getElementById("listaBebidas");
var submitBebida = document.getElementById("submitBebida");

function validarBebida(){
	if(cantidadBebida.value<=0 && tipoBebida.value === "--Seleccione--"){
		cantidadBebida.classList.add("error");
		tipoBebida.classList.add("error");
		mensajeError.classList.remove("oculto");
	}else{
		if(cantidadBebida.value<=0){
			cantidadBebida.classList.add("error");
			tipoBebida.classList.remove("error");
			mensajeError.classList.remove("oculto");
		}else{
			if(tipoBebida.value=== "--Seleccione--"){
				tipoBebida.classList.add("error");
				cantidadBebida.classList.remove("error");
				mensajeError.classList.remove("oculto");
			}else{
				cantidadBebida.classList.remove("error");
				tipoBebida.classList.remove("error");
				mensajeError.classList.add("oculto");
				
				var cantidad = $('#cantidadBebida').val();
				var producto = $('#listaBebidas option:selected').text();
				var precio = $('#listaBebidas').val();
				var precioTotal = cantidad*precio;
				var estado = 'Pendiente';


                    $.ajax({
                        type: 'POST',
                        url: '../moduloCore/php/phpPlatoOrden.php',
                        data:{
                            id_orden: getUrlVars()['id_orden'],
                            nombre_plato: producto,
                            estado: 'Pendiente',
                            cantidad: cantidad,   
                            precio: precioTotal,
                        },
                        success: function(response){
                            location.reload();
                        },
                        error: function(request, error){
                            alert('Error al agregar plato');
                        },                    
                    });
                    
                }
            }	
        }
    }

submitBebida.addEventListener("click", validarBebida);

var cantidadPlato = document.getElementById("cantidadPlato");
var tipoPlato = document.getElementById("listaPlatos");
var submitPlato = document.getElementById("submitPlato");


function validarPlato(){
	if(cantidadPlato.value<=0 && tipoPlato.value === "--Seleccione--"){
		cantidadPlato.classList.add("error");
		tipoPlato.classList.add("error");
		mensajeError.classList.remove("oculto");
	}else{
		if(cantidadPlato.value<=0){
			cantidadPlato.classList.add("error");
			tipoPlato.classList.remove("error");
			mensajeError.classList.remove("oculto");
		}else{
			if(tipoPlato.value=== "--Seleccione--"){
				tipoPlato.classList.add("error");
				cantidadPlato.classList.remove("error");
				mensajeError.classList.remove("oculto");
			}else{
				cantidadPlato.classList.remove("error");
				tipoPlato.classList.remove("error");
				mensajeError.classList.add("oculto");

				var cantidad = $('#cantidadPlato').val();  //devuelve el valor de cantidad
				var producto = $('#listaPlatos option:selected').text();
				var precio = $('#listaPlatos').val();
				var precioTotal = cantidad*precio;
				var estado = 'Pendiente';
				
                    $.ajax({
                        type: 'POST',
                        url: '../moduloCore/php/phpPlatoOrden.php',
                        data:{
                            id_orden: getUrlVars()['id_orden'],
                            nombre_plato: producto,
                            estado: 'Pendiente',
                            cantidad: cantidad,   
                            precio: precioTotal,
                        },
                        success: function(response){
                            location.reload();
                        },
                        error: function(request, error){
                            alert('Error al agregar plato');
                        },                    
                    });
                }
            }	
        }
    }

submitPlato.addEventListener("click", validarPlato);

var cantidadPromocion = document.getElementById("cantidadPromocion");
var tipoPromocion = document.getElementById("listaPromociones");
var submitPromocion = document.getElementById("submitPromo");

function validarPromocion(){
	if(cantidadPromocion.value<=0 && tipoPromocion.value === "--Seleccione--"){
		cantidadPromocion.classList.add("error");
		tipoPromocion.classList.add("error");
		mensajeError.classList.remove("oculto");
	}else{
		if(cantidadPromocion.value<=0){
			cantidadPromocion.classList.add("error");
			tipoPromocion.classList.remove("error");
			mensajeError.classList.remove("oculto");
		}else{
			if(tipoPromocion.value=== "--Seleccione--"){
				tipoPromocion.classList.add("error");
				cantidadPromocion.classList.remove("error");
				mensajeError.classList.remove("oculto");
			}else{
				cantidadPromocion.classList.remove("error");
				tipoPromocion.classList.remove("error");
				mensajeError.classList.add("oculto");

				//incluir en tabla??
			}
		}	
	}
}

submitPromocion.addEventListener("click", validarPromocion);

document.getElementById('btnRegresar').addEventListener('click', function(){
        window.location.assign('mapaMesas.php'); 
});

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
    });
    return vars;
}

function llenarInfoOrden(){
    var peticion = $.ajax({
            url: "../moduloCore/php/consultarInfoOrdenes.php",
            type: "post",
            data: {id_orden: getUrlVars()['id_orden']},
            dataType: 'json',

            success: function(response){
                document.querySelector('#numOrden').innerHTML = getUrlVars()['id_orden']; 
                document.querySelector('#numMesa').innerHTML = response[0]['numero_mesa'];
                document.querySelector('#salonero').innerHTML = response[0]['username_salonero'];
            
            },
            
            error: function(request, error) {
                alert(error);
            }

     });
} 