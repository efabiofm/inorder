<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Administración de platos</title>
      <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
      <link rel="stylesheet" type="text/css" href="css/styleAdminPlatosx.css">
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
         <h1>Administración de platos</h1>
         <div id="agregarPlato">
            <a href="agregarPlato.php">
               <span>Agregar plato</span>
               <i class="fa fa-plus-square"></i>
            </a>
         </div>
         <table id="tablaPlatos">
            <thead>
               <tr id="titulo">
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Tipo</th>
                  <th>Precio</th>
                  <th>Ingredientes</th>
                  <th>Especialidades</th>
                  <th>Name</th>
                  <th>Calorías</th>
                  <th></th>
               </tr>
            </thead>
            <tbody>
            
            </tbody>
         </table> <!-- cierra #tabla -->
      </div> <!--  cierra Contenido -->
      <script type="text/javascript" src="../jquery.js"></script>
      <script type="text/javascript" src="js/logicAdminPlatos.js"></script>
   </body>
</html>
