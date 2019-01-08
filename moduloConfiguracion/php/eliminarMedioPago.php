<?php
    session_start();
    require_once '../../login.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base); 
    if($conexion->connect_error)die($conexion->error);
    $conexion->set_charset("utf8"); 
	       
	$username = $_SESSION['usuario'];
    $prioridad = $_POST['pprioridad'];
    
    $sentencia_sql = "CALL pa_eliminar_medio_pago"."('$username','$prioridad')";
    $result = $conexion->query($sentencia_sql);
    
    if(!$result)die("Falló la conexión".$conexion->error);
    echo json_encode($result);
?>