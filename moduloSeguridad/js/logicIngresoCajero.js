var btnFacturar = document.querySelector('#btnFacturar');

var mesa1=document.querySelector('#mesa1');
var mesa2=document.querySelector('#mesa2');
var mesa3=document.querySelector('#mesa3');
var mesa4=document.querySelector('#mesa4');
var mesa5=document.querySelector('#mesa5');
var mesa6=document.querySelector('#mesa6');
var mesa7=document.querySelector('#mesa7');
var mesa8=document.querySelector('#mesa8');
var mesa9=document.querySelector('#mesa9');
var mesa10=document.querySelector('#mesa10');
var mesaSeleccionada=0;

var btnMas = document.querySelector('#btnMas');
var btnMenos = document.querySelector('#btnMenos');
var msjReviseCampos = document.getElementById("msjReviseCampos");
var msjPuntosInsuficientes = document.getElementById("msjPuntosInsuficientes");
var usuarioInexistente = document.getElementById("usuarioInexistente");

var btnBuscar = document.querySelector('#buscar');
var btnRedimir = document.getElementById("btnRedimir");
var sPuntosDisponibles = document.querySelector('#txtPtsDisponibles');
var sNombreCliente= document.querySelector('#txtNombre');
var sUsername = document.querySelector('#txtUsername');
var sPuntos= document.querySelector("#sltAgregar");

$('#txtUsername').on('input', function() { 
    $('#txtPtsDisponibles').val(""); // get the current value of the input field.
});

$('#txtUsername').on('input', function() { 
    $('#txtNombre').val(""); // get the current value of the input field.
});


msjPuntosInsuficientes.classList.add('oculto');
msjReviseCampos.classList.add('oculto');
usuarioInexistente.classList.add('oculto');

llenarDropDown();

btnBuscar.addEventListener('click', function(){
      var peticion = $.ajax({
            url: "../moduloSeguridad/php/consultarPuntos.php",
            type: "post",
            data: {
            'pusuario' : sUsername.value,

                   },
            dataType: 'json',

            success: function(response){
                if(response.length == 0){
                    usuarioInexistente.classList.remove('oculto');
                } else {
                    usuarioInexistente.classList.add('oculto');
                    sPuntosDisponibles.value = response[0]['puntos'];
                    sNombreCliente.value = response[0]['primer_nombre']+" "+response[0]['primer_apellido'];
                }
            },
  
            error: function(request, error) {
                alert(error);
            }
      });
  });

mesa1.classList.add('defaultBorder');
mesa2.classList.add('defaultBorder');
mesa3.classList.add('defaultBorder');
mesa4.classList.add('defaultBorder');
mesa5.classList.add('defaultBorder');
mesa6.classList.add('defaultBorder');
mesa7.classList.add('defaultBorder');
mesa8.classList.add('defaultBorder');
mesa9.classList.add('defaultBorder');
mesa10.classList.add('defaultBorder');

mesa1.addEventListener('click', function(){
    document.querySelector('#tablaProductos tbody').innerHTML="";
	if (mesaSeleccionada==1) {
		mesa1.classList.remove('seleccionado');
		mesaSeleccionada=0;
	}else{
		mesa1.classList.add('seleccionado');
		mesa2.classList.remove('seleccionado');
		mesa3.classList.remove('seleccionado');
		mesa4.classList.remove('seleccionado');
		mesa5.classList.remove('seleccionado');
		mesa6.classList.remove('seleccionado');
		mesa7.classList.remove('seleccionado');
		mesa8.classList.remove('seleccionado');
		mesa9.classList.remove('seleccionado');
		mesa10.classList.remove('seleccionado');
		mesaSeleccionada=1;
		llenarTabla(mesaSeleccionada);
	}
});

mesa2.addEventListener('click', function(){
    document.querySelector('#tablaProductos tbody').innerHTML="";
	if (mesaSeleccionada==2) {
		mesa2.classList.remove('seleccionado');
		mesa2.classList.add('noDisponibleBorder');
		mesaSeleccionada=0;
	}else{
		mesa1.classList.remove('seleccionado');
		mesa1.classList.add('disponibleBorder');
		mesa2.classList.add('seleccionado');
		mesa3.classList.remove('seleccionado');
		mesa4.classList.remove('seleccionado');
		mesa5.classList.remove('seleccionado');
		mesa6.classList.remove('seleccionado');
		mesa7.classList.remove('seleccionado');
		mesa8.classList.remove('seleccionado');
		mesa9.classList.remove('seleccionado');
		mesa10.classList.remove('seleccionado');
		mesaSeleccionada=2;
		llenarTabla(mesaSeleccionada);
	}
});

