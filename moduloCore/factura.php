<!doctype html>
<html>
	<head>
		<TITLE>Factura</TITLE>
		<link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
		<link rel="stylesheet" type="text/css" href="css/styleFactura.css">
		<link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
		<link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
		<meta charset="utf-8">
	</head>
	<body>
	  <?php include('../menus/menuCajero.php');?>
      <div id="contenido">
         <div id="marco">
           <table id="infoRest">
					<tr>
						<td id="nombre"></td>
					</tr>
					<tr>
						<td id="cedula"></td>
					</tr>
					<tr>
						<td id="direccion"></td>
					</tr>
					<tr>
						<td id="telefono"></td>
					</tr>
					<tr>
						<td id="horario"></td>
					</tr>
			</table>
            <table id="tablaProductos">
            	<thead>
            		<tr> 
                     <th>Cantidad</th>
                     <th>Producto</th>
                     <th>Precio</th>
            		</tr>
            	</thead>
                <tbody>
                 
               </tbody>
            </table> 
            <div></div>
            <table id="tablaTotales">
               <tbody>
                  <tr> 
                     <th>Subtotal: ₡</th>
                     <td id="subtotal"></td>
                  </tr>
                  <tr> 
                     <th>% I.V: ₡</th>
                     <td id="impuestoVentas"></td>
                  </tr>
                  <tr> 
                     <th>% I.S: ₡</th>
                     <td id="impuestoServicio"></td>
                  </tr>
                  <tr> 
                     <th>Descuento: ₡</th>
                     <td id="descuento">0.00</td>
                  </tr>
                  <tr> 
                     <th>Total: ₡</th>
                     <td id="total"></td>
                  </tr>
               </tbody>
            </table>
            <i class="fa fa-print fa-2x" id="btnImprimir"></i>
         </div><!-- cierra #marco -->
      </div><!-- cierra #contenido -->
        <script type="text/javascript" src="../jquery.js"></script>
		<script type="text/javascript" src="js/logicFactura.js"></script>
	</body>
</html>