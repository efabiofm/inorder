<!doctype html>
<html>
	<head>
		<TITLE>Cocinero</TITLE>
		<link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
		<link rel="stylesheet" type="text/css" href="../moduloSeguridad/css/styleIngresoCocinero.css">
		<link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
		<link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
		<meta charset="utf-8" http-equiv="refresh" content="120">
		
	</head>
	<body>
		<?php include('../menus/menuAdmin.php');?>
        <div id="contenido">
            <h1>Platos locales</h1>
            <table id="colaPlatos">
                <thead>
                    <tr>
                        <th class='itemOculto'>Item</th>
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
                <!--
                <input type="text" id="txtTransito" value="0" readonly>
                <label>En tránsito</label>
                -->
            </form>
        </div> <!-- cierra #contenido -->
        <script type="text/javascript" src="../jquery.js"></script>
		<script type="text/javascript" src="../moduloSeguridad/js/logicIngresoCocinero.js"></script>
	</body>
</html>