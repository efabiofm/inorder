<!doctype html>
<html>
	<head>
		<TITLE>Reporte Ventas por Hora</TITLE>
		<link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
		<link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
		<link rel ="stylesheet" type="text/css" href="css/styleReporteVentasHora.css">
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
					<option>Mesero</option>
					<option selected="selected">Franja Horaria</option>
					<option>Plato</option>
				<select>	
			</div>	
			<input type="button" value="Generar Reporte" id="btnGenerar"></input>		        	
	        	<div class="contenedorTabla">
					<table class="reporteVentasHora">
						<thead>
							<tr>
								<th class="col1">Hora</th>
								<th class="col2">Cantidad de Ventas</th>
								<th id="colFinal">Subtotal</th>
							</tr>	 	
						</thead>																				
						<tbody>
							<tr>
								<td class="col1">2:00 PM</td>
								<td class="col2">60</td>
								<td class="col3">&#8353 540,845</td>
							</tr>
							<tr>
								<td class="col1">3:00 PM</td>
								<td class="col2">45</td>
								<td class="col3">&#8353 448,000</td>
							</tr>
							<tr>
								<td class="col1">4:00 PM</td>
								<td class="col2">38</td>
								<td class="col3">&#8353 455,581</td>
							</tr>
							<tr>
								<td class="col1">5:00 PM</td>
								<td class="col2">65</td>
								<td class="col3">&#8353 694,160</td>
							</tr>
							<tr>
								<td class="col1">6:00 PM</td>
								<td class="col2">94</td>
								<td class="col3">&#8353 854,000</td>
							</tr>
							<tr>
								<td class="col1">7:00 PM</td>
								<td class="col2">106</td>
								<td class="col3">&#8353 1,458,000</td>
							</tr>
							<tr>
								<td class="col1">8:00 PM</td>
								<td class="col2">121</td>
								<td class="col3">&#8353 1,854,000</td>
							</tr>
							<tr>
								<td class="col1">9:00 PM</td>
								<td class="col2">75</td>
								<td class="col3">&#8353 1,047,000</td>
							</tr>
							<tr>
								<td class="col1">10:00 PM</td>
								<td class="col2">31</td>
								<td class="col3">&#8353 353,800</td>
							</tr>
							<tr>
								<td class="col1">11:00 PM</td>
								<td class="col2">15</td>
								<td class="col3">&#8353 256,920</td>
							</tr>
							<tr>
								<td class="col1">00:00 AM</td>
								<td class="col2">17</td>
								<td class="col3">&#8353 274,890</td>
							</tr>
							<tr>
								<td class="col1">1:00 AM</td>
								<td class="col2">4</td>
								<td class="col3">&#8353 53,200</td>
							</tr>
						</tbody>			
					</table> <!-- cierra la tabla reporteVentasHora -->
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