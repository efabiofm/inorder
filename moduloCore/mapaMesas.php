<!doctype html>
<html>
   <head>
      <meta charset='utf-8'>
      <link rel="stylesheet" href="../css/styleGeneral.css">
      <link rel="stylesheet" href="css/styleMapaMesas.css">
      <link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
      <link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
      <title>Mapa de mesas</title>
   </head>
   <body>
        <div id="body">
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
            <div id="primeraColumna">
               <h2>Mesas principales</h2>
               <div id="mesasDiv">
                   <div class="mesa btnClick" id="mesa1"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
                   <div class="mesa btnClick" id="mesa2"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
                   <div class="mesa btnClick" id="mesa3"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
                   <div class="mesa btnClick" id="mesa4"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
                   <div class="mesa btnClick" id="mesa5"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
                   <div class="mesa btnClick" id="mesa6"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
                   <div class="mesa btnClick" id="mesa7"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
                   <div class="mesa btnClick" id="mesa8"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
                   <div class="mesa btnClick" id="mesa9"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
                   <div class="mesa btnClick" id="mesa10"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
               </div>
               <div id="leyenda">
                   <i id="disponible" class="fa fa-square"></i>
                   <span class="spanLeyenda">Mesa disponible</span>
                   <i id="noDisponible" class="fa fa-square"></i>
                   <span class="spanLeyenda">Mesa no disponible</span>
                </div>
               <div id="error" class="oculto">
                  <span>La mesa no tiene ninguna orden <span class="rojo">activa</span></span>
               </div>
            </div> <!-- cierra #primeraColumna -->
            <div id='segundaColumna'>
               <form>
                  <h2>Mesas adicionales</h2>
                  <div id="otrasMesasDiv">
                     <select id="otrasMesas">
                     </select>
                     <i class="fa fa-glass" id="btnPlatos"></i>
                  </div>
               </form>
               <div id="info">
                  <h2>Información de la mesa</h2>
                  <table id="infoMesa">
                     <tr>
                        <td>Número:</td>
                        <td id="numMesa"></td>
                     </tr>
                     <tr>
                        <td>Nombre:</td>
                        <td id="nomMesa"></td>
                     </tr>
                     <tr>
                        <td>Capacidad:</td>
                        <td id="capMesa"></td>
                     </tr>
                     <tr>
                        <td>Tipo:</td>
                        <td id="tipoMesa"></td>
                     </tr>
                     <tr>
                        <td>Descripción:</td>
                        <td id="descMesa"></td>
                     </tr>
                  </table>
               </div> <!-- cierra #info -->
            </div> <!-- cierra #segundaColumna -->
            <div id="botones">
              <a href="#">
                 <div class="boton" id="btnOrden">
                    <span>Agregar orden</span>
                 </div>
              </a>
           </div>
         </div><!-- cierra #contenido -->
         </div>
     <div id='msjConfirmacion'>
		<span id="mensaje"></span>
		<a href="#">
	       <div class="boton" id="btnAceptar">
	           <span>Aceptar</span>
	       </div>
	   </a>
	 </div>
     <script type="text/javascript" src="../jquery.js"></script>
     <script type="text/javascript" src="js/logicMapaMesas.js"></script>
   </body>
</html>
