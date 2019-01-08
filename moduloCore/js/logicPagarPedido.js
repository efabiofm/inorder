var btnAceptar=document.querySelector('#btnAceptar');
var btnCancelar=document.querySelector('#btnCancelar');
var	msjError1=document.querySelector('#alert1');
var	msjError2=document.querySelector('#alert2');

msjError1.classList.add('oculto');
msjError2.classList.add('oculto');

btnAceptar.addEventListener('click', function() {
	var radioBtns=document.querySelectorAll('#rbTarjeta,#rbTarjeta2');
	var total=document.querySelector('#total');
	var bError=false;
	var tarjetaSeleccionada=0

	for (var i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked){
            tarjetaSeleccionada=(i+1);
            msjError1.classList.add('oculto');
            bError=false;
        }else{
        	if (tarjetaSeleccionada==0) {
        		
        		msjError1.classList.remove('oculto');
        		bError=true;
        	};
        }
    };

    if (total.value==null || total.value==0) {
    	msjError2.classList.remove('oculto');
       	bError=true;
    }else{
    	msjError2.classList.add('oculto');
       	bError=false;
    }


    if (bError==false) {
    	window.location.assign('pedidoConfirmado.html');
    };
});

btnCancelar.addEventListener('click', function(){
    window.location.assign('../moduloSeguridad/ingresoCliente.html');
});