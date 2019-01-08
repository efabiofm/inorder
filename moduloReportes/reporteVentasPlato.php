<!doctype html>
<html>
	<head>
		<TITLE>Reporte Ventas por plato</TITLE>
		<link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
		<link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
		<link rel ="stylesheet" type="text/css" href="css/styleReporteVentasPlato.css">
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
					<option>Franja Horaria</option>
					<option selected="selected">Plato</option>
				<select>	
			</div>	
			<input type="button" value="Generar Reporte" id="btnGenerar"></input>		        	
	        	<div class="contenedorTabla">
					<table class="reporteVentasPlato">
						<thead>
							<tr>
								<th class="col1">Plato</th>
								<th class="col2">Cantidad de Ventas</th>
								<th id="colFinal">Subtotal</th>
							</tr>	 	
						</thead>
						<tbody>
							<tr>
								<td class="col1">Plato 1</td>
								<td class="col2">32</td>
								<td class="col3">&#8353 474,150</td>
							</tr>
							<tr>
								<td class="col1">Plato 2</td>
								<td class="col2">30</td>
								<td class="col3">&#8353 465,396</td>
							</tr>
							<tr>
								<td class="col1">Plato 3</td>
								<td class="col2">28</td>
								<td class="col3">&#8353 419,750</td>
							</tr>
							<tr>
								<td class="col1">Plato 4</td>
								<td class="col2">28</td>
								<td class="col3">&#8353 365,745</td>
							</tr>
							<tr>
								<td class="col1">Plato 5</td>
								<td class="col2">28</td>
								<td class="col3">&#8353 356,470</td>
							</tr>
							<tr>
								<td class="col1">Plato 6</td>
								<td class="col2">27</td>
								<td class="col3">&#8353 339,800</td>
							</tr>
							<tr>
								<td class="col1">Plato 7</td>
								<td class="col2">25</td>
								<td class="col3">&#8353 223,645</td>
							</tr>
							<tr>
								<td class="col1">Plato 8</td>
								<td class="col2">24</td>
								<td class="col3">&#8353 321,080</td>
							</tr>
							<tr>
								<td class="col1">Plato 9</td>
								<td class="col2">24</td>
								<td class="col3">&#8353 315,846</td>
							</tr>
							<tr>
								<td class="col1">Plato 10</td>
								<td class="col2">24</td>
								<td class="col3">&#8353 300,657</td>
							</tr>
							<tr>
								<td class="col1">Plato 11</td>
								<td class="col2">23</td>
								<td class="col3">&#8353 296,320</td>
							</tr>
							<tr>
								<td class="col1">Plato 12</td>
								<td class="col2">23</td>
								<td class="col3">&#8353 285,925</td>
							</tr>
							<tr>
								<td class="col1">Plato 13</td>
								<td class="col2">22</td>
								<td class="col3">&#8353 284,796</td>
							</tr>
							<tr>
								<td class="col1">Plato 14</td>
								<td class="col2">22</td>
								<td class="col3">&#8353 278,456</td>
							</tr>
							<tr>
								<td class="col1">Plato 15</td>
								<td class="col2">22</td>
								<td class="col3">&#8353 275,481</td>
							</tr>
							<tr>
								<td class="col1">Plato 16</td>
								<td class="col2">21</td>
								<td class="col3">&#8353 267,400</td>
							</tr>
							<tr>
								<td class="col1">Plato 17</td>
								<td class="col2">20</td>
								<td class="col3">&#8353 265,670</td>
							</tr>
							<tr>
								<td class="col1">Plato 18</td>
								<td class="col2">19</td>
								<td class="col3">&#8353 254,789</td>
							</tr>
							<tr>
								<td class="col1">Plato 19</td>
								<td class="col2">19</td>
								<td class="col3">&#8353 247,461</td>
							</tr>
							<tr>
								<td class="col1">Plato 20</td>
								<td class="col2">19</td>
								<td class="col3">&#8353 246,045</td>
							</tr>
							<tr>
								<td class="col1">Plato 21</td>
								<td class="col2">18</td>
								<td class="col3">&#8353 245,000</td>
							</tr>
							<tr>
								<td class="col1">Plato 22</td>
								<td class="col2">18</td>
								<td class="col3">&#8353 200,546</td>
							</tr>
						</tbody>			
					</table> <!-- cierra la tabla reporteVentasPlato -->
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