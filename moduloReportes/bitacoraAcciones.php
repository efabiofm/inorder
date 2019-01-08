<!doctype html>
<html>
	<head>
		<TITLE>Bitácora de acciones</TITLE>
		<link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
		<link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
		<link rel ="stylesheet" type="text/css" href="css/styleBitacoraAcciones.css">
		<link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
		<meta charset="utf-8">
	</head>
	<body>
		<?php include('../menus/menuAdmin.php');?>
	        <div id="contenido">
			<form class="fecha">
				<label for "fechaInicio">Fecha Inicial</label>
				<input type="date" id="fechaInicio" name="campoRequerido">
				<label for "fechaFinal">Fecha Final</label>
				<input type="date" id="fechaFinal" name="campoRequerido">
			</form>
			<input type="button" value="Generar Reporte" id="btnGenerar">		        	
	        	<div class="contenedorTabla">
					<table class="bitacoraAcciones">
						<thead> 
							<tr>
								<th class="col1">Fecha</th>
								<th class="col2">Usuario</th>
								<th class="col3">Nombre</th>
								<th class="col4">Acción</th>
								<th class="colFinal">Descripción</th>
							</tr>	 	
						</thead>
						<tbody>
							<tr>
								<td class="col1">2015-01-14</td>
								<td class="col2">Cliente</td>
								<td class="col3">Andrés Antonio Suárez León</td>
								<td class="col4">Editar Información Personal</td>
								<td class="col5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
							</tr>
							<tr>
								<td class="col1">2015-03-18</td>
								<td class="col2">Mesero</td>
								<td class="col3">Antonio Solís Vega</td>
								<td class="col4">Crear Orden</td>
								<td class="col5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
							</tr>
							<tr>
								<td class="col1">2015-03-18</td>
								<td class="col2">Mesero</td>
								<td class="col3">Antonio Solís Vega</td>
								<td class="col4">Modificar Orden</td>
								<td class="col4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
							</tr>
							<tr>
								<td class="col1">2015-03-18</td>
								<td class="col2">Encargado de Cocina</td>
								<td class="col3">Natalia Vargas Castillo</td>
								<td class="col4">Modificar Orden</td>
								<td class="col5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
							</tr>
							<tr>
								<td class="col1">2015-03-18</td>
								<td class="col2">Mesero</td>
								<td class="col3">Antonio Solís Vega</td>
								<td class="col4">Modificar Orden</td>
								<td class="col5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
							</tr>
							<tr>
								<td class="col1">2015-03-18</td>
								<td class="col2">Mesero</td>
								<td class="col3">Antonio Solís Vega</td>
								<td class="col4">Modificar Orden</td>
								<td class="col5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
							</tr>
							<tr>
								<td class="col1">2015-03-18</td>
								<td class="col2">Encargado de Cocina</td>
								<td class="col3">Natalia Vargas Castillo</td>
								<td class="col4">Modificar Orden</td>
								<td class="col5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
							</tr>
							<tr>
								<td class="col1">2015-03-18</td>
								<td class="col2">Cajero</td>
								<td class="col3">Grettel Castro Peña</td>
								<td class="col4">Cobrar Orden</td>
								<td class="col5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
							</tr>
							<tr>
								<td class="col1">2015-03-18</td>
								<td class="col2">Cajero</td>
								<td class="col3">Grettel Castro Peña</td>
								<td class="col4">Agregar Puntos</td>
								<td class="col5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
							</tr>
						</tbody>	
					</table>
	        	</div>	<!--cierra el div contenedorTabla-->
	        </div> <!-- cierra #contenido -->
	        <nav class="redesSociales">
	        	<i class="fa fa-facebook-official"></i>
	        	<i class="fa fa-google-plus-square"></i>
	        	<i class="fa fa-twitter-square"></i>
	        </nav>
		</section> <!-- cierra .funciones -->
	</body>
</html>