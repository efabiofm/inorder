<?php
    session_start();
    require_once '../../login.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base); 
    if($conexion->connect_error)die($conexion->error);
    $conexion->set_charset("utf8"); 

	$fecha = $_POST['pfecha'];
	$hora = $_POST['phora'];
	$personas = $_POST['ppersonas'];
	$mesa = $_POST['pmesa'];
	$username = $_SESSION['usuario'];

	$sentencia_sql = "CALL pa_crear_reservacion"."('$fecha',$hora,$personas,$mesa,'$username')";
	//las variables que contienen numeros no se ponen entre comillas, las demas si
    $result = $conexion->query($sentencia_sql);
	       
	if(!$result)die("Falló la conexión".$conexion->error);
	echo json_encode($result);
?>