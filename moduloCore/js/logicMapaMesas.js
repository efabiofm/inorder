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
var mesas=document.getElementsByClassName("mesa");
var mesasOcupadas=[];
var mesaSeleccionada=0;
var btnOrden = document.querySelector('#btnOrden');
var msjConfirmacion = document.querySelector('#msjConfirmacion');
var mensaje = document.querySelector('#mensaje');

msjConfirmacion.classList.add('oculto');
mesa1.classList.add('border');
mesa2.classList.add('border');
mesa3.classList.add('border');
mesa4.classList.add('border');
mesa5.classList.add('border');
mesa6.classList.add('border');
mesa7.classList.add('border');
mesa8.classList.add('border');
mesa9.classList.add('border');
mesa10.classList.add('border');

pintarMesas();
llenarDropDown();

mesa1.addEventListener('click', function(){
	if (mesaSeleccionada==1) {
		mesa1.classList.remove('seleccionado');
		mesa1.classList.add('border');
	}else{
		mesa1.classList.remove('border');
		mesa1.classList.add('seleccionado');
		mesa2.classList.remove('seleccionado');
		mesa2.classList.add('border');
		mesa3.classList.remove('seleccionado');
		mesa3.classList.add('border');
		mesa4.classList.remove('seleccionado');
		mesa4.classList.add('border');
		mesa5.classList.remove('seleccionado');
		mesa5.classList.add('border');
		mesa6.classList.remove('seleccionado');
		mesa6.classList.add('border');
		mesa7.classList.remove('seleccionado');
		mesa7.classList.add('border');
		mesa8.classList.remove('seleccionado');
		mesa8.classList.add('border');
		mesa9.classList.remove('seleccionado');
		mesa9.classList.add('border');
		mesa10.classList.remove('seleccionado');
		mesa10.classList.add('border');
		mesaSeleccionada=1;
	};
	llenarTabla(mesaSeleccionada);
});

mesa2.addEventListener('click', function(){
	if (mesaSeleccionada==2) {
		mesa2.classList.remove('seleccionado');
		mesa2.classList.add('border');
	}else{
		mesa1.classList.remove('seleccionado');
		mesa1.classList.add('border');
		mesa2.classList.remove('border');
		mesa2.classList.add('seleccionado');
		mesa3.classList.remove('seleccionado');
		mesa3.classList.add('border');
		mesa4.classList.remove('seleccionado');
		mesa4.classList.add('border');
		mesa5.classList.remove('seleccionado');
		mesa5.classList.add('border');
		mesa6.classList.remove('seleccionado');
		mesa6.classList.add('border');
		mesa7.classList.remove('seleccionado');
		mesa7.classList.add('border');
		mesa8.classList.remove('seleccionado');
		mesa8.classList.add('border');
		mesa9.classList.remove('seleccionado');
		mesa9.classList.add('border');
		mesa10.classList.remove('seleccionado');
		mesa10.classList.add('border');
		mesaSeleccionada=2;
	};
	llenarTabla(mesaSeleccionada);
});

mesa3.addEventListener('click', function(){
	if (mesaSeleccionada==3) {
		mesa3.classList.remove('seleccionado');
		mesa3.classList.add('border');
	}else{
		mesa1.classList.remove('seleccionado');
		mesa1.classList.add('border');
		mesa2.classList.remove('seleccionado');
		mesa2.classList.add('border');
		mesa3.classList.remove('border');
		mesa3.classList.add('seleccionado');
		mesa4.classList.remove('seleccionado');
		mesa4.classList.add('border');
		mesa5.classList.remove('seleccionado');
		mesa5.classList.add('border');
		mesa6.classList.remove('seleccionado');
		mesa6.classList.add('border');
		mesa7.classList.remove('seleccionado');
		mesa7.classList.add('border');
		mesa8.classList.remove('seleccionado');
		mesa8.classList.add('border');
		mesa9.classList.remove('seleccionado');
		mesa9.classList.add('border');
		mesa10.classList.remove('seleccionado');
		mesa10.classList.add('border');
		mesaSeleccionada=3;
	};
	llenarTabla(mesaSeleccionada);
});

