<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Confirmación</title>
      <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
      <link rel="stylesheet" type="text/css" href="css/styleReservacionConfirmada.css">
      <link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.min.css">
      <link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
   </head>
   <body>
      <?php include('../menus/menuCliente.php');?>
      <div id="contenido">
         <h1>¡Su reservación se ha hecho exitosamente!</h1>
         <div id="primeraColumna">
            <h2>Información</h2>
            <table id="infoReserva">
               <tr>
                  <td class="titulo">Fecha</td>
                  <td>:</td>
                  <td class="dato" id="fecha"></td>
               </tr>
               <tr>
                  <td class="titulo">Hora</td>
                  <td>:</td>
                  <td class="dato" id="hora"></td>
               </tr>
               <tr>
                  <td class="titulo">Cantidad de Personas:</td>
                  <td>:</td>
                  <td class="dato" id="personas"></td>
               </tr>
               <tr>
                  <td class="titulo">Mesa</td>
                  <td>:</td>
                  <td class="dato" id="mesa"></td>
               </tr>
               <tr>
                  <td class="titulo">Número de Mesa</td>
                  <td>:</td>
                  <td class="dato" id="numMesa"></td>
               </tr>
               <tr>
                  <td class="titulo">Número de Reservación</td>
                  <td>:</td>
                  <td class="dato" id="numReserva2"></td>
               </tr>
            </table>
         </div> <!-- cierra #primeraColumna -->
         <div id="segundaColumna">
            <h2>Por favor guarde su número de reservación</h2>
            <div id="cajaNum">
               <span class="numReserva" id="numReserva"></span>
            </div>
            <span id="dudas">¿Dudas? Llámenos con el número de su reserva al 5555-5555</span>
         </div> <!-- cierra #segundaColumna -->
         <div id="botones">
            <a href="../moduloSeguridad/ingresoCliente.php">
               <div class="boton">
                  <span>Salir</span>
               </div>
            </a>
         </div>
      </div> <!--  cierra Contenido -->
      <script type="text/javascript" src="../jquery.js"></script>
      <script type="text/javascript" src="js/logicReservacionConfirmada.js"></script>
   </body>
</html>