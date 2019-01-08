var btnAceptar = document.getElementById("btnAceptar"),
    btnCancelar = document.getElementById("btnCancelar"),
    btnRedimir = document.getElementById("btnRedimir"),
    msjError = document.getElementById('msjError'),
    direccion = document.getElementById('direccion'),
    tbody = document.querySelector('#tablaProductos tbody');

var cantidadBebida = document.querySelector('#cantidadBebida'),
    cantidadPlato = document.querySelector('#cantidadPlato'),
    listaBebidas = document.querySelector('#listaBebidas'),
    listaComidas = document.querySelector('#listaComidas');
    
var contadorRows = 0,
    celdaTotal = document.querySelector('#celdaTotal'),
    msjReviseCampos = 'Por favor revise los espacios en <span class="rojo">rojo.</span>';
    msjRangoInvalido1 = 'El <span class="rojo">total</span> debe estar entre 4000 y 6000';
    msjRangoInvalido2 = 'El <span class="rojo">total</span> debe estar entre 7000 y 9000';
    msjTablaVacia = 'No ha agregado ningún <span class="rojo">plato</span> a la orden';
    msjPtsInsuficientes = 'No tiene <span class="rojo">puntos</span> suficientes';

msjError.classList.add('oculto');
llenarListaComidas();
llenarListaBebidas();
llenarCampos();

btnAceptar.addEventListener('click', function(){
    if(direccion.value == ''){
        msjError.innerHTML = msjReviseCampos;
        direccion.classList.add('error');
        msjError.classList.remove('oculto');
    }else{
        direccion.classList.remove('error');
        msjError.classList.add('oculto');
        
        if(tablaProductos.getElementsByTagName('tr')[1] == undefined){
            msjError.innerHTML = msjTablaVacia;
            msjError.classList.remove('oculto');
        }else{
            modificarPuntos(Number.parseInt(document.querySelector('#puntos').innerHTML));
            agregarPedido();
        }
    }
});

btnRedimir.addEventListener('click', function(){
    var ptsSelect = document.querySelector('.sltRedimir').value;
    var ptsCliente = Number.parseInt(document.querySelector('#puntos').innerHTML);
    var total = Number.parseInt(document.querySelector('#celdaTotal').innerHTML);
    if(ptsSelect == '--'){
        sltRedimir.classList.add('error');
        msjError.innerHTML = msjReviseCampos;
        msjError.classList.remove('oculto');
    }else{
        sltRedimir.classList.remove('error');
        msjError.classList.add('oculto');
    }
    if(Number.parseInt(ptsSelect) > ptsCliente){
        msjError.innerHTML = msjPtsInsuficientes;
        msjError.classList.remove('oculto');
    }else{
        msjError.classList.add('oculto');
        switch(ptsSelect){
            case '7':
                if(total >= 4000 && total <=6000){
                    document.querySelector('#celdaTotal').innerHTML = 0;
                    ptsCliente = ptsCliente - 7;
                    document.querySelector('#puntos').innerHTML = ptsCliente;
                }else{
                    msjError.innerHTML = msjRangoInvalido1;
                    msjError.classList.remove('oculto');
                }
                break;
                
            case '10':
                if(total >= 7000 && total <= 9000){
                    document.querySelector('#celdaTotal').innerHTML = 0;
                    ptsCliente = ptsCliente - 10;
                    document.querySelector('#puntos').innerHTML = ptsCliente;
                }else{
                    msjError.innerHTML = msjRangoInvalido2;
                    msjError.classList.remove('oculto');
                }
                break;
        }
    }
});

function llenarListaComidas(){
    var peticion = $.ajax({
        url: "../moduloCore/php/consultarComidas.php",
        type: "post",
        data: {},
        dataType: 'json',
        success: function(response){
            var option1 = document.createElement('option');
            option1.text = '--Seleccione un plato--';
            listaComidas.add(option1);
            for(var i = 0; i<response.length;i++){
                var option = document.createElement('option');
                option.text = response[i]['nombre_plato'];
                listaComidas.add(option);
            }
        },
        error: function(request, error){
            alert(error);
        }
    });
}

function llenarListaBebidas(){
    var peticion = $.ajax({
        url: "../moduloCore/php/consultarBebidas.php",
        type: "post",
        data: {},
        dataType: 'json',
        success: function(response){
            var option1 = document.createElement('option');
            option1.text = '--Seleccione una bebida--';
            listaBebidas.add(option1);
            for(var i = 0; i<response.length;i++){
                var option = document.createElement('option');
                option.text = response[i]['nombre_plato'];
                listaBebidas.add(option);
            }
        },
        error: function(request, error){
            alert(error);
        }
    });
}

