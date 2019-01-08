<?php
    require_once '../../login.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base); 
    if($conexion->connect_error)die($conexion->error);
    $conexion->set_charset("utf8"); 
	
    $nombre = $_POST['pnombre'];
    $descripcion = $_POST['pdescripcion'];
    
    $sentencia_sql = "CALL pa_insertar_puesto"."('$nombre','$descripcion')";
    $result = $conexion->query($sentencia_sql);
    
    if(!$result)die("Falló la conexión".$conexion->error);
    echo json_encode($result);
    
?>