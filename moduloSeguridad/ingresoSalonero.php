<!doctype html>
<html>
   <head>
      <TITLE>Administrador</TITLE>
		<link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
		<link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
		<link rel ="stylesheet" type="text/css" href="css/styleIngresoSalonero.css">
		<link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
      <meta charset="utf-8">
   </head>
   <body>
        <?php include('../menus/menuSalonero.php');?>
      <div id="contenido">      
         <div id="encabezadoOrdenes">
            <h3>Estado actual de platos</h3>
         </div>
         <div class="estadoOrdenes">    
            <table id="tablaEstadoOrdenes">
               <thead>
                  <tr>
                     <th>Pendientes</th>
                     <th>En proceso</th>
                     <th>Preparados</th>
                     <th>Entregados</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>24</td>
                     <td>18</td>
                     <td>6</td>
                     <td>36</td>
                  </tr>
               </tbody>
            </table>
         </div><!--cierra el div estadoOrdenes-->      
            <div class="ordenesActivas" id="ordenesActivas">    
                                                                                                   
            </div><!--cierra el div ordenesActivas-->
            <div id="reservaciones"> 
               <div id="encabezadoReservaciones">
                  <h3>Reservaciones</h3>
               </div>   
               <table id="tablaReservaciones">
                  <thead>
                     <th>Hora</th>
                     <th id="encabezadoMesa">Mesa</th>
                     <th>Personas</th>
                  </thead>  
                  <tbody>
                  </tbody> 
               </table>   
            </div> <!--cierra el div reservaciones-->       
      </div><!--Cierra el div contenido-->
      <script type="text/javascript" src="../jquery.js"></script>
      <script src="js/logicIngresoSalonero.js" type="text/javascript" charset="utf-8"></script>
   </body>
</html>