mesa4.addEventListener('click', function(){
	if (mesaSeleccionada==4) {
		mesa4.classList.remove('seleccionado');
		mesa4.classList.add('border');
	}else{
		mesa1.classList.remove('seleccionado');
		mesa1.classList.add('border');
		mesa2.classList.remove('seleccionado');
		mesa2.classList.add('border');
		mesa3.classList.remove('seleccionado');
		mesa3.classList.add('border');
		mesa4.classList.remove('border');
		mesa4.classList.add('seleccionado');
		mesa5.classList.remove('seleccionado');
		mesa5.classList.add('border');
		mesa6.classList.remove('seleccionado');
		mesa6.classList.add('border');
		mesa7.classList.remove('seleccionado');
		mesa7.classList.add('border');
		mesa8.classList.remove('seleccionado');
		mesa8.classList.add('border');
		mesa9.classList.remove('seleccionado');
		mesa9.classList.add('border');
		mesa10.classList.remove('seleccionado');
		mesa10.classList.add('border');
		mesaSeleccionada=4;
	};
	llenarTabla(mesaSeleccionada);
});

mesa5.addEventListener('click', function(){
	if (mesaSeleccionada==5) {
		mesa5.classList.remove('seleccionado');
		mesa5.classList.add('border');
	}else{
		mesa1.classList.remove('seleccionado');
		mesa1.classList.add('border');
		mesa2.classList.remove('seleccionado');
		mesa2.classList.add('border');
		mesa3.classList.remove('seleccionado');
		mesa3.classList.add('border');
		mesa4.classList.remove('seleccionado');
		mesa4.classList.add('border');
		mesa5.classList.remove('border');
		mesa5.classList.add('seleccionado');
		mesa6.classList.remove('seleccionado');
		mesa6.classList.add('border');
		mesa7.classList.remove('seleccionado');
		mesa7.classList.add('border');
		mesa8.classList.remove('seleccionado');
		mesa8.classList.add('border');
		mesa9.classList.remove('seleccionado');
		mesa9.classList.add('border');
		mesa10.classList.remove('seleccionado');
		mesa10.classList.add('border');
		mesaSeleccionada=5;
	};
	llenarTabla(mesaSeleccionada);
});

mesa6.addEventListener('click', function(){
	if (mesaSeleccionada==6) {
		mesa6.classList.remove('seleccionado');
		mesa6.classList.add('border');
	}else{
		mesa1.classList.remove('seleccionado');
		mesa1.classList.add('border');
		mesa2.classList.remove('seleccionado');
		mesa2.classList.add('border');
		mesa3.classList.remove('seleccionado');
		mesa3.classList.add('border');
		mesa4.classList.remove('seleccionado');
		mesa4.classList.add('border');
		mesa5.classList.remove('seleccionado');
		mesa5.classList.add('border');
		mesa6.classList.remove('border');
		mesa6.classList.add('seleccionado');
		mesa7.classList.remove('seleccionado');
		mesa7.classList.add('border');
		mesa8.classList.remove('seleccionado');
		mesa8.classList.add('border');
		mesa9.classList.remove('seleccionado');
		mesa9.classList.add('border');
		mesa10.classList.remove('seleccionado');
		mesa10.classList.add('border');
		mesaSeleccionada=6;
	};
	llenarTabla(mesaSeleccionada);
});

mesa7.addEventListener('click', function(){
	if (mesaSeleccionada==7) {
		mesa7.classList.remove('seleccionado');
		mesa7.classList.add('border');
	}else{
		mesa1.classList.remove('seleccionado');
		mesa1.classList.add('border');
		mesa2.classList.remove('seleccionado');
		mesa2.classList.add('border');
		mesa3.classList.remove('seleccionado');
		mesa3.classList.add('border');
		mesa4.classList.remove('seleccionado');
		mesa4.classList.add('border');
		mesa5.classList.remove('seleccionado');
		mesa5.classList.add('border');
		mesa6.classList.remove('seleccionado');
		mesa6.classList.add('border');
		mesa7.classList.remove('border');
		mesa7.classList.add('seleccionado');
		mesa8.classList.remove('seleccionado');
		mesa8.classList.add('border');
		mesa9.classList.remove('seleccionado');
		mesa9.classList.add('border');
		mesa10.classList.remove('seleccionado');
		mesa10.classList.add('border');
		mesaSeleccionada=7;
	};
	llenarTabla(mesaSeleccionada);
});

