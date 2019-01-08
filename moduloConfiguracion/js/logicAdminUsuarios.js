llenarTabla();
function llenarTabla(){
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/consultarUsuarios.php",
        type: "post",
        data: {

               },
        dataType: 'json',

        success: function(response){
        var tbody = document.querySelector('#tablaUsuarios tbody');
        tbody.innerHTML = '';

            for(var i = 0; i<response.length;i++){
                var fila = tbody.insertRow(i);
                var celdaId = fila.insertCell(0);
                var celdaTipoUsuario = fila.insertCell(1);
                var celdaPrimerNombre = fila.insertCell(2);
                var celdaSegundoNombre = fila.insertCell(3);
                var celdaPrimerApellido = fila.insertCell(4);
                var celdaSegundoApellido = fila.insertCell(5);
                var celdaUsername = fila.insertCell(6);
                var celdaCorreo = fila.insertCell(7);
                var celdaContrasena = fila.insertCell(8);
                var celdaFechaNacimiento = fila.insertCell(9);
                var celdaEdad = fila.insertCell(10);
                var celdaTelefono = fila.insertCell(11);
                var celdaNacionalidad = fila.insertCell(12);
                var celdaFechaIngreso = fila.insertCell(13);
                var celdaPuesto = fila.insertCell(14);
                var celdaEstado = fila.insertCell(15);
                var celdaIconos = fila.insertCell(16);
                
                celdaId.innerHTML = response[i]['id_usuario'];
                celdaTipoUsuario.innerHTML = response[i]['tipo_usuario'];
                celdaPrimerNombre.innerHTML = response[i]['primer_nombre'];
                celdaSegundoNombre.innerHTML = response[i]['segundo_nombre'];
                celdaPrimerApellido.innerHTML = response[i]['primer_apellido'];
                celdaSegundoApellido.innerHTML = response[i]['segundo_apellido'];
                celdaUsername.innerHTML = response[i]['username'];
                celdaCorreo.innerHTML = response[i]['correo_electronico'];
                celdaContrasena.innerHTML = response[i]['contrasena'];
                
                var inputNacimiento = document.createElement('input');
                inputNacimiento.setAttribute("id", "inputNacimiento"+i);
                inputNacimiento.setAttribute('type', 'date');
                inputNacimiento.setAttribute('value',  response[i]['fecha_nacimiento']);
                inputNacimiento.setAttribute('disabled','true');
                celdaFechaNacimiento.appendChild(inputNacimiento);
                
                celdaEdad.innerHTML = response[i]['edad'];
                celdaTelefono.innerHTML = response[i]['telefono'];
                celdaNacionalidad.innerHTML = response[i]['nacionalidad'];
                
                var inputIngreso = document.createElement('input');
                inputIngreso.setAttribute('id', 'inputIngreso'+i);
                inputIngreso.setAttribute('type', 'date');
                inputIngreso.setAttribute('value',  response[i]['fecha_ingreso']);
                inputIngreso.setAttribute('disabled','true');
                celdaFechaIngreso.appendChild(inputIngreso);
                
                var selectPuestos = getSelectPuestos(response[i]['puesto']);
                selectPuestos.setAttribute('id', 'sltPuestos'+i);
                selectPuestos.setAttribute('disabled','true');
                celdaPuesto.appendChild(selectPuestos);
                
                var inputEstado = document.createElement('select');
                var optActivo = document.createElement('option');
                var optInactivo = document.createElement('option');
                optActivo.text = 'Activo';
                optInactivo.text = 'Inactivo';
                inputEstado.add(optActivo);
                inputEstado.add(optInactivo);
                inputEstado.setAttribute('id','sltEstado'+i);
                inputEstado.setAttribute('disabled','true');
                inputEstado.value = response[i]['estado'];
                celdaEstado.appendChild(inputEstado);
                
                if(response[i]['tipo_usuario'] != 'Cliente'){
                    celdaIconos.innerHTML = '<i class="fa fa-pencil" onclick="editar(this)"></i><i class="fa fa-trash" onclick="borrar(this)"></i>';
                }else{
                    celdaIconos.innerHTML = '<i class="fa fa-pencil" onclick="editar(this)"></i><i class="fa fa-trash inhabilitado"></i>';
                }
            }
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}

function getSelectPuestos(seleccion){
    var sltPuestos = document.createElement("select");
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/consultarPuestos.php",
        type: "post",
        data: {},
        dataType: 'json',
        success: function(response){
            for(var i = 0; i<response.length;i++){
                var option = document.createElement('option');
                option.text = response[i]['nombre'];
                sltPuestos.add(option);
            }
            var optionNA = document.createElement('option');
            optionNA.text = 'N/A';
            sltPuestos.add(optionNA);
            sltPuestos.value = seleccion;
        },
        error: function(request, error) {
            alert(error);
        }
    });
    return sltPuestos;
}

