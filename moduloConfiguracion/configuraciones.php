<!doctype html>
<html>
   <head>
      <meta charset='utf-8'>
      <link rel="stylesheet" href="../css/styleGeneral.css">
      <link rel="stylesheet" href="css/styleConfiguraciones.css">
      <link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
      <link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
      <title>Configuraciones</title>
   </head>
   <body>
      <?php include('../menus/menuAdmin.php');?>
      <div id="contenido">
         <form id="parametros">
            <div id="div1">
               <div class="titulo">   
                  <h2>Información del restaurante</h2> <i class="fa fa-pencil" id="btnInfoRest"></i>
               </div>
               <div class="formLabel">
                  <label for="txtNombre">Nombre</label>
                  <label for= "txtTelefono">Teléfono</label>
                  <label for= "txtCedJuridica">Cédula jurídica</label>
                  <label for= "txtEmail">Correo electrónico</label>
                  <label for="txtHorario">Horario</label>
                  <label for="txtDireccion">Dirección</label>
               </div>
               <div id="infoRest" class="formInput">
                  <input type="text" id="txtNombre" class="infoInput campoNecesario" disabled>
                  <input type="text" id="txtTelefono" class="infoInput campoNecesario" disabled>
                  <input type="text" id="txtCedJuridica" class="infoInput campoNecesario" disabled>
                  <input type="text" id="txtEmail" class="infoInput campoNecesario" disabled>
                  <input type="text" id="txtHorario" class="infoInput campoNecesario" disabled>
                  <textArea rows="3" id="txtDireccion" class="infoInput campoNecesario" disabled></textArea>
               </div>
               <div class="titulo">
                  <h2>Impuestos y servicios</h2><i class="fa fa-pencil" id="btnInfoImpuestos"></i>
               </div>
               <div class="formLabel">
                  <label for="txtImpuestoVts">Impuesto de venta</label>
                  <label for= "txtImpuestoSrv">Impuesto de servicio</label>
                  <label for="txtExpress">Precio de servicio a domicilio</label>
               </div>
               <div class="formInput">
                  <input type="text" id="txtImpuestoVts" class="campoNecesario" disabled> 
                  <input type="text" id="txtImpuestoSrv" class="campoNecesario" disabled>
                  <input type="text" id="txtExpress"  class="campoNecesario" disabled>
               </div>
            </div> <!-- cierra #div1 -->
            <div id="div2">
                <div class="titulo">
                    <h2 id="tituloReservas">Configuración de reservas</h2>
                    <i class="fa fa-pencil" id="btnInfoReservas"></i>
                </div>
               <div class="labelConfigReserva">Tiempo de anticipación</div>
               <select id="sltTiempo1" disabled class="campoNecesario">
                  <option value="" disabled style="display:none" selected>--Seleccione</option>
                  <option value="1hora"> 1 hora </option>
                  <option value="2horas"> 2 horas </option>
                  <option value="3horas"> 3 horas </option>
                  <option value="4horas"> 4 horas </option>
                  <option value="5horas"> 5 horas </option>
               </select>
               <p>Tiempo de antelación con lo cual un cliente puede realizar una reservación.</p>
               <div class="labelConfigReserva">Tiempo reservado</div>
               <select id="sltTiempo2" disabled class="campoNecesario">
                  <option value="" disabled style="display:none" selected>--Seleccione</option>
                  <option value="1hora"> 1 hora </option>
                  <option value="2horas"> 2 horas </option>
                  <option value="3horas"> 3 horas </option>
                  <option value="4horas"> 4 horas </option>
                  <option value="5horas"> 5 horas </option>
               </select>
               <p>Tiempo que permanecerá la mesa en estado "Reservada" antes de que esta pase a "Libre".</p>
               <div class="labelConfigReserva">Tiempo de espera</div>
               <select id="sltTiempo3" disabled class="campoNecesario">
                  <option value="" disabled style="display:none" selected>--Seleccione</option>
                  <option value="1hora"> 1 hora </option>
                  <option value="2horas"> 2 horas </option>
                  <option value="3horas"> 3 horas </option>
                  <option value="4horas"> 4 horas </option>
                  <option value="5horas"> 5 horas </option>
               </select>
               <p>Tiempo que permanecerá la mesa en estado "Ocupada" después de que la ocupa un cliente.</p>
            </div> <!-- cierra #div2 -->
            <div id="msjError" class="formLabel oculto">
               <span>Por favor complete los espacios en <span class="rojo">rojo.</span></span>
            </div>
         </form>
         <div id="botones">
            <a href="#">
               <div class="boton" id="botonPrincipal" >
                  <span>Guardar</span>
               </div>
            </a>
            <a href="../moduloCore/mapaMesas.php">
               <div class="boton" id="botonCancelar">
                  <span>Cancelar</span>
               </div>
            </a>
         </div>
      <div class="clear"></div>
      <script type="text/javascript" src="../jquery.js"></script>
      <script type="text/javascript" src="js/logicConfiguraciones.js"></script>
   </body>
</html>