function agregarBebida(){
    var bError = false;
    if(cantidadBebida.value == 0 || cantidadBebida.value < 1){
        cantidadBebida.classList.add('error');
        bError = true;
    }else{
        cantidadBebida.classList.remove('error');
    }
    if(listaBebidas.selectedIndex == 0){
        listaBebidas.classList.add('error');
        bError = true;
    }else{
        listaBebidas.classList.remove('error');
    }
    if(!bError){
        msjError.classList.add('oculto');
        agregarFila(cantidadBebida.value, listaBebidas.value);
    }else{
        msjError.innerHTML = msjReviseCampos;
        msjError.classList.remove('oculto');
    }
}

function agregarComida(){
    var bError = false;
    if(cantidadPlato.value == 0 || cantidadPlato.value < 1){
        cantidadPlato.classList.add('error');
        bError = true;
    }else{
        cantidadPlato.classList.remove('error');
    }
    if(listaComidas.selectedIndex == 0){
        listaComidas.classList.add('error');
        bError = true;
    }else{
        listaComidas.classList.remove('error');
    }
    if(!bError){
        msjError.classList.add('oculto');
        agregarFila(cantidadPlato.value, listaComidas.value);
    }else{
        msjError.innerHTML = msjReviseCampos;
        msjError.classList.remove('oculto');
    }
}

function agregarFila(pcantidad, pproducto){
    var pprecio = consultarPrecio(pproducto)*pcantidad;
    var fila = tbody.insertRow(contadorRows);
    var celdaCantidad = fila.insertCell(0);
    var celdaProducto = fila.insertCell(1);
    var celdaPrecio = fila.insertCell(2);
    var celdaIcono = fila.insertCell(3);
    celdaCantidad.innerHTML = pcantidad;
    celdaProducto.innerHTML = pproducto;
    celdaPrecio.innerHTML = pprecio;
    celdaIcono.innerHTML = '<i class="fa fa-trash" onclick="quitarFila(this)"></i>';
    celdaTotal.innerHTML = Number.parseInt(celdaTotal.innerHTML) + Number.parseInt(pprecio);
    contadorRows++;
}

function llenarCampos(){
  var peticion = $.ajax({
    url: "../moduloConfiguracion/php/consultarUsuario.php",
    type: "post",
    data: {},
    dataType: 'json',

    success: function(response){
          document.querySelector('#nombre').innerHTML = response[0]['primer_nombre']+" "+response[0]['primer_apellido'];
          document.querySelector('#telefono').innerHTML = response[0]['telefono'];
          document.querySelector('#puntos').innerHTML = response[0]['puntos'];
    },

    error: function(request, error) {
        alert(error);
    }

  });
}

function consultarPrecio(nombrePlato){
    var precioSolicitado;
    var peticion = $.ajax({
        url: "../moduloCore/php/consultarPrecioPlato.php",
        async: false,
        type: "post",
        data: {
            'pnombrePlato' : nombrePlato
        },
        dataType: 'json',

        success: function(response){
            precioSolicitado = response[0]['precio'];
        },

        error: function(request, error) {
            alert(error);
        }
    });
    return precioSolicitado;
}

function quitarFila(basurero){
    var rowIndex = basurero.parentNode.parentNode.rowIndex;
    var row = tablaProductos.getElementsByTagName("tr")[rowIndex];
    celdaTotal.innerHTML = Number.parseInt(celdaTotal.innerHTML) - Number.parseInt(row.cells[2].innerHTML);
    document.querySelector('#tablaProductos').deleteRow(rowIndex);
    contadorRows--;
}

function modificarPuntos(sPuntos){
    var peticion = $.ajax({
        url: "../moduloCore/php/modificarPuntos.php",
        type: "post",
        data: {
            'ppuntos' : sPuntos
        },
        dataType: 'json',
        success: function(response){},

        error: function(request, error) {
            alert(error);
        }
    });
}

function agregarPedido(){
    var peticion = $.ajax({
       url: "../moduloCore/php/insertarPedido.php",
       type: "post",
       data: {
           'pestado': 'Activa',
           'pdireccion' : direccion.value
       },
       dataType: 'json',
       success: function(response){
           salvarDatos();
       },
       error: function(request, error){
           alert(error);
       }
    });
}

function salvarDatos(){
    var rows = tablaProductos.getElementsByTagName('tr');
    for(var i=1; i<rows.length;i++){
        var row = tablaProductos.getElementsByTagName('tr')[i];

        var peticion = $.ajax({
           url: "../moduloCore/php/insertarPlatoXPedido.php",
           type: "post",
           data: {
               'pcantidad' : row.cells[0].innerHTML,
               'pnombrePlato' : row.cells[1].innerHTML,
               'pprecio' : row.cells[2].innerHTML,
               'pestado' : 'Pendiente'
           },
           dataType: 'json',
           success: function(response){
               window.location.assign('pedidoConfirmado.php');
           },
           error: function(request, error){
               alert(error);
           }
        });
    }
}