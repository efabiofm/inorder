<!doctype html>
<html>
	<head>
		<TITLE>Soporte</TITLE>
		<link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
		<link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
		<link rel ="stylesheet" type="text/css" href="css/styleIngresoSoporte.css">
		<link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
		<meta charset="utf-8">
	</head>
  <body>
    <?php include('../menus/menuSoporte.php');?>
    <div id="contenido">
    	<div class="contenedorConfiguracion">
    		<ul class ="listaConfiguracion">
    			<a href="../moduloConfiguracion/agregarUsuario.html">
    				<li>Agregar usuario</li>
    			</a>
    			<a href="../moduloConfiguracion/agregarPuesto.html">
    				<li>Agregar puesto</li>
    			</a>
    			<a href="../moduloConfiguracion/agregarMesa.html">
    				<li>Agregar mesa</li>
    			</a>
    			<a href="../moduloConfiguracion/agregarPlato.html">
    				<li>Agregar plato</li>
    			</a>
    		<ul> <!--cierra listaConfiguracion-->	
    	</div>	
    	<div class="contenedorTabla">
    		<table class="tabla">
    				<tr>
    					<th class="columna1">Ingresos fallidos del día</th>
    					<td>10</td>
    				</tr>
    				<tr>
    					<th class="columna1">Ingresos exitosos del día</th>
    					<td>60</td>	
    				<tr>
    					<th class="columna1">Total de clientes registrados</th>
    					<td class="columna2">125</th>
    				</tr>	
    				<tr>
    					<th class="columna1">Total de empleados registrados</th>
    					<td class="columna2">25</th>
    				</tr>
    				<tr>
    					<th class="columna1">Total de mesas registradas</th>
    					<td class="columna2">20</td>
    				</tr>
    				<tr>
    					<th class="columna1">Total de platos registrados</th>
    					<td class="columna2">35</td>
    				</tr>
    		</table>	
    	</div>	
    </div> <!-- cierra #contenido -->
	</body>
</html>