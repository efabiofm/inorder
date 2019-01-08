<!doctype html>
<html>
   <head>
      <meta charset='utf-8'>
      <link rel="stylesheet" href="../css/styleGeneral.css">
      <link rel="stylesheet" href="css/stylePedidoDomicilio.css">
      <link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.min.css">
       <link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
      <title>Pedido a domicilio</title>
   </head>
   <body>
      <?php include('../menus/menuCliente.php');?>
      <section class="funciones">
         <div id="contenido">
            <div id="contenedorColumnas"> 
               <form class="primeraColumna">
                  <label for "agregarBebida">Agregar bebida</label>
                  <input type="number" id="cantidadBebida" min="1">
                  <select id="listaBebidas">

                  </select>
                  <i class="fa fa-plus-square" onclick="agregarBebida()"></i>
                  <form class=agregarPlatoOrden>
                     <label for "agregarPlato">Agregar plato</label>
                     <input type="number" id="cantidadPlato" min="1">
                     <select id="listaComidas">

                     </select>
                     <i class="fa fa-plus-square" onclick="agregarComida()"></i>
                    <!-- <label for "agregarPromocion">Agregar promoción</label>
                     <input type="number" id="cantidadPromocion" min="1">
                     <select id="listaPromociones">
                        <option value="Promo0">--Seleccione una promoción--</option>
                        <option value="Promo1">Promoción 1</option>
                        <option value="Promo2">Promoción 2</option>
                        <option value="Promo3">Promoción 3</option>
                        <option value="Promo4">Promoción 4</option>
                        <option value="Promo5">Promoción 5</option>
                     </select>
                     <i class="fa fa-plus-square"></i> -->
                     <h2>Redimir puntos</h2>
                       <table id="tablaRedimir">
                            <tbody>
                                <tr>
                                    <th>Puntos por redimir</th>
                                    <td id="celdaPuntos">
                                        <select id="sltRedimir" class="sltRedimir">
                                            <option value="--">--</option>
                                            <option value="7"> 7 </option>
                                            <option value="10"> 10 </option>
                                        </select>
                                        <i class="fa fa-check-square" id="btnRedimir"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th>Total</th>
                                    <td id="celdaTotal">0</td>
                                </tr>
                            </tbody>
                        </table>
                  </form>
               </form>
               <hr>  
               <div class="segundaColumna">
                  <h1>Información del cliente</h1>
                    <table id="infoCliente">
    					<tr>
    						<th class="dato">Nombre:</th>
    						<td id="nombre"></td>
    					</tr>
    					<tr>
    						<th class="dato">Teléfono:</th>
    						<td id="telefono"></td>
    					</tr>
    					<tr>
    						<th class="dato">Puntos:</th>
    						<td id="puntos"></td>
    					</tr>
    					<tr>
    						<th class="dato">Dirección:</th>
    						<textarea id="direccion" rows="3" cols="40"></textarea>
    					</tr>
				    </table>
                </div>
                     <div class="clear"></div>
               <div class="productos">
                  <table id="tablaProductos">
                     <thead>
                        <tr> 
                           <th id="celdaCantidad">Cantidad</th>
                           <th id="celdaProducto">Producto</th>
                           <th id="celdaPrecio">Precio</th>
                           <th></th>
                        </tr>
                     </thead>
                      <tbody>
    
                      </tbody>
                  </table>
                  </div>            
               </div>
                <div id="botones">
               <a href="#">
                  <div class="boton" id="btnAceptar">
                     <span>Aceptar</span>
                  </div>
               </a>
               <a href="../moduloSeguridad/ingresoCliente.php">
                  <div class="boton" id="btnCancelar">
                     <span>Cancelar</span>
                  </div>
               </a>
            </div><!--cierra #segundaColumna--> 
            </div> <!-- cierra #contenido -->
         </div> 
      </section> <!-- cierra .funciones -->
      <div id="msjError">

      </div>
      <script type="text/javascript" src="../jquery.js"></script>
      <script type="text/javascript" src="js/logicPedidoDomicilio.js"></script>
   </body>
</html>
