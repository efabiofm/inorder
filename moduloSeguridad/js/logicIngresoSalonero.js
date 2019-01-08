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
            
            llenarTabla(fecha);
            
            function llenarTabla(pfecha){
                
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
                    },
                    error: function(){
                        alert('Imposible recuperar información de órdenes');
                    }
                    
                });
                
            }
        },
    });
}  


    //TERMINA CODIGO GABRIEL 

var ordenesActivas = document.querySelector('#ordenesActivas');

llenarOrdenesActivas();

function llenarOrdenesActivas(){

    var peticion = $.ajax({
            url: "../moduloSeguridad/php/phpConsultarOrdenesXMesero.php",
            type: "post",
            data: {
                
            },
            dataType: 'json',

            success: function(response){
                var a = [];
                var div = [];
                var table = [];
                var tbody = [];
                for (var i = 0; i < response.length; i++) {
                    var numeroOrden = response[i]['id_orden'];
                    var numMesa = response[i]['numero_mesa'];
                    llenarOrdenesActivas2(a,div,table,tbody,i,numeroOrden,numMesa);
                    alert("termina iterracion "+(i+1));
                }
            },
            error: function(request, error) {
            
            }
    });
}

function llenarOrdenesActivas2(a,div,table,tbody,i,numeroOrden,numMesa){
    var peticion2 = $.ajax({
                        url: "../moduloSeguridad/php/phpConsultarPlatosXOrden.php",
                        type: "post",
                        data: {
                            'porden' : numeroOrden
                        },
                        dataType: 'json',
            
                        success: function(response2){
                            a[i] = document.createElement('a');
                            a[i].href = "#";
                            ordenesActivas.appendChild(a[i]);
                            div[i] = document.createElement('div');
                            div[i].classList.add('orden');
                            div[i].setAttribute('id',"orden"+(i+1));
                            a[i].appendChild(div[i]);
                            table[i] = document.createElement('table');
                            table[i].classList.add('tableroOrdenes');
                            div[i].appendChild(table[i]);
                            tbody[i] = document.createElement('tbody');
                            table[i].appendChild(tbody[i]);
                            tbody[i].innerHTML = '';
                            var fila = tbody[i].insertRow(0);
                            fila.classList.add('encabezado')
                            var celda1 = fila.insertCell(0);
                            var celda2 = fila.insertCell(1);
                            var celda3 = fila.insertCell(2);
                            celda1.innerHTML = "Orden #";
                            celda2.innerHTML = numeroOrden;
                            celda3.innerHTML = "&nbsp";
                            celda3.classList.add('icono');
                            var fila2 = tbody[i].insertRow(1);
                            fila2.classList.add('encabezado')
                            var celda4 = fila2.insertCell(0);
                            var celda5 = fila2.insertCell(1);
                            var celda6 = fila2.insertCell(2);
                            celda4.innerHTML = "Mesa #";
                            celda5.innerHTML = numMesa;
                            celda6.innerHTML = "&nbsp";
                            celda6.classList.add('icono');
                            var fila3 = tbody[i].insertRow(2);
                            fila3.classList.add('filaImpar')
                            var celda7 = fila3.insertCell(0);
                            var celda8 = fila3.insertCell(1);
                            var celda9 = fila3.insertCell(2);
                            celda7.innerHTML = "Pendientes";
                            var pendientes = 0;
                            for (var k = 0; k < response2.length; k++) {
                                if (response2[k]['estado']==="Pendiente") {
                                    pendientes++;
                                }
                            }
                            celda8.innerHTML = pendientes;
                            celda9.innerHTML = "&nbsp";
                            celda9.classList.add('icono');
                            var fila4 = tbody[i].insertRow(3);
                            fila4.classList.add('filaPar')
                            var celda10 = fila4.insertCell(0);
                            var celda11 = fila4.insertCell(1);
                            var celda12 = fila4.insertCell(2);
                            celda10.innerHTML = "En proceso";
                            var enProceso = 0;
                            for (var l = 0; l < response2.length; l++) {
                                if (response2[l]['estado']==="En Proceso") {
                                    enProceso++;
                                }
                            }
                            celda11.innerHTML = enProceso;
                            celda12.innerHTML = "&nbsp";
                            celda12.classList.add('icono');
                            var fila5 = tbody[i].insertRow(4);
                            fila5.classList.add('filaImpar')
                            var celda13 = fila5.insertCell(0);
                            var celda14 = fila5.insertCell(1);
                            var celda15 = fila5.insertCell(2);
                            celda13.innerHTML = "Preparados";
                            var preparados = 0;
                            for (var m = 0; m < response2.length; m++) {
                                if (response2[m]['estado']==="Listo para entregar") {
                                    preparados++;
                                }
                            }
                            celda14.innerHTML = preparados;
                            if (preparados>0) {
                                var button = document.createElement('button');
                                button.type = "submit";
                                celda15.appendChild(button);
                                var icon = document.createElement('i');
                                icon.setAttribute('class','fa fa-check-square-o');
                                button.appendChild(icon);
                            } else {
                                celda15.innerHTML = "&nbsp";
                                celda15.classList.add('icono');
                            }
                            var fila6 = tbody[i].insertRow(5);
                            fila6.classList.add('filaPar')
                            var celda16 = fila6.insertCell(0);
                            var celda17 = fila6.insertCell(1);
                            var celda18 = fila6.insertCell(2);
                            celda16.innerHTML = "Entregados";
                            var entregados = 0;
                            for (var n = 0; n < response2.length; n++) {
                                if (response2[n]['estado']==="Entregado") {
                                    entregados++;
                                }
                            }
                            celda17.innerHTML = entregados;
                            celda18.innerHTML = "&nbsp";
                            celda18.classList.add('icono');
                        },
                        error: function(request, error) {
                        
                            
                        }
                    });
}


