<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Mi cuenta</title>
      <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
      <link rel="stylesheet" type="text/css" href="css/styleEditarCuentaCliente.css">
      <link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.min.css">
      <link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
   </head>
   <body>
      <div id="cuerpo">
         <?php include('../menus/menuCliente.php');?>
         <div id="contenido">
            <h1> Mi cuenta </h1>
            <form>
               <div id="informacion">
                  <div class="formColumna">
                     <div class="datos">
                        <label for="txtNombreUsuario"> Nombre de usuario </label>
                        <input type="txt" id="txtNombreUsuario" name="obligatorio" readonly>
                     </div>
                     <div class="datos">
                        <label for="txtNombre"> Nombre </label>
                        <input type="txt" id="txtNombre" name="obligatorio">
                     </div>
                     <div class="datos">
                        <label for="txt1erApellido"> Primer apellido </label>
                        <input type="txt" id="txt1erApellido" name="obligatorio">
                     </div>
                     <div class="datos">
                        <label for="calFechaNacimiento"> Fecha de nacimiento </label>
                        <input type="date" id="calFechaNacimiento" name="obligatorio">
                     </div>
                  </div>
                  <div class="formColumna">
                     <div class="datos">
                        <label for="txtEmail"> Correo electrónico </label>
                        <input type="txt" id="txtEmail" name="obligatorio">
                     </div>
                     <div class="datos">
                        <label for="txt2doNombre"> Segundo nombre (opc.) </label>
                        <input type="txt" id="txt2doNombre">
                     </div>
                     <div class="datos">
                        <label for="txt2doApellido"> Segundo apellido (opc.) </label>
                        <input type="txt" id="txt2doApellido">
                     </div>
                     <div class="datos">
                        <label for="spinEdad"> Edad </label>
                        <input type="number" id="spinEdad" min="18" max="99" name="obligatorio">
                     </div>
                  </div>
                  <div class="formColumna">
                     <div class="datos">
                        <label for="xtTelefono"> Teléfono </label>
                        <input type="txt" id="txtTelefono" name="obligatorio">
                     </div>
                     <div class="datos">
                        <label for="txtNacionalidad"> Nacionalidad </label>
                        <input type="txt" id="txtNacionalidad" name="obligatorio">
                     </div>
                     <div class="datos">
                        <label for="txtContrasena"> Contraseña </label>
                        <input type="password" id="txtContrasena" readonly>
                        <a href="../moduloSeguridad/cambiarContrasena.php">Cambiar contraseña</a>
                     </div>
                  </div>
               </div> <!--informacion-->
               <div id="botones">
                  <a href="#">
                     <div class="boton" id="btnGuardar">
                        <span>Guardar</span>
                     </div>
                  </a>
                  <a href="cuentaCliente.php">
                     <div class="boton" id="btnCancelar">
                        <span>Cancelar</span>
                     </div>
                  </a>
               </div>
            </form>
            <div id="msjError">
               <span>
                  Por favor corrija los espacios en <span class="rojo">rojo</span>
               </span>
            </div>
         </div> <!--  cierra Contenido -->
      </div> <!-- cierra #cuerpo -->
      <div id='msjConfirmacion'>
         <span>¡Los cambios han sido efectuados satisfactoriamente!</span>
         <a href="#">
            <div class="boton" id="btnAceptar">
                <span>Aceptar</span>
            </div>
         </a>
      </div>
      <script type="text/javascript" src="../jquery.js"></script>
      <script type="text/javascript" src="js/logicEditarCuentaCliente.js"></script>
   </body>
</html>d
