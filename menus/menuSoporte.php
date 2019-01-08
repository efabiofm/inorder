<!doctype html>
<header>
	<nav class="navegacion">
		<a href="../moduloSeguridad/ingresoSoporte.php">
			<i class="fa fa-home"></i>
			Inicio
		</a>
		<a href="../index.html">
		    <i class="fa fa-power-off"></i>
		    Cerrar sesión
		</a>
	</nav>
	<div id="banner"></div>
</header>
<div id='cssmenu'>
  <ul>
    <li>
      <a href="#">
        <i class="fa fa-user"></i>
        <span>Principal</span>
      </a>
      <ul>
        <li>
          <a href="../moduloCore/mapaMesas.php">Mapa de mesas</a>
        </li>
        <li>
          <a href="../moduloCore/adminOrdenes.php">Administrar órdenes</a>
        </li>
        <li>
          <a href="#">Administrar reservas</a>
          <ul>
            <li>
              <a href="../moduloCore/consultarReservacion.php">Consultar</a>
            </li>
            <li>
              <a href="../moduloCore/redimirReservacion.php">Redimir</a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">
        <i class="fa fa-cog"></i>
        <span>Configuración</span>
      </a>
      <ul>
				<li>
					<a href="../moduloConfiguracion/adminMesas.php">Administrar mesas</a>
				</li>
				<li>
					<a href="../moduloConfiguracion/adminPlatos.php">Administrar platos</a>
				</li>
				<li>
					<a href="../moduloConfiguracion/adminUsuarios.php">Administrar usuarios</a>
				</li>
				<li>
					<a href="../moduloConfiguracion/adminPuestos.php">Administrar puestos</a>
				</li>
      </ul>
    </li>
    <li>
      <a href="#">
          <i class="fa fa-plus-circle"></i>
          <span>Agregar</span>
      </a>
      <ul id="agregar">
          <li>
             <a href="../moduloConfiguracion/agregarMesa.php">Mesa</a>
          </li>
          <li>
             <a href="../moduloConfiguracion/agregarPlato.php">Plato</a>
          </li>
          <li>
             <a href="../moduloConfiguracion/agregarUsuario.php">Usuario</a>
          </li>
          <li>
             <a href="../moduloConfiguracion/agregarPuesto.php">Puesto</a>
          </li>
      </ul>
    </li>
  </ul>
  <nav class="redesSociales">
    <i class="fa fa-facebook-official"></i>
    <i class="fa fa-google-plus-square"></i>
    <i class="fa fa-twitter-square"></i>
  </nav>
</div>