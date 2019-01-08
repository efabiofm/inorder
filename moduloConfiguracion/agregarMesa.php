<!doctype html>
<html>
	<head>
		<TITLE>Agregar mesa</TITLE>
		<link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
		<link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
		<link rel ="stylesheet" type="text/css" href="css/styleAgregarMesa.css">
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
    					<th class="columna1"></th>
    					<th class="columna2"></th>
    				</tr>
    			</thead>
    			<tbody>
    				<tr>
    					<td class="columna1">Número de mesa</td>
    					<td class="columna2">
    						<input type="number" id="numeroMesa" class="texto campoNecesario">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Nombre de la mesa</td>
    					<td class="columna2">
    						<input type="text" id="nombreMesa" class="texto campoNecesario">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Descripción de la mesa</td>
    					<td class="columna2">
    						<textarea id="descripcionMesa" class="texto campoNecesario" cols="30" rows="6"></textarea>
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Capacidad</td>
    					<td class="columna2">
    						<input type="number" id="capacidadMesa" class="texto campoNecesario">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Tipo de mesa</td>
    					<td class="columna2">
    						<select id="tipoMesa">
    							<option class="listaDesplegable">Apta para discapacitados</option>
    							<option class="listaDesplegable">No apta para discapacitados</option>
    						</select>	
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
    </div><!-- cierra #contenido -->
     <script type="text/javascript" src="../jquery.js"></script>
      <script type="text/javascript" src="js/logicAgregarMesa.js"></script>
	</body>
</html>