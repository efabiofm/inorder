<?php
  
  require_once '../../login.php';
	$conexion = new mysqli($host_name,$user_name,$password,$data_base);

  if($conexion->connect_error)die($conexion->error);
  $conexion->set_charset("utf8");
  
  if(isset($_POST['pusuario'])) {/**/
  $puntos_usuario = $_POST['pusuario'];
  $nombre_cliente = $_POST['pusuario'];
      
    $sentencia_sql = "CALL pa_consultar_puntos"."('$puntos_usuario')";
	$result = $conexion->query($sentencia_sql);

  if(!$result)die("Fallo la conexión " . $conexion->error);
  $filas = array();
  while($registro = mysqli_fetch_assoc($result)) {

      $filas[] = $registro;

	}
echo json_encode($filas);

  }
?>

