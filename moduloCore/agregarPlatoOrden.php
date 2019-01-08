  <!doctype html>
<html>
   <head>
      <meta charset='utf-8'>
      <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
      <link rel="stylesheet" href="css/styleAgregarPlatoOrden.css">      
      <link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.min.css">
      <link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
      <title>Agregar plato a la orden</title>
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
      <div id="contenedorColumnas"> 
         <form class="primeraColumna">
            <label for "agregarBebida">Agregar bebida</label>
            <input type="number" min="0" id="cantidadBebida" class="cantidad campoBebida">
            <select id="listaBebidas" class="campoBebida">
               <option class="vacio">--Seleccione--</option>
            </select>
            <i class= "fa fa-plus-square fa-lg" id="submitBebida"></i>
            <form class=agregarPlatoOrden>
               <label for "agregarPlato">Agregar plato fuerte</label>
               <input type="number" min="0" id="cantidadPlato" class="cantidad" name="campoRequerido">
               <select id="listaPlatos">
                  <option class="vacio">--Seleccione--</option>
               </select>
               <i class=" fa fa-plus-square fa-lg" id="submitPlato"></i>
            </form> <!--Cierra el form agregarPlatoOrden-->
         </form>
         <div id="msjError" class="oculto">
            <span>Por favor corrija los espacios en <span class="rojo">rojo.</span></span>
         </div>
         <hr>  
         <div class="segundaColumna">
            <h2>Información de la orden</h2> 
            <table id="informacionOrden">
					<tr>
						<th class="dato">Orden:</th>
						<td id="numOrden"></td>
					</tr>
					<tr>
						<th class="dato">Mesa #:</th>
						<td id="numMesa"></td>
					</tr>
					<tr>
						<th class="dato">Salonero:</th>
						<td id="salonero"></td>
					</tr>
			</table><!--Cierra el div informacionOrden-->  
            <div class="productos">
               <table id="tablaProductos">
                     <thead>
                        <tr> 
                           <th id="celdaCantidad">Cantidad</th>
                           <th id="celdaNombrePlato">Producto</th>
                           <th id="celdaPrecio">Precio</th>
                           <th id ="celdaEstado">Estado</th>
                           <th id="celdaIdItem" class="itemOculto">Item</th>
                           <th id="celdaEliminar"></th>
                        </tr>
                     </thead>
                  <tbody>
                  </tbody>
                  </table>
            </div>            
         </div><!--Cierra el div segundaColumna--> 
         <div id="botones2">
            <a href="mapaMesas.php">
               <div class="boton" id="btnRegresar">
                  <span>Regresar</span>
               </div>
            </a>
         </div>
      <script type="text/javascript" src="../jquery.js"></script> 
      <script type="text/javascript" src="js/logicAgregarPlatoOrden.js"></script>
   </body>
</html>
