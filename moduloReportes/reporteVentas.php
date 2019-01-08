<!doctype html>
<html>
	<head>
		<TITLE>Administrador</TITLE>
		<link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
		<link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
		<link rel ="stylesheet" type="text/css" href="css/styleReporteVentas.css">
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
					<option>Plato</option>
				<select>	
			</div>	
			<input type="button" value="Generar Reporte" id="btnGenerar"></input>		        	
	        	<div class="contenedorTabla">
					<table class="reporteVentas">
						<thead>
							<tr>
								<th class="col1">Fecha</th>
								<th class="col2">Cantidad de Ventas</th>
								<th id="colFinal">Subtotal</th>
							</tr>	 	
						</thead>
						<tbody>
							<tr>
								<td class="col1">2015-01-31</td>
								<td class="col2">15</td>
								<td class="col3">&#8353 220,000</td>
							</tr>
							<tr>
								<td class="col1">2015-01-30</td>
								<td class="col2">18</td>
								<td class="col3">&#8353 200,000</td>
							</tr>
							<tr>
								<td class="col1">2015-01-29</td>
								<td class="col2">13</td>
								<td class="col3">&#8353 150,000</td>
							</tr>
							<tr>
								<td class="col1">2015-01-28</td>
								<td class="col2">32</td>
								<td class="col3">&#8353 463,000</td>
							</tr>
							<tr>
								<td class="col1">2015-01-27</td>
								<td class="col2">27</td>
								<td class="col3">&#8353 225,000</td>
							</tr>
							<tr>
								<td class="col1">2015-01-26</td>
								<td class="col2">23</td>
								<td class="col3">&#8353 198,000</td>
							</tr>
							<tr>
								<td class="col1">2015-01-25</td>
								<td class="col2">20</td>
								<td class="col3">&#8353 217,000</td>
							</tr>
							<tr>
								<td class="col1">2015-01-24</td>
								<td class="col2">28</td>
								<td class="col3">&#8353 275,000</td>
							</tr>
							<tr>
								<td class="col1">2015-01-23</td>
								<td class="col2">17</td>
								<td class="col3">&#8353 181,500</td>
							</tr>
							<tr>
								<td class="col1">2015-01-22</td>
								<td class="col2">19</td>
								<td class="col3">&#8353 209,470</td>
							</tr>
							<tr>
								<td class="col1">2015-01-21</td>
								<td class="col2">24</td>
								<td class="col3">&#8353 234,000</td>
							</tr>
							<tr>
								<td class="col1">2015-01-20</td>
								<td class="col2">18</td>
								<td class="col3">&#8353 199,755</td>
							</tr>
							<tr>
								<td class="col1">2015-01-19</td>
								<td class="col2">24</td>
								<td class="col3">&#8353 359,590</td>
							</tr>
							<tr>
								<td class="col1">2015-01-18</td>
								<td class="col2">28</td>
								<td class="col3">&#8353 590,631</td>
							</tr>
							<tr>
								<td class="col1">2015-01-17</td>
								<td class="col2">24</td>
								<td class="col3">&#8353 285,930</td>
							</tr>
							<tr>
								<td class="col1">2015-01-16</td>
								<td class="col2">30</td>
								<td class="col3">&#8353 552,870</td>
							</tr>
							<tr>
						</tbody>			
					</table> <!-- cierra la tabla reporteVentas -->
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