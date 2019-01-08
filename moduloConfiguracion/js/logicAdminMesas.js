llenarTabla();
function llenarTabla(){
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/consultarTodasLasMesas.php",
        type: "post",
        data: {

               },
        dataType: 'json',

        success: function(response){
            var tbody = document.querySelector('#tablaMesas tbody');
            tbody.innerHTML = '';

            for(var i = 0; i<response.length;i++){
                var fila = tbody.insertRow(i);
                var celdaNumero = fila.insertCell(0);
                var celdaNombre = fila.insertCell(1);
                var celdaCapacidad = fila.insertCell(2);
                var celdaTipoMesa = fila.insertCell(3);
                var celdaDescripcion = fila.insertCell(4);
                var celdaEstado = fila.insertCell(5);
                var celdaIconos = fila.insertCell(6);
                
                celdaNumero.innerHTML = response[i]['numero_mesa'];
                celdaNombre.innerHTML = response[i]['nombre_mesa'];
                celdaCapacidad.innerHTML = response[i]['capacidad'];
                
                var tiposMesa = getTiposMesa(response[i]['tipo_mesa']);
                tiposMesa.setAttribute('id', 'sltTiposMesa'+i);
                tiposMesa.setAttribute('disabled','true');
                celdaTipoMesa.appendChild(tiposMesa);
                celdaDescripcion.innerHTML = response[i]['descripcion'];
                
                var estadosMesa = getEstadosMesa(response[i]['estado']);
                estadosMesa.setAttribute('id', 'sltEstadosMesa'+i);
                estadosMesa.setAttribute('disabled','true');
                celdaEstado.appendChild(estadosMesa);
                celdaIconos.innerHTML = '<i class="fa fa-pencil" onclick="editar(this)"></i><i class="fa fa-trash" onclick="borrar(this)"></i>';
            }
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}

function getTiposMesa(seleccion){
    var sltTiposMesa = document.createElement("select"),
    option1 = document.createElement('option'),
    option2 = document.createElement('option');
    option1.text = 'Apta para discapacitados';
    option2.text = 'No apta para discapacitados';
    sltTiposMesa.add(option1);
    sltTiposMesa.add(option2);
    sltTiposMesa.setAttribute('class','listaTipos');
    sltTiposMesa.value = seleccion;
    return sltTiposMesa;
}

function getEstadosMesa(seleccion){
    var sltEstadosMesa = document.createElement("select"),
    option1 = document.createElement('option'),
    option2 = document.createElement('option');
    option3 = document.createElement('option');
    option1.text = 'Libre';
    option2.text = 'Ocupada';
    option3.text = 'Reservada';
    sltEstadosMesa.add(option1);
    sltEstadosMesa.add(option2);
    sltEstadosMesa.add(option3);
    sltEstadosMesa.value = seleccion;
    return sltEstadosMesa;
}

function editar(lapiz){ 
    var rowIndex = lapiz.parentNode.parentNode.rowIndex; 
    var row = document.getElementsByTagName("tr")[rowIndex];
    var i = rowIndex-1;
    row.classList.add('seleccion'); 
    row.cells[0].contentEditable = true;
    row.cells[1].contentEditable = true; 
    row.cells[2].contentEditable = true; 
    document.querySelector('#sltTiposMesa'+i).removeAttribute('disabled');
    row.cells[4].contentEditable = true;
    document.querySelector('#sltEstadosMesa'+i).removeAttribute('disabled');
    row.cells[6].innerHTML = '<i class="fa fa-floppy-o" onclick="guardar(this)"></i><i class="fa fa-trash" onclick="borrar(this)"></i>';
}

function guardar(floppy){
    var rowIndex = floppy.parentNode.parentNode.rowIndex;
    var row = document.getElementsByTagName("tr")[rowIndex];
    var i = rowIndex-1;
    var bError=false;
    if (row.cells[0].innerHTML=="" || (isNaN(row.cells[0].innerHTML)===true)) {
        row.cells[0].classList.add('error');
        bError=true;
    }
    if (row.cells[1].innerHTML==""|| (isNaN(row.cells[1].innerHTML)===false)) {
        row.cells[1].classList.add('error');
        bError=true;
    }
    if (row.cells[2].innerHTML=="" || (isNaN(row.cells[2].innerHTML)===true)) {
        row.cells[2].classList.add('error');
        bError=true;
    }
    if (row.cells[4].innerHTML=="" || (isNaN(row.cells[4].innerHTML)===false)) {
        row.cells[4].classList.add('error');
        bError=true;
    }
    if(bError===false){
        row.cells[0].classList.remove('error');
        row.cells[1].classList.remove('error');
        row.cells[2].classList.remove('error');
        row.cells[4].classList.remove('error');
        var peticion = $.ajax({
            url: "../moduloConfiguracion/php/modificarMesa.php",
            type: "post",
            data: {
                
                'pnumero' : row.cells[0].innerHTML,
                'pnombre' : row.cells[1].innerHTML,
                'pcapacidad' : row.cells[2].innerHTML,
                'ptipo' : document.querySelector('#sltTiposMesa'+i).value,
                'pdescripcion' : row.cells[4].innerHTML,
                'pestado' : document.querySelector('#sltEstadosMesa'+i).value
    
            },
            dataType: 'json',
    
            success: function(response){
                window.location.assign('adminMesas.php');
            },
            
            error: function(request, error) {
                alert(error);
            }
        });
    }
}

function borrar(basurero){
    rowIndex = basurero.parentNode.parentNode.rowIndex;
    row = document.getElementsByTagName("tr")[rowIndex];
    
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/eliminarMesa.php",
        type: "post",
        data: {
            'pnumeroMesa' : row.cells[0].innerHTML
        },
        dataType: 'json',

        success: function(response){
            window.location.assign('adminMesas.php');
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}