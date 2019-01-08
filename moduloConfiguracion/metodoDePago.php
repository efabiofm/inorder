<!doctype html>
<html>
	<head>
	    <meta charset="utf-8">
	    <title>Métodos de pago</title>
	    <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
	    <link rel="stylesheet" type="text/css" href="css/styleMetodosDePago.css">
	    <link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.min.css">
	    <link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
  	</head>
  	<body>
	  	<div id="body">	
	  		<?php include('../menus/menuCliente.php');?>
			<div id="contenido">
				<h1>Métodos de pago</h1>
				<div id="metodos">
					<h2>Tarjeta principal</h2>
					<div class="cuadroMetodo" id="metodo1">
						<table>
							<tr>
								<td>Número:</td>
								<td id="numeroPrimario"></td>
							</tr>
							<tr>
								<td>Cliente:</td>
								<td id="clientePrimario"></td>
							</tr>
							<tr>
								<td>Expiración:</td>
								<td id="expiracionPrimario"></td>
							</tr>
						</table>
						
						<a href="#">
							<div id="rbTarjeta1" class="rbTarjeta">
		
							</div>
						</a>
					</div>
					<h2>Tarjeta secundaria</h2>
					<div class="cuadroMetodo" id="metodo2">
						<table>
							<tr>
								<td>Número:</td>
								<td id="numeroSecundario"></td>
							</tr>
							<tr>
								<td>Cliente:</td>
								<td id="clienteSecundario"></td>
							</tr>
							<tr>
								<td>Expiración:</td>
								<td id="expiracionSecundario"></td>
							</tr>
						</table>
						
						<a href="#">
							<div id="rbTarjeta2" class="rbTarjeta">
	
							</div>
						</a>
					</div>
				</div>
				<hr>
				<div id="desgloce">
					<h2>Agregue una tarjeta nueva</h2>
					<label for="prioridadTarjeta" class="desgloceLabel">Prioridad</label>
					<select id="prioridadTarjeta">
						<option>--Seleccione--</option>
						<option>Primario</option>
						<option>Secundario</option>
					</select>
					<label for="tipoTarjeta" class="desgloceLabel">Tipo de tarjeta</label>
					<select id="tipoTarjeta">
						<option>--Seleccione--</option>
						<option>VISA</option>
						<option>Master Card</option>
						<option>American Express</option>
					</select>
					<label for="numTarjeta" class="desgloceLabel">Numero de tarjeta</label>
					<input type="text" id="numTarjeta" name="obligatorio" maxlength="16">
					<label for="nomTarjeta" class="desgloceLabel">Nombre del titular</label>
					<input type="text" id="nomTarjeta" name="obligatorio">
					<label for="fechaExpiracion" class="desgloceLabel">Fecha de expiración</label>
					<input type="date" id="fechaExpiracion" name="obligatorio">
					<label for="cvv" class="desgloceLabel">Código de seguridad</label>
					<input type="number" id="cvv" name="obligatorio" max="9999">
				</div>
				<div id="botones">
					<a href="#">
                    	<div class="boton" id="btnGuardar">
                        	<span>Guardar</span>
                     	</div>
                  	</a>
                  	<a href="cuentaCliente.php">
                     	<div class="boton" id="btnCancelar">
                        	<span>Cancelar</span>
                     	</div>
                  	</a>
				</div>
				<div id='msjError'>
	                  <span>Por favor corrija los espacios en <span class="rojo">rojo</span></span>
				</div>
	        </div><!-- cierra #contenido -->
	    </div> <!-- cierra #body -->
	    <div id='msjConfirmacion'>
			<span>¡Su tarjeta se ha agregado exitosamente!</span>
			<a href="#">
	            <div class="boton" id="btnAceptar">
	                <span>Aceptar</span>
	            </div>
	        </a>
		</div>
		<div id='msjPrimario'>
			<span>Ya existe un metodo primario</span>
			<a href="#">
	            <div class="boton" id="btnAceptar2">
	                <span>Aceptar</span>
	            </div>
	        </a>
		</div>
		<div id='msjSecundario'>
			<span>Ya existe un metodo secundario</span>
			<a href="#">
	            <div class="boton" id="btnAceptar3">
	                <span>Aceptar</span>
	            </div>
	        </a>
		</div>
		<script type="text/javascript" src="../jquery.js"></script>
		<script type="text/javascript" src="js/logicMetodoPago.js"></script>
	</body>
</html>