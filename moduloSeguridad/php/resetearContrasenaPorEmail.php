<?php
    require_once '../../login.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base);
    if($conexion->connect_error)die($conexion->error);
    $conexion->set_charset("utf8");
    
    $correo = $_POST['pcorreo'];
    $contrasena = $_POST['pcontrasena'];
    
    $sentencia_sql = "CALL pa_cambiar_contrasena_por_email"."('$correo','$contrasena')";
    $result = $conexion->query($sentencia_sql);
    
    if(!$result)die("Falló la conexión".$conexion->error);
    echo json_encode(mysqli_affected_rows($conexion));
?>