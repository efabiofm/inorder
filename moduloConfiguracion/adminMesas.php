<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Administración de mesas</title>
      <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
      <link rel="stylesheet" type="text/css" href="css/styleAdminMesas.css">
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
         <h1>Administración de mesas</h1>
         <div id="agregarMesa">
            <a href="agregarMesa.php">
               <span>Agregar mesa</span>
               <i class="fa fa-plus-square"></i>
            </a>
         </div>
         <table id="tablaMesas">
            <thead>
               <tr id="titulo">
                  <th>Número</th>
                  <th>Nombre</th>
                  <th>Capacidad</th>
                  <th>Tipo</th>
                  <th>Descripción</th>
                  <th>Estado</th>
                  <th></th>
               </tr>
            </thead>
            <tbody>
            </tbody>
         </table> <!-- cierra #tabla -->
      </div> <!--  cierra Contenido -->
      <script type="text/javascript" src="../jquery.js"></script>
      <script type="text/javascript" src="js/logicAdminMesas.js"></script>
   </body>
</html>
