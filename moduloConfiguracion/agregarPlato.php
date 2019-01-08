<!doctype html>
<html>
	<head>
		<TITLE>Agregar plato</TITLE>
		<link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
		<link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
		<link rel ="stylesheet" type="text/css" href="css/styleAgregarPlato.css">
		<link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
		<meta charset="utf-8">
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
    
    	<form class="contenedorTabla">
    		<table class="tabla">
    			<thead class="encabezadoTabla">
    				<tr>
    					<th class="columna1">&nbsp</th>
    					<th class="columna2">&nbsp</th>
    				</tr>
    			</thead>
    			<tbody>
    				<tr>
    					<td class="columna1">Nombre del plato</td>
    					<td class="columna2">
    						<input type="text" id="nombrePlato" class="texto campoNecesario">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Nombre en inglés (opcional)</td>
    					<td class="columna2">
    						<input type="text" id="nombreIngles" class="texto">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Precio</td>
    					<td class="columna2">
    						<input type="number" id="precioPlato" class="texto campoNecesario">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Ingredientes</td>
    					<td class="columna2">
    						<textarea  id="ingredientes" class="texto campoNecesario" cols="30" rows="8"></textarea>
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Características especiales (opcional)</td>
    					<td class="columna2">
    						<textarea  id="caractEspeciales" class="texto" cols="30" rows="6"></textarea>
    					</td>
    				</tr>	        				
    				<tr>
    					<td class="columna1">Calorías (opcional)</td>
    					<td class="columna2">
    						<input type="number" id="calorias" class="texto">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Tipo de plato</td>
    					<td class="columna2">
    						<select id="sltTiposPlato">
    							<option value="Entrada" class="listaDesplegable">Entrada</option>
    							<option value="platoFuerte" class="listaDesplegable">Plato fuerte</option>
    							<option value="Postre" class="listaDesplegable">Postre</option>
    							<option value="Cocteles" class="listaDesplegable">Coctel</option>
    							<option value="Refrescos" class="listaDesplegable">Refresco</option>
    						</select>		        						
    					</td>
    				</tr>
    			</tbody>	
    		</table>	
    	</form>	
	    <div id="botones">
         <a href="#">
            <div class="boton" id="btnGuardar">
               <span>Agregar</span>
            </div>
         </a>
      </div> 
      <div id="msjError" class="formLabel oculto">
               <span>Por favor complete los espacios en <span class="rojo">rojo.</span></span>
            </div>
        </div> <!-- cierra #contenido -->
	    <script type="text/javascript" src="../jquery.js"></script>
        <script type="text/javascript" src="js/logicAgregarPlato.js"></script>
	</body>
</html>
