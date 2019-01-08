<!doctype html>
<html>
   <head>
      <TITLE>Administrador</TITLE>
      <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
      <link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
      <link rel ="stylesheet" type="text/css" href="css/styleIngresoAdmin.css">
      <link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
      <meta charset="utf-8">
   </head>
   <body>
      <?php include('../menus/menuAdmin.php');?>
      <div id="contenido">
         <div id="encabezadoEstadisticas">
            <h3>Estadísticas generales</h3>
         </div>   
         <ul class="estadisticas">
            <li class="itemsEstadisticas"><span id="linea1">Ventas Netas</span> <span id="moneda">&#8353</span> 260,000</li>
            <li class="itemsEstadisticas"><span id="linea2">Descuentos</span> <span id="moneda">&#8353</span> 0</li>
            <li class="itemsEstadisticas"><span id="linea3">Órdenes Activas</span> 19</li>
            <li class="itemsEstadisticas"><span id="linea4">Órdenes Facturadas</span> 32</li>      
         </ul>       
         <div id="encabezadoOrdenes">
            <h3>Estado actual de órdenes</h3>
         </div>
         <div class="estadoOrdenes">    
            <table id="tablaEstadoOrdenes">
               <thead>
                  <tr>
                     <th>Pendientes</th>
                     <th>En proceso</th>
                     <th>Preparadas</th>
                     <th>Entregadas</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>6</td>
                     <td>8</td>
                     <td>5</td>
                     <td>37</td>
                  </tr>
               </tbody>
            </table>
         </div><!--cierra el div estadoOrdenes-->      

         <div class="contenedorTabla">   
            <table class="saloneros">
               <thead>
                  <tr>
                     <th class="colLarga">Salonero</th>
                     <th class="colCorta">Ordenes activas</th>
                     <th class="colCorta">Platos pendientes</th>
                     <th class="colCorta">Platos en proceso</th>
                     <th class="colCorta">Platos preparados</th>
                     <th class="colCorta">Platos entregados</th>
                  </tr> 
               </thead>
               <tbody>
                  <tr>
                     <td>Salonero 1</td>
                     <td>4</td>
                     <td>1</td>
                     <td>2</td>
                     <td>1</td>
                     <td>21</td>
                  </tr>
                  <tr>
                     <td>Salonero 2</td>
                     <td>4</td>
                     <td>1</td>
                     <td>2</td>
                     <td>1</td>
                     <td>21</td>
                  </tr>
                  <tr>
                     <td>Salonero 3</td>
                     <td>4</td>
                     <td>1</td>
                     <td>2</td>
                     <td>1</td>
                     <td>21</td>
                  </tr>
                  <tr>
                     <td>Salonero 4</td>
                     <td>4</td>
                     <td>1</td>
                     <td>2</td>
                     <td>1</td>
                     <td>21</td>
                  </tr>  
               </tbody>        
            </table> 
         </div><!--Cierra el div contenedorTabla-->   
      </div><!--Cierra el div contenido-->
      <div id="contenedorGrafico"></div>
      <script type="text/javascript" src="https://www.google.com/jsapi"></script>
      <script type="text/javascript" src="js/logicChart.js"></script>
   </body>
</html>
