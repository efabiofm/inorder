<?php
	
    function agregarPlatoOrden($id_orden, $nombre_plato, $estado, $cantidad, $precio){
        
		require_once '../../login.php';
		
		$conexion = new mysqli($host_name,$user_name,$password,$data_base);

		if($conexion->connect_error)die($conexion->connect_error);
		$conexion->set_charset("utf8");

		$sql = "CALL pa_agregar_plato_orden('{$id_orden}','{$nombre_plato}','{$estado}', '{$cantidad}', '{$precio}')";

		$resul = $conexion->query ($sql); //devuelve un boolean si es un insert (si insertó o no insertó). 

		$conexion->close();

		if(!$resul){
			die('Imposible insertar datos');
		}	

	}
	
	function eliminarPlatoOrden($pidItem){
	    
        require_once '../../login.php';
        $conexion = new mysqli($host_name,$user_name,$password,$data_base); 
        if($conexion->connect_error)die($conexion->error);
        $conexion->set_charset("utf8"); 

        $sentencia_sql = "CALL pa_eliminar_plato_orden"."($pidItem)";
        $result = $conexion->query($sentencia_sql);
        
        if(!$result)die("Falló la conexión".$conexion->error);
	}

    function consultarTodoPlatos(){
    	
        require_once '../../login.php';
	    
		//var_dump($host_name);

		$conexion = new mysqli($host_name,$user_name,$password,$data_base);

		if($conexion->connect_error)die($conexion->connect_error);
		$conexion->set_charset("utf8");

		$sql = "CALL pa_consultar_todo_platos";

		$resul = $conexion->query ($sql); //devuelve un boolean si es un insert (si insertó o no insertó). 
											//devuelve los datos si es un GET. 			
		$platos = array(); // crea el arreglo

		if ($resul->num_rows>0){
			
			while ($platoOrden = $resul->fetch_assoc()){ //evalúa si $platoOrden es true (!= null)
				$platos[]=$platoOrden;	
			}
		}

		$conexion->close();

		return $platos;

	}

    /*function consultarIdPlato($nombre_plato){
        
        require_once '../../login.php';
        
        $conexion = new mysqli($host_name,$user_name,$password,$data_base);
        
		if($conexion->connect_error)die($conexion->connect_error);
		$conexion->set_charset("utf8");

		$sql = "CALL pa_consultar_id_plato";
		
		$resul = $conexion->query ($sql);
		
		$id = array(); // crea el arreglo

		if ($resul->num_rows>0){
			
			while ($platoOrden = $resul->fetch_assoc()){ //evalúa si $platoOrden es true (!= null)
				$id[]=$platoOrden;	
			}
		}

		$conexion->close();
		
		$idOrden = $id[0];

		return $idOrden;

	}		*/



	$metodohttp = $_SERVER['REQUEST_METHOD'];

	$resul=NULL;

	switch($metodohttp){

		case 'POST':
		case 'post':
			agregarPlatoOrden($_REQUEST['id_orden'],$_REQUEST['nombre_plato'],$_REQUEST['estado'],$_REQUEST['cantidad'],$_REQUEST['precio']);	//$_REQUEST: parametro que se envía en data desde el JS (mediante Ajax)
		break;
	
		case 'GET':
		case 'get':

			if($_REQUEST['id'] === 'lista'){
				$resul = consultarTodoPlatos();
		    }else{
			    $resul = consultarIdPlato($_REQUEST['nombre_plato']);
			}
		break;
	/*
		case 'UPDATE'
		case 'update':
			modificarPlatoOrden();
		break;	
	*/	
		case 'DELETE':
		case 'delete':
			eliminarPlatoOrden($_REQUEST['pidItem']);
		break; 	 
	} 
	
	if (!is_null($resul)){
		print json_encode ($resul);	
	} 
	