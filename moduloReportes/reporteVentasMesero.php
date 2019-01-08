<!doctype html>
<html>
	<head>
		<TITLE>Reporte Ventas por Mesero</TITLE>
		<link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
		<link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
		<link rel ="stylesheet" type="text/css" href="css/styleReporteVentasMesero.css">
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
			<div class="tipoReporte">
				<label for "filtro">Filtrar por:</label>
				<select>
					<option>&nbsp</option>
					<option selected="selected">Mesero</option>
					<option>Franja Horaria</option>
					<option>Plato</option>
				<select>	
			</div>	
			<input type="button" value="Generar Reporte" id="btnGenerar"></input>		        	
	        	<div class="contenedorTabla">
					<table class="reporteVentasMesero">
						<thead>
							<tr>
								<th class="col1">Mesero</th>
								<th class="col1">Cantidad de Ventas</th>
								<th id="colFinal">Subtotal</th>
							</tr>	 	
						</thead>
						<tbody>
							<tr>
								<td class="col1">Nombre Mesero1</td>
								<td class="col2">75</td>
								<td class="col3">&#8353 950,340</td>
							</tr>
							<tr>
								<td class="col1">Nombre Mesero2</td>
								<td class="col2">103</td>
								<td class="col3">&#8353 1,278,356</td>
							</tr>
							<tr>
								<td class="col1">Nombre Mesero3</td>
								<td class="col2">81</td>
								<td class="col3">&#8353 985,215</td>
							</tr>
							<tr>
								<td class="col1">Nombre Mesero4</td>
								<td class="col2">92</td>
								<td class="col3">&#8353 1,153,784</td>
							</tr>
							<tr>
								<td class="col1">Nombre Mesero5</td>
								<td class="col2">64</td>
								<td class="col3">&#8353 765,643</td>
							</tr>
							<tr>
								<td class="col1">Nombre Mesero6</td>
								<td class="col2">96</td>
								<td class="col3">&#8353 1,348,340</td>
							</tr>
							<tr>
								<td class="col1">Nombre Mesero7</td>
								<td class="col2">70</td>
								<td class="col3">&#8353 812,600</td>
							</tr>
							<tr>
								<td class="col1">Nombre Mesero8</td>
								<td class="col2">77</td>
								<td class="col3">&#8353 996,118</td>
							</tr>
						</tbody>			
					</table> <!-- cierra la tabla reporteVentasMesero -->
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