mesa8.addEventListener('click', function(){
	if (mesaSeleccionada==8) {
		mesa8.classList.remove('seleccionado');
		mesa8.classList.add('border');
	}else{
		mesa1.classList.remove('seleccionado');
		mesa1.classList.add('border');
		mesa2.classList.remove('seleccionado');
		mesa2.classList.add('border');
		mesa3.classList.remove('seleccionado');
		mesa3.classList.add('border');
		mesa4.classList.remove('seleccionado');
		mesa4.classList.add('border');
		mesa5.classList.remove('seleccionado');
		mesa5.classList.add('border');
		mesa6.classList.remove('seleccionado');
		mesa6.classList.add('border');
		mesa7.classList.remove('seleccionado');
		mesa7.classList.add('border');
		mesa8.classList.remove('border');
		mesa8.classList.add('seleccionado');
		mesa9.classList.remove('seleccionado');
		mesa9.classList.add('border');
		mesa10.classList.remove('seleccionado');
		mesa10.classList.add('border');
		mesaSeleccionada=8;
	};
	llenarTabla(mesaSeleccionada);
});

mesa9.addEventListener('click', function(){
	if (mesaSeleccionada==9) {
		mesa9.classList.remove('seleccionado');
		mesa9.classList.add('border');
	}else{
		mesa1.classList.remove('seleccionado');
		mesa1.classList.add('border');
		mesa2.classList.remove('seleccionado');
		mesa2.classList.add('border');
		mesa3.classList.remove('seleccionado');
		mesa3.classList.add('border');
		mesa4.classList.remove('seleccionado');
		mesa4.classList.add('border');
		mesa5.classList.remove('seleccionado');
		mesa5.classList.add('border');
		mesa6.classList.remove('seleccionado');
		mesa6.classList.add('border');
		mesa7.classList.remove('seleccionado');
		mesa7.classList.add('border');
		mesa8.classList.remove('seleccionado');
		mesa8.classList.add('noDisponibleBorder');
		mesa9.classList.remove('border');
		mesa9.classList.add('seleccionado');
		mesa10.classList.remove('seleccionado');
		mesa10.classList.add('border');
		mesaSeleccionada=9;
	};
	llenarTabla(mesaSeleccionada);
});

mesa10.addEventListener('click', function(){
	if (mesaSeleccionada==10) {
		mesa10.classList.remove('seleccionado');
		mesa10.classList.add('border');
	}else{
		mesa1.classList.remove('seleccionado');
		mesa1.classList.add('border');
		mesa2.classList.remove('seleccionado');
		mesa2.classList.add('border');
		mesa3.classList.remove('seleccionado');
		mesa3.classList.add('border');
		mesa4.classList.remove('seleccionado');
		mesa4.classList.add('border');
		mesa5.classList.remove('seleccionado');
		mesa5.classList.add('border');
		mesa6.classList.remove('seleccionado');
		mesa6.classList.add('border');
		mesa7.classList.remove('seleccionado');
		mesa7.classList.add('border');
		mesa8.classList.remove('seleccionado');
		mesa8.classList.add('border');
		mesa9.classList.remove('seleccionado');
		mesa9.classList.add('border');
		mesa10.classList.remove('border');
		mesa10.classList.add('seleccionado');
		mesaSeleccionada=10;
	};
	llenarTabla(mesaSeleccionada);
});

otrasMesas.addEventListener('change', function(){
  mesaSeleccionada=this.value;
  llenarTabla(mesaSeleccionada);
});

btnAceptar.addEventListener('click', function(){
	msjConfirmacion.classList.add('oculto');
	body.classList.remove('fade');
	window.location.assign('mapaMesas.php');
});

function pintarMesas(){
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/consultarTodasLasMesas.php",
        type: "post",
        data: {

               },
        dataType: 'json',
        success: function(response){
            for (var i = 0; i<response.length;i++){
                if (response[i]['estado']==="Libre") {
                	if(i<10){
                    	mesas[i].classList.add('disponible','border');
                    }
                }else{
                	if(i<10){
                    	mesas[i].classList.add('noDisponible','border');
                    	mesasOcupadas.push(i+1);
                    }else{
                    	mesasOcupadas.push(i+1);
                    }
                }
            }
        },

        error: function(request, error){
        }
    });
}

