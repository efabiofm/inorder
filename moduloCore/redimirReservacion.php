<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Redimir reservación</title>
      <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
      <link rel="stylesheet" type="text/css" href="css/styleConsultarReservacion.css">
      <link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.min.css">
      <link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
   </head>
   <body>
      <?php
         session_start();
         switch($_SESSION['perfil']){
            case 'Administrador':
            include('../menus/menuAdmin.php');
            break;

            case 'Soporte':
            include('../menus/menuSoporte.php');
            break;

            case 'Salonero':
            include('../menus/menuSalonero.php');
            break;
         }
      ?>
      <div id="contenido">
         <h1>Redimir reservación</h1>
         <div class="columna" id="primeraColumna">
            <form>
               <label for="numReservacion" class="label">Ingrese número de reservación</label>
               <input type="text" id="numReservacion">
            </form>
            <div id="botones">
               <a href="#">
                  <div class="boton" id="btnConsultar">
                     <span>Consultar</span>
                  </div>
               </a>
               <a href="#">
                  <div class="boton" id="btnRedimir">
                     <span>Redimir</span>
                  </div>
               </a>
               <a href="#">
                  <div class="boton" id="btnCancelar">
                     <span>Cancelar</span>
                  </div>
               </a>
            </div>
         </div>
         <hr>
         <div class="columna" id='segundaColumna'>
            <h2>Información de la reservación</h2>
            <table id="infoReserva">
               <tr>
                  <td class="titulo">Fecha</td>
                  <td>:</td>
                  <td class="dato">3 de junio</td>
               </tr>
               <tr>
                  <td class="titulo">Hora</td>
                  <td>:</td>
                  <td class="dato">12pm</td>
               </tr>
               <tr>
                  <td class="titulo">Cantidad de Personas:</td>
                  <td>:</td>
                  <td class="dato">7 personas</td>
               </tr>
               <tr>
                  <td class="titulo">Mesa</td>
                  <td>:</td>
                  <td class="dato">Mesa Aioria</td>
               </tr>
               <tr>
                  <td class="titulo">Número de Mesa</td>
                  <td>:</td>
                  <td class="dato">11</td>
               </tr>
               <tr>
                  <td class="titulo">Número de Reservación</td>
                  <td>:</td>
                  <td class="dato">12513</td>
               </tr>
               <tr>
                  <td class="titulo">Nombre del Cliente</td>
                  <td>:</td>
                  <td class="dato">Ricardo Tapia</td>
               </tr>
            </table>
         </div> <!-- cierra #segundaColumna -->
      </div> <!--  cierra Contenido -->
      <div id="msjError">
         <span class="rojo">Número de reservación inválido</span>
      </div>
      <script type="text/javascript" src="js/logicConsultarReservacion.js"></script>
   </body>
</html>
