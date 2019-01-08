<!doctype html>
<html>
	<head>
		<TITLE>Órdenes</TITLE>
		<link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
		<link rel="stylesheet" type="text/css" href="css/styleAdministracionPlatosOrden.css">
		<link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
		<link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
		<meta charset="utf-8" http-equiv="refresh" content="120">
	</head>
	<body>
		<?php include('../menus/menuSalonero.php');?>
        <div id="contenido">
            <h1>Platos</h1>
            <table id="colaPlatos">
                <thead>
                    <tr>
                        <th class="itemOculto">Item</th>
                        <th>Orden</th>
                        <th>Plato</th>
                        <th>Cantidad</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                
                </tbody>
            </table>
            <form>
                
                <input type="text" id="txtPendientes" value="0" readonly>
                <label>Pendientes</label>
                
                <input type="text" id="txtListos" value="0" readonly>
                <label>Listos para entregar</label>
                
                <input type="text" id="txtEntregados" value="0" readonly>
                <label>Entregados</label>
                
            </form>
        </div> 
        <script type="text/javascript" src="../jquery.js"></script>
		<script type="text/javascript" src="js/logicAdministracionPlatosOrden.js"></script>
	</body>
</html>