<?php
    require_once '../../login.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base); 
    if($conexion->connect_error)die($conexion->error);
    $conexion->set_charset("utf8"); 
	
    $nombrePlato = $_POST['pnombrePlato'];
    $estado = $_POST['pestado'];
    $cantidad = $_POST['pcantidad'];
    $precio = $_POST['pprecio'];
    
    $sentencia_sql = "CALL pa_insertar_platos_pedido"."('$nombrePlato','$estado',$cantidad,$precio)";
    $result = $conexion->query($sentencia_sql);
    
    if(!$result)die("Falló la conexión".$conexion->error);
    echo json_encode($result);
?>