<?php
    require_once '../../login.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base); 
    if($conexion->connect_error)die($conexion->error);
    $conexion->set_charset("utf8"); 
	
	$idPlato = $_POST['pidPlato'];
    $nombrePlato = $_POST['pnombre'];
    $tipoPlato = $_POST['ptipoPlato'];
    $precio = $_POST['pprecio'];
    $ingredientes = $_POST['pingredientes'];
    $caracteristicas = $_POST['pcaracteristicas'];
    $nombreIngles = $_POST['pnombreIngles'];
    $calorias = $_POST['pcalorias'];
    
    $sentencia_sql = "CALL pa_modificar_plato"."($idPlato,'$nombrePlato','$nombreIngles',$precio,'$ingredientes','$caracteristicas',$calorias,'$tipoPlato')";
    $result = $conexion->query($sentencia_sql);
    
    if(!$result)die("Falló la conexión".$conexion->error);
    echo json_encode($result);
?>