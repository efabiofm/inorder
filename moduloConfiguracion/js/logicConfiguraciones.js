var sNombreRestaurante= document.querySelector("#txtNombre"),
    sTelefono= document.querySelector("#txtTelefono"),
    sCedulaJuridica= document.querySelector("#txtCedJuridica"),
    sCorreo= document.querySelector("#txtEmail"),
    sHorario= document.querySelector("#txtHorario"),
    sDireccion= document.querySelector("#txtDireccion"),
    sImpuestoVenta= document.querySelector("#txtImpuestoVts"),
    sImpuestoServicio= document.querySelector("#txtImpuestoSrv"),
    sPrecioDomicilio= document.querySelector("#txtExpress"),
    sSltTiempo1= document.querySelector("#sltTiempo1"),
    sSltTiempo2= document.querySelector("#sltTiempo2"),
    sSltTiempo3= document.querySelector("#sltTiempo3");
    
var boton = document.getElementById("botonPrincipal");
var btnCancelar = document.getElementById("botonCancelar");
var camposNecesarios = document.getElementsByClassName("campoNecesario");
var mensajeError = document.getElementById("msjError")
var btnInfoRest = document.getElementById("btnInfoRest");
var btnInfoImpuestos = document.getElementById("btnInfoImpuestos");
var btnInfoReservas = document.getElementById("btnInfoReservas");


function validarTodos() {
   
    var formularioValido = true,
        i = 0,
        ii = camposNecesarios.length;
    for (0; i < ii; i = i + 1) {
        if (camposNecesarios[i].value === '') {
            camposNecesarios[i].classList.add("error");
            formularioValido = false;
        } else {
            camposNecesarios[i].classList.remove("error");
        }
    }
    
    if (formularioValido) {
        mensajeError.classList.add("oculto");
    } else {
        mensajeError.classList.remove("oculto");
    }
    return formularioValido;
}


boton.addEventListener('click', function(){
    
    if (!validarTodos()) return;
    
var peticion = $.ajax({
          url: "../moduloConfiguracion/php/modificarParametros.php",
          type: "post",
          data: {
    'pnombre' : sNombreRestaurante.value,
    'ptelefono' : sTelefono.value,
    'pcedulaJuridica' : sCedulaJuridica.value,
    'pcorreo' : sCorreo.value,
    'phorario' : sHorario.value,
    'pdireccion' : sDireccion.value,
    'pimpuestoVenta' : sImpuestoVenta.value,
    'pimpuestoServicio' : sImpuestoServicio.value,
    'pprecioDomicilio' : sPrecioDomicilio.value,
    'ptiempo_uno': sSltTiempo1.value,
    'ptiempo_dos': sSltTiempo2.value,
    'ptiempo_tres': sSltTiempo3.value
    },
        dataType: 'json',

        success: function(response){
    location.reload();
    },
		error: function(request, error) {
		    alert(0);
	}
});

});

llenarCampos();
function llenarCampos(){
  var peticion = $.ajax({
            url: "../moduloConfiguracion/php/consultarParametros.php",
            type: "post",
            data: {

                   },
            dataType: 'json',

            success: function(response){
             
                  sNombreRestaurante.value = response[0]['nombre_rest'];
                  sTelefono.value = response[0]['telefono_rest'];
                  sCedulaJuridica.value = response[0]['cedula_juridica'];
                  sCorreo.value = response[0]['correo_rest'];
                  sDireccion.value = response[0]['direccion_rest'];
                  sHorario.value = response[0]['horario_rest'];
                  sImpuestoVenta.value = response[0]['impuesto_ventas'];
                  sImpuestoServicio.value = response[0]['impuesto_servicio'];
                  sPrecioDomicilio.value = response[0]['precio_domicilio'];
                  sSltTiempo1.value = response[0]['tiempo_uno'];
                  sSltTiempo2.value = response[0]['tiempo_dos'];
                  sSltTiempo3.value = response[0]['tiempo_tres']
            },
  
            error: function(request, error) {
                alert(error);
            }

  });
}


 btnInfoRest.addEventListener("click", function(){
     sNombreRestaurante.removeAttribute("disabled");
     sTelefono.removeAttribute("disabled");
     sCedulaJuridica.removeAttribute("disabled");
     sCorreo.removeAttribute("disabled");
     sHorario.removeAttribute("disabled");
     sDireccion.removeAttribute("disabled");
 });
 
 btnInfoImpuestos.addEventListener("click", function(){
     sImpuestoVenta.removeAttribute("disabled");
     sImpuestoServicio.removeAttribute("disabled");
     sPrecioDomicilio.removeAttribute("disabled");

 });
 
  btnInfoReservas.addEventListener("click", function(){
     sSltTiempo1.removeAttribute("disabled");
     sSltTiempo2.removeAttribute("disabled");
     sSltTiempo3.removeAttribute("disabled");
   
 });



    
    
    


