<?php
    require_once '../../login.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base); 
    if($conexion->connect_error)die($conexion->error);
    $conexion->set_charset("utf8"); 

	$primerNombre = $_POST['pprimerNombre'];
	$segundoNombre = $_POST['psegundoNombre'];
	$primerApellido = $_POST['pprimerApellido'];
	$segundoApellido = $_POST['psegundoApellido'];
	$correo = $_POST['pcorreo'];
	$fechaNacimiento = $_POST['pfechaNacimiento'];
	$edad = $_POST['pedad'];
	$telefono = $_POST['ptelefono'];
	$nacionalidad = $_POST['pnacionalidad'];
	$contrasena = $_POST['pcontrasena'];
	$username = $_POST['pusername'];
	$fechaIngreso = $_POST['pfechaIngreso'];
	$tipoUsuario = $_POST['ptipoUsuario'];
	$estado = $_POST['pestado'];
	$puesto = $_POST['ppuesto'];
    
    $sentencia_sql = "CALL pa_insertar_usuario"."('$primerNombre',
    '$segundoNombre','$primerApellido','$segundoApellido','$correo',
    '$fechaNacimiento',$edad,'$telefono','$nacionalidad','$contrasena',
    '$username','$fechaIngreso','$tipoUsuario','$estado','$puesto')";
    
    $result = $conexion->query($sentencia_sql);
    if(!$result)die("Falló la conexión".$conexion->error);
    echo json_encode($result);
?>