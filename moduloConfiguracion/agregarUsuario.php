<!doctype html>
<html>
	<head>
		<TITLE>Agregar usuario</TITLE>
		<link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
		<link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
		<link rel ="stylesheet" type="text/css" href="css/styleAgregarUsuario.css">
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
    					<td class="columna1">Tipo de usuario</td>
    					<td class="columna2">
    						<select id="sltTipoUsuario">
    							<option value="Soporte" class="listaDesplegable">Soporte</option>
    							<option value="Salonero" class="listaDesplegable">Salonero</option>
    							<option value="Cocinero" class="listaDesplegable">Cocinero</option>
    							<option value="Cajero" class="listaDesplegable">Cajero</option>
    							<option value="General" class="listaDesplegable">General</option>
    						</select>	
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Primer nombre</td>
    					<td class="columna2">
    						<input type="text" id="primerNombre" class="texto" name="obligatorio">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Segundo nombre (opcional)</td>
    					<td class="columna2">
    						<input type="text" id="segundoNombre" class="texto">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Primer apellido</td>
    					<td class="columna2">
    						<input type="text" id="primerApellido" class="texto" name="obligatorio">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Segundo apellido (opcional)</td>
    					<td class="columna2">
    						<input type="text" id="segundoApellido" class="texto">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Correo electrónico</td>
    					<td class="columna2">
    						<input type="text" id="correo" class="texto" name="obligatorio">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Fecha de nacimiento</td>
    					<td class="columna2">
    						<input type="date" id="fechaNacimiento" class="texto" name="obligatorio">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Edad</td>
    					<td class="columna2">
    						<input type="number" id="edad" class="texto" min="18" name="obligatorio">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Teléfono</td>
    					<td class="columna2">
    						<input type="tel" id="telefono" class="texto" name="obligatorio">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Nacionalidad</td>
    					<td class="columna2">
    						<input type="text" id="nacionalidad" class="texto" name="obligatorio">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Nombre de usuario</td>
    					<td class="columna2">
    						<input type="text" id="username" class="texto" name="obligatorio">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Contraseña</td>
    					<td class="columna2">
    						<input type="password" id="contrasena" class="texto" name="obligatorio">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Fecha de ingreso</td>
    					<td class="columna2">
    						<input type="date" id="fechaIngreso" class="texto" name="obligatorio">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Puesto</td>
    					<td class="columna2">
    						<select id="sltPuestos">
    							
    						</select>		        						
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Estado</td>
    					<td class="columna2">
    						<select id="sltEstado">
    							<option value="Activo" class="listaDesplegable">Activo</option>
    							<option value="Inactivo" class="listaDesplegable">Inactivo</option>
    						</select>	
    				</tr>
    			</tbody>	
    		</table>	
    	</form>	
	    <div id="botones">
         <a href="#">
            <div class="boton" id="btnAgregar">
               <span>Agregar</span>
            </div>
         </a>
      </div>
      <div id="msjError">
         <span>
            Por favor corrija los espacios en <span class="rojo">rojo</span>
         </span>
      </div> 
    </div> <!-- cierra #contenido -->
    <script type="text/javascript" src="../jquery.js"></script>
    <script type="text/javascript" src="js/logicAgregarUsuario.js"></script>
	</body>
</html>