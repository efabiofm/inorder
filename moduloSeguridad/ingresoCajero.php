<!doctype html>
<html>
	<head>
		<TITLE>Cajero</TITLE>
		<link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
		<link rel="stylesheet" type="text/css" href="css/styleIngresoCajero.css">
		<link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
		<link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
		<meta charset="utf-8">
	</head>
	<body>
		<?php include('../menus/menuCajero.php');?>
        <div id="contenido">
        	<div id="seccionDer">
        	    
        	    <div id="otras">
                <h2>Mesas adicionales</h2>
                  <div id="otrasMesasDiv">
                     <select id="otrasMesas">
                        
                     </select>
                  </div>
                </div>
				<h2>Puntos cliente</h2>
				<div>
					<div class="etiquetasDiv">
						<label for="txtUsername">Username</label>
						<label for="txtNombre">Nombre cliente</label>
		               	<label for="txtPtsDisponibles" >Puntos disponibles</label>
		               	<label for="txtAddPuntos">Agregar puntos</label>
						<!--<label for="txtPtsARedimir">Puntos a redimir</label>-->
					</div>
					<div class="inputsDiv">
						<input type="txt" id="txtUsername">
						<i class="fa fa-search" id="buscar"></i>
						<input type="txt" id="txtNombre" readonly>
		            	<input type="txt" id="txtPtsDisponibles" readonly>
		            	 	<select id="sltAgregar" class="sltRedimir">
							<option value="--">--</option>
							<option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
						</select>
						<a href="#">
		                 	<div class="boton" id="btnAgregar">
		                    	<span>Agregar</span>
		                 	</div>
	              		</a>
		               	<!--<select id="sltRedimir" class="sltRedimir">
							<option value="--">--</option>
                            <option value="7"> 7 </option>
                            <option value="10"> 10 </option>
						</select>
						<a href="#">
		                 	<div class="boton" id="btnRedimir">
		                    	<span>Redimir</span>
		                 	</div>
	              		</a>-->
					</div>
				</div>
				<section id="interaccion">
				    <a href="#">
		               <div class="intButton" id="btnFacturar">
		                  <i class="fa fa-money"></i>
		                  <span>Facturar</span>
		               </div>
		            </a>
		        </section>
		        <div id="msjError">
                     <span id="usuarioInexistente">
                        El username ingresado no existe.
                     </span>
                  </div>
			</div> <!-- cierra #seccionDer -->
			 <div id="seccionIzq">
				<div id="mesasDiv">
					<h2>Mesas principales</h2>
	                <div class="mesa" id="mesa1"><img src="../imagenes/table.png" height="48px" width="48px"></div>
	                <div class="mesa" id="mesa2"><img src="../imagenes/table.png" height="48px" width="48px"></div>
	                <div class="mesa" id="mesa3"><img src="../imagenes/table.png" height="48px" width="48px"></div>
	                <div class="mesa" id="mesa4"><img src="../imagenes/table.png" height="48px" width="48px"></div>
	                <div class="mesa" id="mesa5"><img src="../imagenes/table.png" height="48px" width="48px"></div>
	                <div class="mesa" id="mesa6"><img src="../imagenes/table.png" height="48px" width="48px"></div>
	                <div class="mesa" id="mesa7"><img src="../imagenes/table.png" height="48px" width="48px"></div>
	                <div class="mesa" id="mesa8"><img src="../imagenes/table.png" height="48px" width="48px"></div>
	                <div class="mesa" id="mesa9"><img src="../imagenes/table.png" height="48px" width="48px"></div>
                	<div class="mesa" id="mesa10"><img src="../imagenes/table.png" height="48px" width="48px"></div>
                	
				</div> <!-- cierra #mesasDiv -->
		        <table id="tablaProductos">
			        <thead>
			           <tr> 
			              <th id="celdaCantidad">Cantidad</th>
			              <th id="celdaProducto">Producto</th>
			              <th id="celdaPrecio">Precio</th>
			           </tr>
			        </thead>
			        <tbody>
			           
			        </tbody>
			     </table>
	        </div> <!-- cierra #seccionIzq -->
        </div> <!-- cierra #contenido -->
         <div id="msjError">
         <span id="msjReviseCampos">
            Por favor revise los espacios en <span class="rojo">rojo.</span>
         </span>
         <span id="msjPuntosInsuficientes">
            <span class="rojo">No tiene puntos suficientes.</span>
         </span>
      </div>
        <script type="text/javascript" src="../jquery.js"></script>
		<script type="text/javascript" src="js/logicIngresoCajero.js"></script>
	</body>
</html>