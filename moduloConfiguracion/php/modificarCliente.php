<?php
    session_start();
    require_once '../../login.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base); 
    if($conexion->connect_error)die($conexion->error);
    $conexion->set_charset("utf8"); 
	
	$username = $_SESSION['usuario'];
	$primerNombre = $_POST['pprimerNombre'];
	$segundoNombre = $_POST['psegundoNombre'];
	$primerApellido = $_POST['pprimerApellido'];
	$segundoApellido = $_POST['psegundoApellido'];
	$correo = $_POST['pcorreo'];
	$fechaNacimiento = $_POST['pfechaNacimiento'];
	$edad = $_POST['pedad'];
	$telefono = $_POST['ptelefono'];
	$nacionalidad = $_POST['pnacionalidad'];
	
	$sentencia_sql = "CALL pa_modificar_cliente"."('$username',
    '$primerNombre','$segundoNombre','$primerApellido','$segundoApellido',
    '$correo','$fechaNacimiento',$edad,'$telefono','$nacionalidad')";

    $result = $conexion->query($sentencia_sql);
    if(!$result)die("Falló la conexión".$conexion->error);
    echo json_encode($result);
?>