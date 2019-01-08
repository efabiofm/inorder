<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Cambio de contraseña</title>
      <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
      <link rel="stylesheet" type="text/css" href="css/styleCambiarContrasena.css">
      <link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.min.css">
      <link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
   </head>
   <body>
      <div id="cuerpo">
         <?php include('../menus/menuCliente.php');?>
         <div id="contenido">
            <h1>Cambio de contraseña</h1>
            <form class="cuadroContrasena">
               <div id="etiquetas">
                  <label for="txtPassActual">Contraseña actual</label>
                  <label for="txtPassNuevo">Contraseña nueva</label>
                  <label for="txtConfirmarPass">Vuelva a escribir la contraseña nueva</label>
               </div>
               <div id="entradas">
                  <input type="password" id="txtPassActual" class="campos">
                  <input type="password" id="txtPassNuevo" class="campos">
                  <input type="password" id="txtConfirmarPass" class="campos">
                  <a href="recuperarContrasena.html">¿Olvidó su contraseña?</a>
               </div>
            </form>
            <div id="botones">
               <a href="#">
                  <div class="boton" id="btnGuardar">
                     <span>Guardar</span>
                  </div>
               </a>
               <a href="#">
                  <div class="boton" id="btnCancelar">
                     <span>Cancelar</span>
                  </div>
               </a>
            </div>
            <div id="msjError">
               <span>
                  Por favor corrija los espacios en <span class="rojo">rojo</span>
               </span>
            </div>
         </div> <!--  cierra Contenido -->
      </div> <!-- cierra #cuerpo -->
      <div id='msjConfirmacion'>
         <span>¡La contraseña ha sido cambiada exitosamente!</span>
         <a href="#">
               <div class="boton" id="btnAceptar">
                   <span>Aceptar</span>
               </div>
           </a>
      </div>
      <script type="text/javascript" src="../jquery.js"></script>
      <script type="text/javascript" src="js/logicCambiarContrasena.js"></script>
   </body>
</html>