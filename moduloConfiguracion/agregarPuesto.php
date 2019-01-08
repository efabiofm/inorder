<!doctype html>
<html>
	<head>
		<TITLE>Agregar puesto</TITLE>
		<link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
		<link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.css">
		<link rel ="stylesheet" type="text/css" href="css/styleAgregarPuesto.css">
		<link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
		<meta charset="utf-8">
	</head>
	<body>
	  <?php
       session_start();
       if($_SESSION['perfil']=='Administrador'){
          include('../menus/menuAdmin.php');
       }else{
          if($_SESSION['perfil']=='Soporte'){
             include('../menus/menuSoporte.php');
          }
       }
    ?>
    <div id="contenido">
    	
    	<form class="contenedorTabla">
    		<table class="tabla">
    			<thead class="encabezadoTabla">
    				<tr>
    					<th class="columna1">&nbsp</th>
    					<th class="columna2">&nbsp</th>
    				</tr>
    			</thead>
    			<tbody>
    				<tr>
    					<td class="columna1">Nombre del puesto</td>
    					<td class="columna2">
    						<input type="text" id="nombrePuesto" class="texto">
    					</td>
    				</tr>
    				<tr>
    					<td class="columna1">Descripción del puesto (opcional)</td>
    					<td class="columna2">
    						<textarea id="descripcionPuesto" class="texto" cols="30" rows="10"></textarea>
    					</td>
    				</tr>
    			</tbody>	
    		</table>	
    	</form>
      <div id="botones">
         <a href="#">
            <div class="boton" id="btnAgregar">
               <span>Agregar</span>
            </div>
         </a>
      </div>
      <div id="msjError">
         <span>
            Por favor corrija los espacios en <span class="rojo">rojo</span>
         </span>
      </div>       
    </div> <!-- cierra #contenido -->
    <script type="text/javascript" src="../jquery.js"></script>
    <script type="text/javascript" src="js/logicAgregarPuesto.js"></script>
	</body>
</html>