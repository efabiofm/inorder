<!doctype html>
<html>
	<head>
	    <meta charset="utf-8">
	    <title>Pagar Pedido</title>
	    <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
	    <link rel="stylesheet" type="text/css" href="css/stylePagarPedido.css">
	    <link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.min.css">
      	<link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
  	</head>
  	<body>
  		<?php include('../menus/menuCliente.php');?>
		<div id="contenido">
			<h1>Pagar Pedido</h1>
			<h2>Seleccione un método de pago</h2>
			<div id="metodos">
				<div class="cuadroMetodo" id="metodo1">
					<table>
						<tr>
							<td>Número de tarjeta:</td>
							<td>XXXX-XXXX-XXXX-4583</td>
						</tr>
						<tr>
							<td>Nombre del Cliente:</td>
							<td>Ricardo Tapia</td>
						</tr>
						<tr>
							<td>Fecha de expiración:</td>
							<td>07/21</td>
						</tr>
					</table>
					<i class="fa fa-cc-visa fa-2x"></i>
					<input type="radio" id="rbTarjeta" name="rbTarjeta" class="rbTarjeta">
				</div>
				<div class="cuadroMetodo" id="metodo2">
					<table>
						<tr>
							<td>Número de tarjeta:</td>
							<td>XXXX-XXXXXX-X5427</td>
						</tr>
						<tr>
							<td>Nombre del Cliente:</td>
							<td>Ricardo Tapia</td>
						</tr>
						<tr>
							<td>Fecha de expiración:</td>
							<td>07/21</td>
						</tr>
					</table>
					<i class="fa fa-cc-amex fa-2x"></i>
					<input type="radio" id="rbTarjeta2" name="rbTarjeta" class="rbTarjeta">
				</div>
			</div>
			<hr>
			<div id="desgloce">
				<label for="subtotal" class="desgloceLabel">Subtotal</label>
				<input type="text" id="subtotal">
				<label for="impVentas" class="desgloceLabel">% I.V</label>
				<input type="text" id="impVentas">
				<label for="impServ" class="desgloceLabel">% I.S</label>
				<input type="text" id="impServ">
				<label for="descuento" class="desgloceLabel">Descuento</label>
				<input type="text" id="descuento">
				<label for="total" class="desgloceLabel">Total</label>
				<input type="text" id="total">
			</div>
			<div id="botones">
				<a href="#">
                	<div class="boton" id="btnAceptar">
                    	<span>Aceptar</span>
                 	</div>
              	</a>
              	<a href="#">
                 	<div class="boton" id="btnCancelar">
                    	<span>Cancelar</span>
                 	</div>
              	</a>
			</div>

        </div> <!-- cierra #contenido -->
    	<div id='msjError'>
			<div class="alerts" id="alert1">
              <span>Por favor seleccione una <span class="rojo">tarjeta</span></span>
            </div>
            <div class="alerts" id="alert2">
              <span id="soloUnaMesa" class="rojo">No puede completar una orden si el total es 0</span>
           	</div>
		</div>
        <script type="text/javascript" src="js/logicPagarPedido.js"></script>
	</body>
</html>