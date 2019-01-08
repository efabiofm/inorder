var btnIngresar = document.querySelector('#btnIngresar'),
	msjError = document.querySelector('#msjError'),
	sUsuario = document.querySelector('#txtUsuario'),
	sContrasena = document.querySelector('#txtContrasena'),
	hayError, inputs;

inputs = document.querySelectorAll('input[class="input"]');
msjError.classList.add('oculto');

btnIngresar.addEventListener('click',function(){
	hayError = false;
	for(var i=0; i<inputs.length; i++){
		if(inputs[i].value == ''){
			inputs[i].classList.add('error');
			hayError = true;
		}else{
			inputs[i].classList.remove('error');
		}
	}
	if(hayError){
		msjError.classList.remove('oculto');
	}else{
		document.forms["formulario"].submit();
	}
});