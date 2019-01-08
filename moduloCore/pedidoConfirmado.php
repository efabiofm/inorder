<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Confirmación</title>
      <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
      <link rel="stylesheet" type="text/css" href="css/stylePedidoConfirmado.css">
      <link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.min.css">
      <link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
   </head>
   <body>
      <?php include('../menus/menuCliente.php');?>
      <div id="contenido">
         <h1>¡Su pedido se ha realizado exitosamente!</h1>
         <h2>¡Muchas gracias por su pedido! Empezaremos a preparar su orden y se estima que llegue a su casa en los próximos 45 minutos.</h2>
         <span id="txtNumOrden">
            El número de su orden es:<span id="numOrden"></span>
         </span>
         <span id="dudas">
            ¿Dudas? Llámenos con el número de su orden al <span id="telefono"></span>
         </span>
         <div id="botones">
            <a href="../moduloSeguridad/ingresoCliente.php">
               <div class="boton">
                     <span>Salir</span>
               </div>
            </a>
         </div>
      </div> <!--  cierra Contenido -->
      <script type="text/javascript" src="../jquery.js"></script>
      <script type="text/javascript" src="js/logicPedidoConfirmado.js"></script>
   </body>
</html>
