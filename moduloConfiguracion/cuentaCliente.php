<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Mi cuenta</title>
      <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
      <link rel="stylesheet" type="text/css" href="css/styleCuentaCliente.css">
      <link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.min.css">
      <link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
   </head>
   <body>
      <?php include('../menus/menuCliente.php');?>
      <div id="contenido">
         <h1> Mi cuenta </h1>
         <form>
            <div id="informacion">
               <div class="formColumna">
                  <div class="datos">
                     <label for="txtNombreUsuario"> Nombre de usuario </label>
                     <input type="txt" id="txtNombreUsuario" readonly>
                  </div>
                  <div class="datos">
                     <label for="txtNombre"> Nombre </label>
                     <input type="txt" id="txtNombre" readonly>
                  </div>
                  <div class="datos">
                     <label for="txt1erApellido"> Primer apellido </label>
                     <input type="txt" id="txt1erApellido" readonly>
                  </div>
                  <div class="datos">
                     <label for="calFechaNacimiento"> Fecha de nacimiento </label>
                     <input type="date" id="calFechaNacimiento" readonly>
                  </div>
               </div>
               <div class="formColumna">
                  <div class="datos">
                     <label for="txtEmail"> Correo electrónico </label>
                     <input type="txt" id="txtEmail" readonly>
                  </div>
                  <div class="datos">
                     <label for="txt2doNombre"> Segundo nombre </label>
                     <input type="txt" id="txt2doNombre" readonly>
                  </div>
                  <div class="datos">
                     <label for="txt2doApellido"> Segundo apellido </label>
                     <input type="txt" id="txt2doApellido" readonly>
                  </div>
                  <div class="datos">
                     <label for="spinEdad"> Edad </label>
                     <input type="number" id="spinEdad" min="18" max="99" readonly>
                  </div>
               </div>
               <div class="formColumna">
                  <div class="datos">
                     <label for="xtTelefono"> Teléfono </label>
                     <input type="txt" id="txtTelefono" readonly>
                  </div>
                  <div class="datos">
                     <label for="txtNacionalidad"> Nacionalidad </label>
                     <input type="txt" id="txtNacionalidad" readonly>
                  </div>
                  <div class="datos">
                     <label for="txtPtsDisponibles" id="lblPts"> Puntos disponibles </label>
                     <input type="txt" id="txtPtsDisponibles" readonly>
                  </div>
                  <div class="datos">
                     <label for="txtContrasena"> Contraseña </label>
                     <input type="password" id="txtContrasena" readonly>
                     <a href="../moduloSeguridad/cambiarContrasena.php">Cambiar contraseña</a>
                  </div>
               </div>
            </div> <!--informacion-->
            <div id="botones">
               <a href="metodoDePago.php">
                  <div class="boton" id="btnMetodosPago">
                     <span>Métodos de pago</span>
                  </div>
               </a>
               <a href="editarCliente.php">
                  <div class="boton" id="btnEditCuentaCliente">
                     <span>Editar</span>
                  </div>
               </a>
            </div>
         </form>
      </div> <!--  cierra Contenido -->
      <script type="text/javascript" src="../jquery.js"></script>
      <script type="text/javascript" src="js/logicCuentaCliente.js"></script>
   </body>
</html>
