<?php
    session_start();
    require_once '../../login.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base); 
    if($conexion->connect_error)die($conexion->error);
    $conexion->set_charset("utf8"); 
	
	$username = $_SESSION['usuario'];
    $prioridad = $_POST['pprioridad'];
    $tipoTarjeta = $_POST['ptipoTarjeta'];
    $numTarjeta = $_POST['pnumTarjeta'];
    $nomTarjeta = $_POST['pnomTarjeta'];
    $fechaExpiracion = $_POST['pfechaExpiracion'];
    $cvv = $_POST['pcvv'];
    
    $sentencia_sql = "CALL pa_insertar_medio_pago"."('$prioridad','$numTarjeta','$nomTarjeta',$cvv,'$fechaExpiracion','$tipoTarjeta','$username')";
    $result = $conexion->query($sentencia_sql);
    
    if(!$result)die("Falló la conexión".$conexion->error);
    echo json_encode($result);
    
?>