<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Consultar reservación</title>
      <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
      <link rel="stylesheet" type="text/css" href="css/styleConsultarReservacionCliente.css">
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

            case 'Cliente':
            include('../menus/menuCliente.php');
            break;
            
            case 'Salonero':
            include('../menus/menuSalonero.php');
            break;
         }
      ?>
      
      <div id="contenido">
         <h1>Consultar reservación</h1>
         <div class="columna" id="primeraColumna">
            <form>
               <label for="numReservacion" class="label">Ingrese número de reservación</label>
               <i id="btnConsultar" class="fa fa-search"></i>
               <input type="text" id="numReservacion">
            </form>
            <section id="buttoms">
          
               <div id="eliminar">
               <a href="#">
                  <div class="botonesB" id="btnEliminar">
                  <i class="fa fa-trash"></i>
                     <span>Eliminar</span>
                  </div>
               </a>
               </div>
            </section>
         </div>
         <hr>
         <div class="columna" id='segundaColumna'>
            <h2>Información de la reservación</h2>
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
                  <td class="titulo">Cantidad de personas</td>
                  <td>:</td>
                  <td class="dato" id="personas"></td>
               </tr>
               <tr>
                  <td class="titulo">Mesa</td>
                  <td>:</td>
                  <td class="dato" id="mesa"></td>
               </tr>
               <tr>
                  <td class="titulo">Número de mesa</td>
                  <td>:</td>
                  <td class="dato" id="numMesa"></td>
               </tr>
               <tr>
                  <td class="titulo">Número de reservación</td>
                  <td>:</td>
                  <td class="dato" id="numReserva"></td>
               </tr>
               <tr>
                  <td class="titulo">Nombre del cliente</td>
                  <td>:</td>
                  <td class="dato" id="nomCliente"></td>
               </tr>
               <tr>
                  <td class="titulo">Estado</td>
                  <td>:</td>
                  <td class="dato" id="estado"></td>
               </tr>
            </table>
         </div> <!-- cierra #segundaColumna -->
      </div> <!--  cierra Contenido -->
      <div id="msjError" class="alerts">
         <span class="rojo">Número de reservación inválido</span>
      </div>
      <script type="text/javascript" src="../jquery.js"></script>
      <script type="text/javascript" src="js/logicConsultarReservacionCliente.js"></script>
   </body>
</html>
