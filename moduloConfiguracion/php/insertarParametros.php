<?php
    require_once '../../login.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base); 
    if($conexion->connect_error)die($conexion->error);
    $conexion->set_charset("utf8"); 
	
	       $nombre = $_POST['pnombre'];
	       $telefono = $_POST['ptelefono'];
	       $cedulaJuridica = $_POST['pcedulaJuridica'];
	       $correo = $_POST['pcorreo'];
	       $horario = $_POST['phorario'];
	       $direccion = $_POST['pdireccion'];
	       $impuestoVenta = $_POST['pimpuestoVenta'];
	       $impuestoServicio = $_POST['pimpuestoServicio'];
	       $precioDomicilio = $_POST['pprecioDomicilio'];
	       
	       $sentencia_sql = "CALL pa_insertar_parametros"."('$nombre','$telefono', '$cedulaJuridica','$correo',
	       '$horario', '$direccion', '$impuestoVenta','$impuestoServicio',$precioDomicilio)";
	       $result = $conexion->query($sentencia_sql);
	       
	       if(!$result)die("Falló la conexión".$conexion->error);
	       echo json_encode($result);
    
?>