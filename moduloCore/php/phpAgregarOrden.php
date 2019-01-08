<?php
function agregarOrden($numero_mesa, $estado){

    		session_start();
    		require_once '../../login.php';
    		$username_salonero = $_SESSION['usuario'];

			$conexion = new mysqli($host_name,$user_name,$password,$data_base);

			if($conexion->connect_error)die('Imposible conectar a la base de datos ' . $conexion->connect_error);
			$conexion->set_charset("utf8");

			$sql = "CALL pa_agregar_orden('{$numero_mesa}','{$estado}','{$username_salonero}')";

			$resul = $conexion->query ($sql); //devuelve un boolean si es un insert (si insertó o no insertó). 

			$conexion->close();

			if(!$resul){
				die('Imposible insertar datos');
			}	

	}

	$metodohttp = $_SERVER['REQUEST_METHOD'];

	$resul=NULL;

	switch($metodohttp){

		case 'POST':
		case 'post':
			agregarOrden($_REQUEST['numero_mesa'],$_REQUEST['estado']);	//$_REQUEST: parametro que se envía en data desde el JS (mediante Ajax)
		break;
	
		case 'GET':
		case 'get':

			if($_REQUEST['id'] == 0){
				$resul = consultarTodoOrden();  //crear el procedimiento
		    }else{
		       	$resul = consultarDatosMesa($_REQUEST['numero_mesa']);	
			}
		break;
	/*
		case 'UPDATE'
		case 'update':
			modificarPlatoOrden();
		break;	
		
		case 'DELETE'
		case 'delete':
			eliminarPlatoOrden();
		break; */	 

	} 
	if (!is_null($resul)){
		print json_encode ($resul);	
	}