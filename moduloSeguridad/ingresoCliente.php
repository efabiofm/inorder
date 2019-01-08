<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>¡Bienvenido!</title>
      <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
      <link rel="stylesheet" type="text/css" href="css/styleIngresoCliente.css">
      <link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.min.css">
      <link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
   </head>
   <body>
      <?php include('../menus/menuCliente.php');?>
      <div id="contenido">
         <h1>¡Bienvenido!</h1>
         <h2>Déjese antojar por nuestro menú</h2>
         <section id="slideShows">
            <div class="slideShowCase">
               <div class="slideShow" id="slideShowImages">
                  <img src="../imagenes/platos/eclipse.jpg" alt="Slide 1" width="170px" height="170px" />
                  <img src="../imagenes/platos/fraise.jpg" alt="Slide 2" width="170px" height="170px" />
                  <img src="../imagenes/platos/martini1.jpg" alt="Slide 3" width="170px" height="170px" />    
                  <img src="../imagenes/platos/martini2.jpg" alt="Slide 4" width="170px" height="170px" />
                  <img src="../imagenes/platos/mojito.jpg" alt="Slide 5" width="170px" height="170px" />
                  <img src="../imagenes/platos/mosquito.jpg" alt="Slide 6" width="170px" height="170px" />
                  <img src="../imagenes/platos/orgasmo.jpg" alt="Slide 7" width="170px" height="170px" />
                  <img src="../imagenes/platos/sexo.jpg" alt="Slide 8" width="170px" height="170px" />
                  <img src="../imagenes/platos/spicy.jpg" alt="Slide 9" width="170px" height="170px" />
                  <img src="../imagenes/platos/sun.jpg" alt="Slide 10" width="170px" height="170px" />
               </div>
               <span>Bebidas</span>
            </div>
            <div class="slideShowCase">
               <div class="slideShow" id="slideShowImages2">
                  <img src="../imagenes/platos/asparagi.jpg" alt="Slide 1" width="170px" height="170px" />
                  <img src="../imagenes/platos/lasagna.jpg" alt="Slide 2" width="170px" height="170px" />
                  <img src="../imagenes/platos/lomo.jpg" alt="Slide 3" width="170px" height="170px" />    
                  <img src="../imagenes/platos/noquis.jpg" alt="Slide 4" width="170px" height="170px" />
                  <img src="../imagenes/platos/olla.jpg" alt="Slide 5" width="170px" height="170px" />
                  <img src="../imagenes/platos/piccolini.jpg" alt="Slide 6" width="170px" height="170px" />
                  <img src="../imagenes/platos/pizza.jpg" alt="Slide 7" width="170px" height="170px" />
                  <img src="../imagenes/platos/spaghetti.jpg" alt="Slide 8" width="170px" height="170px" />
               </div>
               <span>Platos</span>
            </div>
         </section>
         <h2>Y déjenos servirle</h2>
         <section id="interaccion">
            <a href="../moduloCore/crearReservacion.php">
               <div class="intButton" id="reservar">
                  <i class="fa fa-book"></i>
                  <span>Reservaciones</span>
               </div>
            </a>
            <a href="../moduloCore/pedidoDomicilio.php">
               <div class="intButton" id="domicilio">
                  <i class="fa fa-motorcycle"></i>
                  <span>Pedido a domicilio</span>
               </div>
            </a>
         </section>
      </div> <!-- cierra #contenido -->
      <script src="js/slideShow.js"></script>
      <script src="js/slideShow2.js"></script>
   </body>
</html>
