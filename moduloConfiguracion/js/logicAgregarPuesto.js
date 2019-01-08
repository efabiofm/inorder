var msjError=document.querySelector('#msjError'),
	btnAgregar = document.querySelector('#btnAgregar'),
    sNombre = document.querySelector('#nombrePuesto'),
    sDescripcion = document.querySelector('#descripcionPuesto');

msjError.classList.add('oculto');

btnAgregar.addEventListener('click', function(){
	if(sNombre.value == ''){
		sNombre.classList.add('error');
		msjError.classList.remove('oculto');
	}else{
        msjError.classList.add('oculto');
		agregarPuesto();
	}
});

function agregarPuesto(){
    var peticion = $.ajax({
        url: "../moduloConfiguracion/php/insertarPuesto.php",
        type: "post",
        data: {
            'pnombre' : sNombre.value,
            'pdescripcion' : sDescripcion.value
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

