<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Administración de usuarios</title>
      <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
      <link rel="stylesheet" type="text/css" href="css/styleAdminUsuarios.css">
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
         <div id="tituloPrincipal">
            <h1> Administración de usuarios </h1>
            <div id="divAgregar">
                <!--
                  <i class="fa fa-search"></i>
                  <input type="txt" id="buscarCliente" value="Buscar cliente..." onFocus="if (this.value=='Buscar cliente...') this.value='';">
                  -->
               <a href="agregarUsuario.php">
                  <i class="fa fa-plus-square"></i>
                  <span>Agregar usuario</span>
               </a>
            </div>
         </div>
         <table id="tablaUsuarios">
            <thead>
               <tr id="titulo">
                  <th id="tituloId">Id</th>
                  <th>Tipo</th>
                  <th>Primer nombre</th>
                  <th>Segundo nombre</th>
                  <th>Primer apellido</th>
                  <th>Segundo apellido</th>
                  <th>Usuario</th>
                  <th>E-mail</th>
                  <th>Contraseña</th>
                  <th>Fecha nacimiento</th>
                  <th>Edad</th>
                  <th>Teléfono</th>
                  <th>Nacionalidad</th>
                  <th>Fecha ingreso</th>
                  <th>Puesto</th>
                  <th>Estado</th>
                  <th class="iconos"></th>
               </tr>
            </thead>
            <tbody>
               
            </tbody>
         </table>
      </div> <!--  cierra Contenido -->
      <script type="text/javascript" src="../jquery.js"></script>
      <script type="text/javascript" src="js/logicAdminUsuarios.js"></script>
   </body>
</html>
