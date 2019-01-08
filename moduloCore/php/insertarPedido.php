<?php
    session_start();
    require_once '../../login.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base); 
    if($conexion->connect_error)die($conexion->error);
    $conexion->set_charset("utf8"); 
	
    $estado = $_POST['pestado'];
    $usuario = $_SESSION['usuario'];
    $direccion = $_POST['pdireccion'];
    
    $sentencia_sql = "CALL pa_insertar_pedido"."('$estado','$usuario','$direccion')";
    $result = $conexion->query($sentencia_sql);
    
    if(!$result)die("Falló la conexión".$conexion->error);
    echo json_encode($result);
?>