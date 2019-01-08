<?php
    require_once '../../login.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base); 
    if($conexion->connect_error)die($conexion->error);
    $conexion->set_charset("utf8"); 
	       
    $idPlato = $_POST['pidPlato'];
    
    $sentencia_sql = "CALL pa_eliminar_plato"."($idPlato)";
    $result = $conexion->query($sentencia_sql);
    
    if(!$result)die("Falló la conexión".$conexion->error);
    echo json_encode($result);
?>