function editar(lapiz){
    var rowIndex = lapiz.parentNode.parentNode.rowIndex;
    var row = document.getElementsByTagName("tr")[rowIndex];
    row.classList.add('seleccion');
    var i = rowIndex-1;
    if(row.cells[1].innerHTML != 'Cliente'){
        row.cells[2].contentEditable = true;
        row.cells[3].contentEditable = true;
        row.cells[4].contentEditable = true;
        row.cells[5].contentEditable = true;
        row.cells[6].contentEditable = true;
        row.cells[7].contentEditable = true;
        row.cells[8].contentEditable = true;
        document.querySelector('#inputNacimiento'+i).removeAttribute('disabled');
        row.cells[10].contentEditable = true;
        row.cells[11].contentEditable = true;
        row.cells[12].contentEditable = true;
        document.querySelector('#inputIngreso'+i).removeAttribute('disabled');
        document.querySelector('#sltPuestos'+i).removeAttribute('disabled');
        document.querySelector('#sltEstado'+i).removeAttribute('disabled');
        row.cells[16].innerHTML = '<i class="fa fa-floppy-o" onclick="guardar(this)"></i><i class="fa fa-trash" onclick="borrar(this)"></i>';
    }else{
        document.querySelector('#sltEstado'+i).removeAttribute('disabled');
        row.cells[16].innerHTML = '<i class="fa fa-floppy-o" onclick="guardar(this)"></i><i class="fa fa-ban"></i>';
    }
}

function guardar(floppy){
    
    var rowIndex = floppy.parentNode.parentNode.rowIndex;
    var row = document.getElementsByTagName("tr")[rowIndex];
    var i = rowIndex-1;
    if(row.cells[1].innerHTML != 'Cliente'){
        row.cells[16].innerHTML = '<i class="fa fa-pencil" onclick="editar(this)"></i><i class="fa fa-trash" onclick="borrar(this)"></i>';
    }else{
        row.cells[16].innerHTML = '<i class="fa fa-pencil" onclick="editar(this)"></i><i class="fa fa-ban"></i>';
    }
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/modificarUsuario.php",
        type: "post",
        data: {
            'pidUsuario' : row.cells[0].innerHTML,
            'pprimerNombre' : row.cells[2].innerHTML,
            'psegundoNombre' : row.cells[3].innerHTML,
            'pprimerApellido' : row.cells[4].innerHTML,
            'psegundoApellido' : row.cells[5].innerHTML,
            'pusername' : row.cells[6].innerHTML,
            'pcorreo' : row.cells[7].innerHTML,
            'pcontrasena' : row.cells[8].innerHTML,
            'pfechaNacimiento' : document.querySelector('#inputNacimiento'+i).value,
            'pedad' : row.cells[10].innerHTML,
            'ptelefono' : row.cells[11].innerHTML,
            'pnacionalidad' : row.cells[12].innerHTML,
            'pfechaIngreso' : document.querySelector('#inputIngreso'+i).value,
            'ppuesto' : document.querySelector('#sltPuestos'+i).value,
            'pestado' : document.querySelector('#sltEstado'+i).value
        },
        dataType: 'json',
        success: function(response){
            window.location.assign('adminUsuarios.php');
        },
        error: function(request, error) {
            alert(error);
        }
    });
}

function borrar(basurero){
    var rowIndex = basurero.parentNode.parentNode.rowIndex;
    var row = document.getElementsByTagName("tr")[rowIndex];
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/eliminarUsuario.php",
        type: "post",
        data: {
            'pidUsuario' : row.cells[0].innerHTML
        },
        dataType: 'json',

        success: function(response){
            window.location.assign('adminUsuarios.php');
        },
        
        error: function(request, error) {
            alert(error);
        }
    });
}