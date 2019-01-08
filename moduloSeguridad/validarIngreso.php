<?php
  session_start(); //va al inicio de un php o html donde se quieran usar o invocar variables globales
  require_once '../login.php';

$conexion = new mysqli($host_name,$user_name,$password,$data_base);
  if($conexion->connect_error)die($conexion->connect_error);
  $conexion->set_charset("utf8");

  if(isset($_POST['pusername'])&& isset($_POST['pcontrasena'])){
		$username = $_POST['pusername'];
        $contrasena = $_POST['pcontrasena'];
    		$sentencia_sql = "CALL pa_consultar_rol" ."('$username','$contrasena')";
    		$result = $conexion->query($sentencia_sql);
        if(!$result)die("Fallo la conexión " . $conexion->error);
    
        $row=mysqli_fetch_assoc($result);
        $role = $row['tipo_usuario'];
        
        switch($role){
          case 'Administrador':
          //$_SESSION['nombre_variable'] es una variable global que se llama 'nombre_variable'
          //y puede ser usada en cualquier pagina, en este caso guarda el tipo de usuario
          //y el username para que pueda ser usada en cualquier pagina
              $_SESSION['usuario'] = $username;
              $_SESSION['perfil'] = $role;
              header('location: ../moduloCore/mapaMesas.php');
              break;
    
          case 'Soporte':
              $_SESSION['usuario'] = $username;
              $_SESSION['perfil'] = $role;
              header('location: ../moduloCore/mapaMesas.php');
              break;
    
          case 'Salonero':
              $_SESSION['perfil'] = $role;
              $_SESSION['usuario'] = $username;
              header('location: ../moduloCore/mapaMesas.php');
              break;
    
          case 'Cocinero':
              $_SESSION['perfil'] = $role;
              $_SESSION['usuario'] = $username;
              header('location: ingresoCocinero.php');
              break;
    
          case 'Cajero':
              $_SESSION['perfil'] = $role;
              $_SESSION['usuario'] = $username;
              header('location: ingresoCajero.php');
              break;
    
          case 'Cliente':
              $_SESSION['perfil'] = $role;
              $_SESSION['usuario'] = $username;
              header('location: ingresoCliente.php');
              break;
          
          default:
            header('location: inicioFallido.html');
        }
    }
?>