<?php
    require_once '../../login.php';
    $conexion = new mysqli($host_name,$user_name,$password,$data_base);

  if($conexion->connect_error)die($conexion->connect_error);

$conexion->set_charset("utf8");
  

  
	if(isset($_POST['pnombre'])&&isset($_POST['ptelefono']) && isset($_POST['pcedulaJuridica'])
	&& isset($_POST['pcorreo']) && isset($_POST['phorario']) 
	   && isset($_POST['pdireccion'])&& isset($_POST['pimpuestoVenta'])
	   && isset($_POST['pimpuestoServicio'])
	   && isset($_POST['pprecioDomicilio'])
	   && isset($_POST['ptiempo_uno'])&& isset($_POST['ptiempo_dos'])
	   && isset($_POST['ptiempo_tres']) )
	  {
  		$nombre_rest= $_POST['pnombre'];
		$telefono_rest = $_POST['ptelefono'];
		$cedula_juridica = $_POST['pcedulaJuridica'];
		$correo_rest = $_POST['pcorreo'];
		$horario_rest = $_POST['phorario'];
		$direccion_rest = $_POST['pdireccion'];
		$impuesto_ventas = $_POST['pimpuestoVenta'];
		$impuesto_servicio= $_POST['pimpuestoServicio'];
		$precio_domicilio = $_POST['pprecioDomicilio'];
        $tiempo1 = $_POST['ptiempo_uno'];
        $tiempo2 = $_POST['ptiempo_dos'];
        $tiempo3 = $_POST['ptiempo_tres'];
        
	$sentencia_sql = "CALL pa_modificar_parametros" ."('$nombre_rest','$telefono_rest','$cedula_juridica','$correo_rest'
		,'$direccion_rest','$horario_rest','$impuesto_ventas','$impuesto_servicio',$precio_domicilio,'$tiempo1', '$tiempo2','$tiempo3')";
 
       /* $sentencia_sql = "CALL pa_modificar_parametros" ."('ghj','telefono_rest','cedula_juridica','correo_rest'
		,'horario_rest','direccion_rest','impuesto_ventas','impuesto_servicio', 8000)";/**/

		$result = $conexion->query($sentencia_sql);

    if(!$result)die("Fallo la conexión " . $conexion->error);

    echo json_encode($result);
	
}/**/

?>