mesa3.addEventListener('click', function(){
    document.querySelector('#tablaProductos tbody').innerHTML="";
	if (mesaSeleccionada==3) {
		mesa3.classList.remove('seleccionado');
		mesaSeleccionada=0;
	}else{
		mesa1.classList.remove('seleccionado');
		mesa2.classList.remove('seleccionado');
		mesa3.classList.add('seleccionado');
		mesa4.classList.remove('seleccionado');
		mesa5.classList.remove('seleccionado');
		mesa6.classList.remove('seleccionado');
		mesa7.classList.remove('seleccionado');
		mesa8.classList.remove('seleccionado');
		mesa9.classList.remove('seleccionado');
		mesa10.classList.remove('seleccionado');
		mesaSeleccionada=3;
		llenarTabla(mesaSeleccionada);
	}
});

mesa4.addEventListener('click', function(){
    document.querySelector('#tablaProductos tbody').innerHTML="";
	if (mesaSeleccionada==4) {
		mesa4.classList.remove('seleccionado');
		mesaSeleccionada=0;
	}else{
		mesa1.classList.remove('seleccionado');
		mesa2.classList.remove('seleccionado');
		mesa3.classList.remove('seleccionado');
		mesa4.classList.add('seleccionado');
		mesa5.classList.remove('seleccionado');
		mesa6.classList.remove('seleccionado');
		mesa7.classList.remove('seleccionado');
		mesa8.classList.remove('seleccionado');
		mesa9.classList.remove('seleccionado');
		mesa10.classList.remove('seleccionado');
		mesaSeleccionada=4;
		llenarTabla(mesaSeleccionada);
	}
});

mesa5.addEventListener('click', function(){
    document.querySelector('#tablaProductos tbody').innerHTML="";
	if (mesaSeleccionada==5) {
		mesa5.classList.remove('seleccionado');
		mesaSeleccionada=0;
	}else{
		mesa1.classList.remove('seleccionado');
		mesa2.classList.remove('seleccionado');
		mesa3.classList.remove('seleccionado');
		mesa4.classList.remove('seleccionado');
		mesa5.classList.add('seleccionado');
		mesa6.classList.remove('seleccionado');
		mesa7.classList.remove('seleccionado');
		mesa8.classList.remove('seleccionado');
		mesa9.classList.remove('seleccionado');
		mesa10.classList.remove('seleccionado');
		mesaSeleccionada=5;
		llenarTabla(mesaSeleccionada);
	}
});

mesa6.addEventListener('click', function(){
    document.querySelector('#tablaProductos tbody').innerHTML="";
	if (mesaSeleccionada==6) {
		mesa6.classList.remove('seleccionado');
		mesaSeleccionada=0;
	}else{
		mesa1.classList.remove('seleccionado');
		mesa2.classList.remove('seleccionado');
		mesa3.classList.remove('seleccionado');
		mesa4.classList.remove('seleccionado');
		mesa5.classList.remove('seleccionado');
		mesa6.classList.add('seleccionado');
		mesa7.classList.remove('seleccionado');
		mesa8.classList.remove('seleccionado');
		mesa9.classList.remove('seleccionado');
		mesa10.classList.remove('seleccionado');
		mesaSeleccionada=6;
		llenarTabla(mesaSeleccionada);
	}
});

mesa7.addEventListener('click', function(){
    document.querySelector('#tablaProductos tbody').innerHTML="";
	if (mesaSeleccionada==7) {
		mesa7.classList.remove('seleccionado');
		mesaSeleccionada=0;
	}else{
		mesa1.classList.remove('seleccionado');
		mesa2.classList.remove('seleccionado');
		mesa3.classList.remove('seleccionado');
		mesa4.classList.remove('seleccionado');
		mesa5.classList.remove('seleccionado');
		mesa6.classList.remove('seleccionado');
		mesa7.classList.add('seleccionado');
		mesa8.classList.remove('seleccionado');
		mesa9.classList.remove('seleccionado');
		mesa10.classList.remove('seleccionado');
		mesaSeleccionada=7;
		llenarTabla(mesaSeleccionada);
	}
});

