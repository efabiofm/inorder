<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Administración de órdenes</title>
      <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
      <link rel="stylesheet" type="text/css" href="css/styleAdminOrdenes.css">
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
         <h1>Órdenes</h1>
         <div class="envoltorioTabla wrapper">
            <table id="tablaOrdenes">
               <thead>
                  <tr> 
                     <th id="celdaId">Número de Orden</th>
                     <th id="celdaNumero">Número de Mesa</th>
                     <th id="celdaEstado">Estado</th>
                     <th id="celdaSalonero">Salonero</th>
                  </tr>
               </thead>
               <tbody>
       
               </tbody>
            </table> <!-- cierra #tablaPuestos -->
         </div> <!-- cierra .envoltorioTabla -->
      </div>  <!--cierra Contenido -->
       <script type="text/javascript" src="../jquery.js"></script>
      <script type="text/javascript" src="js/logicAdminOrdenes.js"></script>
   </body>
</html>
