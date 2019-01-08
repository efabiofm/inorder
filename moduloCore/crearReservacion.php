<!DOCTYPE html>
<html>
  	<head>
	    <meta charset="utf-8">
	    <title>Reservaciones</title>
	    <link rel="stylesheet" type="text/css" href="../css/styleGeneral.css">
	    <link rel="stylesheet" type="text/css" href="css/styleCrearReservacion.css">
	    <link rel="stylesheet" type="text/css" href="../font-awesome/css/font-awesome.min.css">
       <link href="../imagenes/miniLogo.png" rel='shortcut icon' type='image/png'>
  	</head>
  	<body>
      <?php include('../menus/menuCliente.php');?>
      <div id="contenido">
         <h1>Crear reservación</h1>
         <div class="columna" id="primeraColumna">
            <form>
               <label for="fecha">Fecha</label>
               <input type="date" id="fecha">
            </form>
            <form>
               <label for="hora">Hora</label>
               <div id="horaDiv">
                  <select id="hora">
                     <option value="">--Seleccione--</option>
                     <option value="2">2:00pm</option>
                     <option value="3">3:00pm</option>
                     <option value="4">4:00pm</option>
                     <option value="5">5:00pm</option>
                     <option value="6">6:00pm</option>
                     <option value="7">7:00pm</option>
                     <option value="8">8:00pm</option>
                     <option value="9">9:00pm</option>
                     <option value="10">10:00pm</option>
                     <option value="11">11:00pm</option>
                     <option value="12">12:00pm</option>
                  </select>
               </div>
            </form>
            <form>
               <label for="personas">Cantidad de personas</label>
               <div id="personasDiv">
                  <select id="personas">
                     <option value="">--Seleccione--</option>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                     <option value="6">6</option>
                     <option value="7">7</option>
                     <option value="8">8</option>
                     <option value="9">9</option>
                     <option value="10">10+</option>
                  </select>
               </div>
            </form>
            <a href="#">
                <div class="boton" id="btnConsultar">
                    <span>Consultar Mesas</span>
                </div>
            </a>
            <span id="textoConsulta">Consulta las mesas disponibles para la fecha y hora seleccionada.</span>
         </div> <!-- cierra #primeraColumna -->
         <hr>
         <div class="columna" id="segundaColumna">
            <label class= "info" id="labelMesas">Mesas</label>
            <div id="mesasDiv">
               <div class="mesa" id="mesa1"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
               <div class="mesa" id="mesa2"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
               <div class="mesa" id="mesa3"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
               <div class="mesa" id="mesa4"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
               <div class="mesa" id="mesa5"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
               <div class="mesa" id="mesa6"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
               <div class="mesa" id="mesa7"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
               <div class="mesa" id="mesa8"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
               <div class="mesa" id="mesa9"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
               <div class="mesa" id="mesa10"><img src="../imagenes/table.png" height="48px" width="48px" /></div>
            </div>
            <div id="leyenda">
               <i id="disponible" class="fa fa-square"></i>
               <span class="spanLeyenda">Mesa disponible</span>
               <i id="noDisponible" class="fa fa-square"></i>
               <span class="spanLeyenda">Mesa no disponible</span>
            </div>
            <div class="alerts" id="alert1">
               <span>Por favor corrija los espacios en <span class="rojo">rojo</span></span>
            </div>
            <div class="alerts" id="alert2">
               <span id="soloUnaMesa" class="rojo">Solo puede seleccionar una mesa</span>
               <span id="escojaMesa" class="rojo">Debe escoger una mesa</span>
               <span id="mesaNoDisp" class="rojo">Por favor, escoja una mesa disponible</span>
               <span id="consultarFallo" class="rojo">Por favor, escoja una fecha y una hora</span>
            </div>
         </div> <!-- cierra #segundaColumna -->
         <hr>
         <div class="columna" id="terceraColumna">
            <form>
                <label class= "info" for="otrasMesas">Otras mesas disponibles</label>
                <div id="otrasMesasDiv">
                    <select id="otrasMesas">
                        
                    </select>
                </div>
            </form>
            <table>
               <tr>
                  <td class= "info" >Número:</td>
                  <td class="datoTabla" id="numMesa"></td>
               </tr>
               <tr>
                  <td class= "info">Nombre:</td>
                  <td class="datoTabla" id="nomMesa"></td>
               </tr>
               <tr>
                  <td class= "info">Capacidad:</td>
                  <td class="datoTabla" id="capMesa"></td>
               </tr>
               <tr>
                  <td class= "info">Tipo:</td>
                  <td class="datoTabla" id="tipoMesa"></td>
               </tr>
               <tr>
                  <td class= "info">Descripción:</td>
                  <td class="datoTabla" id="descMesa"></td>
               </tr>
            </table>
            <div id="botones">
               <a href="#">
                  <div class="boton" id="btnReservar">
                     <span>Reservar</span>
                  </div>
               </a>
               <a href="#">
                  <div class="boton" id="btnCancelar">
                     <span>Cancelar</span>
                  </div>
               </a>
            </div>
         </div> <!-- cierra #terceraColumna -->
      </div>
      <script type="text/javascript" src="../jquery.js"></script>
      <script type="text/javascript" src="js/logicCrearReservacion.js"></script>
   </body>
</html>
