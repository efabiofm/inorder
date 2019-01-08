llenarTabla();
function llenarTabla(){
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/consultarPuestos.php",
        type: "post",
        data: {

               },
        dataType: 'json',

        success: function(response){
        var tbody = document.querySelector('#tablaPuestos tbody');
        tbody.innerHTML = '';

            for(var i = 0; i<response.length;i++){
            
                var fila = tbody.insertRow(i);
                var celdaId = fila.insertCell(0);
                var celdaNombre = fila.insertCell(1);
                var celdaDescripcion = fila.insertCell(2);
                var celdaIconos = fila.insertCell(3);
                
                celdaId.innerHTML = response[i]['id_puesto'];
                celdaNombre.innerHTML = response[i]['nombre'];
                celdaDescripcion.innerHTML = response[i]['descripcion'];
                celdaIconos.innerHTML = '<i class="fa fa-pencil" onclick="editar(this)"></i><i class="fa fa-trash" onclick="borrar(this)"></i>';
                //cada icono tiene la propiedad onclick para ejecutar una funcion
            }
            //agrega filas vacias
            if(response.length <12){
                for(var j=response.length; j<12; j++){
                    var fila = tbody.insertRow(j);
                    for(var k=0;k<4;k++){
                        fila.insertCell(k).innerHTML = ' ';
                    }
                }
            }
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}

function editar(lapiz){ //convierte las celdas en campos editables
    var rowIndex = lapiz.parentNode.parentNode.rowIndex; //obtiene el indice del row donde esta el lapiz
    var row = document.getElementsByTagName("tr")[rowIndex]; //obtiene el row donde esta el lapiz
    row.classList.add('seleccion'); //señala el row con un borde azul
    row.cells[1].contentEditable = true; //hace la primera celda editable
    row.cells[2].contentEditable = true;
    row.cells[3].innerHTML = '<i class="fa fa-floppy-o" onclick="guardar(this)"></i><i class="fa fa-trash" onclick="borrar(this)"></i>';
    //convierte el lapiz en floppy
}

function guardar(floppy){ //proceso inverso al anterior
    var rowIndex = floppy.parentNode.parentNode.rowIndex;
    var row = document.getElementsByTagName("tr")[rowIndex];
    
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/modificarPuesto.php",
        type: "post",
        data: {
            'pidPuesto' : row.cells[0].innerHTML,
            'pnombre' : row.cells[1].innerHTML,
            'pdescripcion' : row.cells[2].innerHTML
        },
        dataType: 'json',

        success: function(response){
            window.location.assign('adminPuestos.php');
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
        url: "../moduloConfiguracion/php/eliminarPuesto.php",
        type: "post",
        data: {
            'pidPuesto' : row.cells[0].innerHTML
        },
        dataType: 'json',

        success: function(response){
            window.location.assign('adminPuestos.php');
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}