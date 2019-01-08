<?php
    require_once '../../login.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base);
    if($conexion->connect_error)die($conexion->error);
    $conexion->set_charset("utf8");
    
    $idItem = $_POST['pidItem'];
    $estado = $_POST['pestado'];
    
    $sentencia_sql = "CALL pa_modificar_estado_plato_orden"."('$estado',$idItem)";
    $result = $conexion->query($sentencia_sql);
    
    if(!$result)die("Falló la conexión".$conexion->error);
    echo json_encode($result);
?>