function llenarTabla(p1){
    var peticion = $.ajax({
            url: "../moduloCore/php/phpConsultarInfoMesa.php",
            type: "post",
            data: {
                'pmesa' : p1
            },
            dataType: 'json',

            success: function(response){
                mesaSeleccionada=p1;
                var numMesa = document.querySelector('#numMesa');
                var nomMesa = document.querySelector('#nomMesa');
                var capMesa = document.querySelector('#capMesa');
                var tipoMesa = document.querySelector('#tipoMesa');
                var descMesa = document.querySelector('#descMesa');
                numMesa.innerHTML = '';
                nomMesa.innerHTML = '';
                capMesa.innerHTML = '';
                tipoMesa.innerHTML = '';
                descMesa.innerHTML = '';
                
                numMesa.innerHTML = response[0]['numero_mesa'];
                nomMesa.innerHTML = response[0]['nombre_mesa'];
                capMesa.innerHTML = response[0]['capacidad'];
                tipoMesa.innerHTML = response[0]['tipo_mesa'];
                descMesa.innerHTML = response[0]['descripcion'];
            },
            error: function(request, error) {
            }
    });
}

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
               // if (response2[j]['estado']==="Libre") {
                    var option = document.createElement('option');
                    option.text = response2[j]['nombre_mesa'];
                    option.setAttribute("id","mesa"+(j+1));
                    option.value=j+1;
                    option.setAttribute("onclick", "llenarTabla("+option.value+")");
                    otrasMesas.add(option);
             //   }else{
                    
                }
        },
        error: function(request, error){
        
        }
    });
}


btnOrden.addEventListener('click', function() {

	if (mesaSeleccionada > 0){
	    var bError = false;

	    for (var i = mesasOcupadas.length - 1; i >= 0; i--) {
	        if (mesasOcupadas[i]==mesaSeleccionada) {
	            bError=true;
	        }
	    }
	    if (bError===false) {
	        $.ajax({
				type: 'POST',
				url: '../moduloCore/php/phpAgregarOrden.php',
				data: {'numero_mesa': mesaSeleccionada, 
						'estado' : "Activa"},
				dataType: 'json',
				success: function(response){
				},
				error: function(request, error){
		            ocuparMesa();
		            body.classList.add('fade');
		            mensaje.innerHTML = '';
	                mensaje.innerHTML = "¡Su orden ha sido agregada exitosamente!";
	                msjConfirmacion.classList.remove('oculto');
				}		

			});
	    } else {
	        body.classList.add('fade');
	        mensaje.innerHTML = '';
	        mensaje.innerHTML = "Por favor seleccione una mesa disponible";
	        msjConfirmacion.classList.remove('oculto');
	    }
	}
});

function ocuparMesa(){
    var estado = "Ocupada";
    var peticion = $.ajax({
        url: "../moduloCore/php/phpCambiarEstadoMesa.php",
        type: "post",
        data: {
            'pmesa' : mesaSeleccionada,
            'pestado' : estado
        },
        dataType: 'json',
        success: function(response){
        },
        error: function(request, error){
        }
    });
}

$("#btnPlatos").click(function(){

		$.ajax({
		url: "../moduloCore/php/phpConsultarOrdenesActivas.php",
        type: "post",
        data: {'mesa': mesaSeleccionada},
        dataType: 'json',

	    success: function(response){
        if(response.length>0){
            id_orden = response[0]['id_orden'];
            window.location = "../moduloCore/agregarPlatoOrden.php?id_orden="+id_orden;
        	}else{
        		var mensajeError = document.getElementById("error");
        		mensajeError.classList.remove("oculto");
        	}
    	},
	        
	    error: function(request, error) {
		    alert(error);
	    }
	})
});

$( ".btnClick" ).dblclick(function() {

	$.ajax({
		url: "../moduloCore/php/phpConsultarOrdenesActivas.php",
        type: "post",
        data: {'mesa': mesaSeleccionada},
        dataType: 'json',

	    success: function(response){
        if(response.length>0){
            id_orden = response[0]['id_orden'];
            window.location = "../moduloCore/agregarPlatoOrden.php?id_orden="+id_orden;
        	}else{
        		var mensajeError = document.getElementById("error");
        		mensajeError.classList.remove("oculto");
        	}
    	},
	        
	    error: function(request, error) {
		    alert(error);
	    }

	})
	 	
});