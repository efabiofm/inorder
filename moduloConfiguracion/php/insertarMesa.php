<?php
    require_once '../../login.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base); 
    if($conexion->connect_error)die($conexion->error);
    $conexion->set_charset("utf8"); 
	
    $numero_mesa = $_POST['pnumero'];
    $nombre_mesa = $_POST['pnombre'];
    $descripcion = $_POST['pdescripcion'];
    $capacidad = $_POST['pcapacidad'];
    $tipo_mesa = $_POST['ptipo'];
    
    
    $sentencia_sql = "CALL pa_insertar_mesa"."($numero_mesa,'$nombre_mesa','$descripcion',$capacidad,'$tipo_mesa')";
    $result = $conexion->query($sentencia_sql);
    
    if(!$result)die("Falló la conexión".$conexion->error);
    echo json_encode($result);
?>