mesa8.addEventListener('click', function(){
    document.querySelector('#tablaProductos tbody').innerHTML="";
	if (mesaSeleccionada==8) {
		mesa8.classList.remove('seleccionado');
		mesa8.classList.add('normal');
		mesaSeleccionada=0;
	}else{
		mesa1.classList.remove('seleccionado');
		mesa2.classList.remove('seleccionado');
		mesa3.classList.remove('seleccionado');
		mesa4.classList.remove('seleccionado');
		mesa5.classList.remove('seleccionado');
		mesa6.classList.remove('seleccionado');
		mesa7.classList.remove('seleccionado');
		mesa8.classList.add('seleccionado');
		mesa9.classList.remove('seleccionado');
		mesa10.classList.remove('seleccionado');
		mesaSeleccionada=8;
		llenarTabla(mesaSeleccionada);
	}
});

mesa9.addEventListener('click', function(){
    document.querySelector('#tablaProductos tbody').innerHTML="";
	if (mesaSeleccionada==9) {
		mesa9.classList.remove('seleccionado');
		mesa9.classList.add('disponibleBorder');
		mesaSeleccionada=0;
	}else{
		mesa1.classList.remove('seleccionado');
		mesa2.classList.remove('seleccionado');
		mesa3.classList.remove('seleccionado');
		mesa4.classList.remove('seleccionado');
		mesa5.classList.remove('seleccionado');
		mesa6.classList.remove('seleccionado');
		mesa7.classList.remove('seleccionado');
		mesa8.classList.remove('seleccionado');
		mesa9.classList.add('seleccionado');
		mesa10.classList.remove('seleccionado');
		mesaSeleccionada=9;
		llenarTabla(mesaSeleccionada);
	}
});

mesa10.addEventListener('click', function(){
    document.querySelector('#tablaProductos tbody').innerHTML="";
	if (mesaSeleccionada==10) {
		mesa10.classList.remove('seleccionado');
		mesaSeleccionada=0;
		
	}else{
		mesa1.classList.remove('seleccionado');
		mesa2.classList.remove('seleccionado');
		mesa3.classList.remove('seleccionado');
		mesa4.classList.remove('seleccionado');
		mesa5.classList.remove('seleccionado');
		mesa6.classList.remove('seleccionado');
		mesa7.classList.remove('seleccionado');
		mesa8.classList.remove('seleccionado');
		mesa9.classList.remove('seleccionado');
		mesa10.classList.add('seleccionado');
		mesaSeleccionada=10;
		llenarTabla(mesaSeleccionada);
	}
	
});

otrasMesas.addEventListener('change', function(){
  document.querySelector('#tablaProductos tbody').innerHTML="";
  mesaSeleccionada=this.value;
  llenarTabla(mesaSeleccionada);
});

function llenarDropDown(){
    var otrasMesas = document.querySelector('#otrasMesas');
    var i;
    for(i=otrasMesas.options.length-1;i>=0;i--){
        otrasMesas.remove(i);
    }
    var peticion2 = $.ajax({
        url: "../moduloConfiguracion/php/consultarTodasLasMesas.php",
        type: "post",
        data: {
        
        },
        dataType: 'json',
        success: function(response2){
            var option2 = document.createElement('option');
            option2.text = "--Seleccione--";
            option2.value="";
            otrasMesas.add(option2);
            for (var j = 10; j<response2.length;j++) {
                    var option = document.createElement('option');
                    option.text = response2[j]['nombre_mesa'];
                    option.setAttribute("id","mesa"+(j+1));
                    option.value=j+1;
                    option.setAttribute("onclick", "llenarTabla("+option.value+")");
                    otrasMesas.add(option);
            }
        },
        error: function(request, error){
        
        }
    });
}

btnAgregar.addEventListener("click", function(){
    var peticion = $.ajax({
            url: "../moduloSeguridad/php/modificarPuntos.php",
            type: "post",
            data: {
                 'ppuntos' : sPuntosDisponibles.value, //* + sPuntos.value,
                 'pusername' : sUsername.value
                   },
            dataType: 'json',

            success: function(response){
                
                location.reload();
              
            },
            error: function(request, error) {
            }
  });

});


function llenarTabla(numMesa){
    document.querySelector('#tablaProductos tbody').innerHTML="";
    $.ajax({
        url: "../moduloCore/php/consultarOrdenMesa.php",
        type: "POST",
        data: {
            numMesa: mesaSeleccionada
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
            },
        });
    }
    
btnFacturar.addEventListener('click', function(){
    window.location = "../moduloCore/factura.php?numMesa="+mesaSeleccionada;
});
    


