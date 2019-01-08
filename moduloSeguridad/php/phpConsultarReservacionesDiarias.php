<?php
	require_once '../../login.php';

	$conexion = new mysqli($host_name,$user_name,$password,$data_base);

	if($conexion->connect_error)die('Imposible conectar a la base de datos ' . $conexion->connect_error);
	$conexion->set_charset("utf8");

    $fecha = $_POST[fecha];
    
	$sql = "CALL pa_consultar_reservaciones_diarias" . "('$fecha')";

	$resul = $conexion->query ($sql); 

    if(!$resul)die("Fallo la conexión " . $conexion->error);
    
    $filas = array();
    
    while($registro = mysqli_fetch_assoc($resul)) {
        $filas[] = $registro;
    }
    
    echo json_encode($filas);
?>