<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Administración de puestos</title>
      <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
      <link rel="stylesheet" type="text/css" href="css/styleAdminPuestos.css">
      <link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.min.css">
      <link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
   </head>
   <body>
      <?php
         session_start();
         if($_SESSION['perfil']=='Administrador'){
            include('../menus/menuAdmin.php');
         }else{
            if($_SESSION['perfil']=='Soporte'){
               include('../menus/menuSoporte.php');
            }
         }
      ?>
      <div id="contenido">
         <h1>Administración de puestos</h1>
         <a href="agregarPuesto.php">
            <span>Agregar puesto</span>
            <i class="fa fa-plus-square"></i>
         </a>
         <div class="envoltorioTabla wrapper">
            <table id="tablaPuestos">
               <thead>
                  <tr> 
                     <th id="celdaId">Id</th>
                     <th id="celdaNombre">Nombre</th>
                     <th id="celdaDescripcion">Descripción</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
       
               </tbody>
            </table> <!-- cierra #tablaPuestos -->
         </div> <!-- cierra .envoltorioTabla -->
      </div> <!--  cierra Contenido -->
      <script type="text/javascript" src="../jquery.js"></script>
      <script type="text/javascript" src="js/logicAdminPuestos.js"></script>
   </body>
</html>
