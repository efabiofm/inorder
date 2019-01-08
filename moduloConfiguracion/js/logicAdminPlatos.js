llenarTabla();
function llenarTabla(){
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/consultarPlatos.php",
        type: "post",
        data: {

               },
        dataType: 'json',

        success: function(response){
        var tbody = document.querySelector('#tablaPlatos tbody');
        tbody.innerHTML = '';

            for(var i = 0; i<response.length;i++){
                var fila = tbody.insertRow(i);
                var celdaId = fila.insertCell(0);
                var celdaNombre = fila.insertCell(1);
                var celdaTipoPlato = fila.insertCell(2);
                var celdaPrecio = fila.insertCell(3);
                var celdaIngredientes = fila.insertCell(4);
                var celdaCaracteristicas = fila.insertCell(5);
                var celdaNombreIngles = fila.insertCell(6);
                var celdaCalorias = fila.insertCell(7);
                var celdaIconos = fila.insertCell(8);
                
                celdaId.innerHTML = response[i]['id_plato'];
                celdaNombre.innerHTML = response[i]['nombre_plato'];
                
                var tiposPlato = getSelectTiposPlato(response[i]['tipo_plato']);
                tiposPlato.setAttribute('id', 'sltTiposPlato'+i);
                tiposPlato.setAttribute('disabled','true');
                celdaTipoPlato.appendChild(tiposPlato);
                
                celdaPrecio.innerHTML = response[i]['precio'];
                celdaIngredientes.innerHTML = response[i]['ingredientes'];
                celdaCaracteristicas.innerHTML = response[i]['caracteristicas_especiales'];
                celdaNombreIngles.innerHTML = response[i]['nombre_ingles'];
                celdaCalorias.innerHTML = response[i]['calorias'];
                celdaIconos.innerHTML = '<i class="fa fa-pencil" onclick="editar(this)"></i><i class="fa fa-trash" onclick="borrar(this)"></i>';
            }
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}

function editar(lapiz){ 
    var rowIndex = lapiz.parentNode.parentNode.rowIndex; 
    var row = document.getElementsByTagName("tr")[rowIndex];
    var i = rowIndex-1;
    row.classList.add('seleccion'); 
    row.cells[1].contentEditable = true; 
    document.querySelector('#sltTiposPlato'+i).removeAttribute('disabled');
    row.cells[3].contentEditable = true;
    row.cells[4].contentEditable = true;
    row.cells[5].contentEditable = true;
    row.cells[6].contentEditable = true;
    row.cells[7].contentEditable = true;
    row.cells[8].innerHTML = '<i class="fa fa-floppy-o" onclick="guardar(this)"></i><i class="fa fa-trash" onclick="borrar(this)"></i>';
}

function guardar(floppy){
    var rowIndex = floppy.parentNode.parentNode.rowIndex;
    var row = document.getElementsByTagName("tr")[rowIndex];
    var i = rowIndex-1;
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/modificarPlato.php",
        type: "post",
        data: {
            
            'pidPlato' : row.cells[0].innerHTML,
            'pnombre' : row.cells[1].innerHTML,
            'ptipoPlato' : document.querySelector('#sltTiposPlato'+i).value,
            'pprecio' : row.cells[3].innerHTML,
            'pingredientes' : row.cells[4].innerHTML,
            'pcaracteristicas' : row.cells[5].innerHTML,
            'pnombreIngles' : row.cells[6].innerHTML,
            'pcalorias' : row.cells[7].innerHTML

        },
        dataType: 'json',

        success: function(response){
            window.location.assign('adminPlatos.php');
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}

function borrar(basurero){
    rowIndex = basurero.parentNode.parentNode.rowIndex;
    row = document.getElementsByTagName("tr")[rowIndex];
    
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/eliminarPlato.php",
        type: "post",
        data: {
            'pidPlato' : row.cells[0].innerHTML
        },
        dataType: 'json',

        success: function(response){
            window.location.assign('adminPlatos.php');
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}

function getSelectTiposPlato(seleccion){
    var sltTiposPlato = document.createElement("select"),
        option1 = document.createElement('option'),
        option2 = document.createElement('option'),
        option3 = document.createElement('option'),
        option4 = document.createElement('option'),
        option5 = document.createElement('option'),
        option6 = document.createElement('option');
        
    option1.text = 'Entrada';
    option2.text = 'Plato fuerte';
    option3.text = 'Postre';
    option4.text = 'Coctel';
    option5.text = 'Refresco';
    
    sltTiposPlato.add(option1);
    sltTiposPlato.add(option2);
    sltTiposPlato.add(option3);
    sltTiposPlato.add(option4);
    sltTiposPlato.add(option5);
    sltTiposPlato.value = seleccion;
            
    return sltTiposPlato;
}