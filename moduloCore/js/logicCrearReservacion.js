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
var mesaSeleccionada=0;
var btnConsultar=document.querySelector('#btnConsultar');
var btnReservar=document.querySelector('#btnReservar');
var btnCancelar=document.querySelector('#btnCancelar');
var mensajeError=document.querySelector('#alert1');
var soloUnaMesa=document.querySelector('#soloUnaMesa');
var escojaMesa=document.querySelector('#escojaMesa');
var mesaNoDisp=document.querySelector('#mesaNoDisp');
var consultarFallo=document.querySelector('#consultarFallo');
var hora=document.querySelector('#hora');
var personas=document.querySelector('#personas');
var otrasMesas=document.querySelector('#otrasMesas');
var fecha=document.querySelector('#fecha');


mensajeError.classList.add('hidden');
soloUnaMesa.classList.add('hidden');
escojaMesa.classList.add('hidden');
mesaNoDisp.classList.add('hidden');
consultarFallo.classList.add('hidden');
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


mesa1.addEventListener('click', function(){
	if (mesaSeleccionada==1) {
		mesa1.classList.remove('seleccionado');
		mesa1.classList.add('border');
		mesaSeleccionada=0;
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
		mesaSeleccionada=0;
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
		mesaSeleccionada=0;
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
		mesaSeleccionada=0;
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
		mesaSeleccionada=0;
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
		mesaSeleccionada=0;
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
		mesaSeleccionada=0;
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
		mesaSeleccionada=0;
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
		mesaSeleccionada=0;
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
		mesaSeleccionada=0;
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

btnConsultar.addEventListener('click', function(){
    consultarMesas();
    llenarDropDown();
});


btnReservar.addEventListener('click', function(){
    var bError=false;
    var bError2=false;
    var peticion = $.ajax({
        url: "../moduloCore/php/phpConsultarMesasDisp.php",
        type: "post",
        data: {
            'pfecha' : fecha.value,
            'phora' : hora.value
        },
        dataType: 'json',
        success: function(response){
            for(var i = 0; i<response.length;i++){
                if(response[i]['numero_mesa']==mesaSeleccionada) {
                    bError2=true;
                }else{
                   
                }
            }
            if (fecha.value==='') {
                bError=true;
                fecha.classList.add('error');
            }else{
                fecha.classList.remove('error');
            }
        
            if (hora.value==='') {
                bError=true;
                hora.classList.add('error');
            }else{
                hora.classList.remove('error');
            }
        
            if (personas.value==='') {
                bError=true;
                personas.classList.add('error');
            }else{
                personas.classList.remove('error');
            }
    
            if (mesaSeleccionada===0 && otrasMesas.value==='') {
                escojaMesa.classList.remove('hidden');
                bError=true;
            }else{
                escojaMesa.classList.add('hidden');
            }
        
            if (mesaSeleccionada<10 && otrasMesas.value>0) {
                soloUnaMesa.classList.remove('hidden');
                bError=true;
            }else{
                soloUnaMesa.classList.add('hidden');
            }
            
            if (bError2===true&&bError===false){
                bError=true;
                mesaNoDisp.classList.remove('hidden');
            }else{
                mesaNoDisp.classList.add('hidden');
            }
            
            if (bError===true) {
                mensajeError.classList.remove('hidden');
                }else{
                mensajeError.classList.add('hidden');
                crearReservacion();
            }
        },
        error: function(request, error){
        }
    });
});

btnCancelar.addEventListener('click', function() {
	window.location.assign('../moduloSeguridad/ingresoCliente.php');
})

function crearReservacion(){
    var peticion = $.ajax({
        url: "../moduloCore/php/phpCrearReservacion.php",
        type: "post",
        data: {
            'pfecha' : fecha.value,
            'phora' : hora.value,
            'ppersonas' : personas.value,
            'pmesa' : mesaSeleccionada
        },
        dataType: 'json',
        success: function(response){
            window.location.assign('reservacionConfirmada.php');
        },
        error: function(request, error){
        }
    });
}

function consultarMesas(){
    var peticion = $.ajax({
        url: "../moduloCore/php/phpConsultarMesasDisp.php",
        type: "post",
        data: {
            'pfecha' : fecha.value,
            'phora' : hora.value
        },
        dataType: 'json',
        success: function(response){
            consultarFallo.classList.add('hidden');
            fecha.classList.remove('error');
            hora.classList.remove('error');
            if(response.length===0){
                for (var j = 0; j<mesas.length;j++) {
                    mesas[j].classList.remove('noDisponible','border');
                    mesas[j].classList.add('disponible','border');
                }
            }
            if(response.length>0){
                for(var i = 0; i<response.length;i++){
                    for (var k = 0; k<mesas.length;k++) {
                        if (response[i]['numero_mesa']==k+1) {
                            mesas[k].classList.remove('disponible','border');
                            mesas[k].classList.add('noDisponible','border');
                        }else{
                            mesas[k].classList.remove('noDisponible','border');
                            mesas[k].classList.add('disponible','border');
                        }
                    }
                }
            }
        },
        error: function(request, error){
            consultarFallo.classList.remove('hidden');
            fecha.classList.add('error');
            hora.classList.add('error');
        }
    });
}

function llenarDropDown(){
    var otrasMesas = document.querySelector('#otrasMesas');
    var i;
    for(i=otrasMesas.options.length-1;i>=0;i--)
    {
        otrasMesas.remove(i);
    }
    var peticion = $.ajax({
        url: "../moduloCore/php/phpConsultarMesasDisp.php",
        type: "post",
        data: {
            'pfecha' : fecha.value,
            'phora' : hora.value
        },
        dataType: 'json',
        success: function(response){
            var peticion2 = $.ajax({
                url: "../moduloConfiguracion/php/consultarTodasLasMesas.php",
                type: "post",
                data: {
                
                },
                dataType: 'json',
                success: function(response2){
                    if(response.length!==0){
                        var option2 = document.createElement('option');
                        option2.text = "--Seleccione--";
                        option2.value="";
                        otrasMesas.add(option2);
                        for (var j = 10; j<response2.length;j++) {
                            var option = document.createElement('option');
                            for (var i = 0; i<response.length;i++) {
                                if (response[i]['numero_mesa']==response2[j]['numero_mesa']) {
                                    
                                } else if(option.value===j+1){
                                    
                                } else {
                                    option.text = response2[j]['nombre_mesa'];
                                    option.setAttribute("id","mesa"+(j+1));
                                    option.value=j+1;
                                    option.setAttribute("onclick", "llenarTabla("+option.value+")");
                                    otrasMesas.add(option);
                                }
                            }
                        }
                    } else {
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
                    }
                },
                error: function(request, error){
                
                }
            }
        )},
        error: function(request, error){
        }
    });
}

function verificarMesa(){
    var peticion = $.ajax({
        url: "../moduloCore/php/phpConsultarMesasDisp.php",
        type: "post",
        data: {
            'pfecha' : fecha.value,
            'phora' : hora.value
        },
        dataType: 'json',
        success: function(response){
            for(var i = 0; i<response.length;i++){
                if(response[i]['numero_mesa']==mesaSeleccionada) {
                    bError2=true;
                }else{
                   
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