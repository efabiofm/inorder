<?php
    require_once '../../login.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base); 
    if($conexion->connect_error)die($conexion->error);
    $conexion->set_charset("utf8"); 
	
	$numero = $_POST['pnumero'];
    $nombre = $_POST['pnombre'];
    $capacidad = $_POST['pcapacidad'];
    $tipo = $_POST['ptipo'];
    $descripcion = $_POST['pdescripcion'];
    $estado = $_POST['pestado'];
    
    $sentencia_sql = "CALL pa_modificar_mesa"."($numero,'$nombre','$descripcion',$capacidad,'$tipo','$estado')";
    $result = $conexion->query($sentencia_sql);
    
    if(!$result)die("Falló la conexión".$conexion->error);
    echo json_encode($result);
?>