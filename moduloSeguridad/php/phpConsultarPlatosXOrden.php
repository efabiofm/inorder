<?php
    session_start();
    require_once '../../login.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base); 
    if($conexion->connect_error)die($conexion->error);
    $conexion->set_charset("utf8"); 

	$porden = $_POST['porden'];

	$sentencia_sql = "CALL pa_consultar_platos_x_orden"."($porden)";
	//las variables que contienen numeros no se ponen entre comillas, las demas si
    $result = $conexion->query($sentencia_sql);
    if(!$result)die("Fallo la conexión " . $conexion->error);
    $filas = array();
    while($registro = mysqli_fetch_assoc($result)) {
        $filas[] = $registro;
	}
    echo json_encode($filas);
?>