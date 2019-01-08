-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-08-2015 a las 00:15:25
-- Versión del servidor: 5.6.17
-- Versión de PHP: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `inorder`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_agregar_mesa`(IN `pNumeroMesa` INT(2), IN `pNombreMesa` VARCHAR(25), IN `pDescripcion` TEXT, IN `pCapacidad` INT(2), IN `pTipoMesa` INT(1))
    NO SQL
INSERT INTO `inOrder`.`tmesas` (`numero_mesa`, `nombre_mesa`, `descripcion`, `capacidad`, `tipo_mesa`, `estado`, `usuario_ocupando`) VALUES (pNumeroMesa, pNombreMesa, pDescripcion, pCapacidad, pTipoMesa, 'Libre', '')$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_agregar_orden`(IN `pnumero_mesa` INT(2), IN `pestado` VARCHAR(20), IN `pusername_salonero` VARCHAR(60))
    NO SQL
INSERT INTO inOrder.tordenes (numero_mesa, estado, username_salonero)
VALUES (pnumero_mesa, pestado, pusername_salonero)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_agregar_plato_orden`(IN `pid_orden` INT(100), IN `pnombre_plato` VARCHAR(60), IN `pestado` VARCHAR(20), IN `pcantidad` INT(3), IN `pprecio` INT(6))
    NO SQL
INSERT INTO inOrder.tplatos_x_orden(id_orden, nombre_plato, estado, cantidad, precio)
VALUES (pid_orden, pnombre_plato, pestado, pcantidad, pprecio)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_borrar_mesa`(IN `pNumeroMesa` INT(2))
    NO SQL
DELETE FROM tmesas
WHERE pNumeroMesa=tmesas.numero_mesa$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_cambiar_contrasena`(IN `pusername` VARCHAR(60), IN `pcontrasena` VARCHAR(60))
    NO SQL
UPDATE tusuarios
SET contrasena = pcontrasena
WHERE username = pusername$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_cambiar_contrasena_por_email`(IN `pemail` VARCHAR(60), IN `pcontrasena` VARCHAR(60))
    NO SQL
UPDATE tusuarios
SET contrasena = pcontrasena
WHERE correo_electronico = pemail$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_cambiar_estado_de_mesa`(IN `pmesa` INT(2), IN `pestado` VARCHAR(20))
    NO SQL
    COMMENT 'Cambio el estado de la mesap'
UPDATE tmesas
SET estado=pestado
WHERE pmesa=tmesas.numero_mesa$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_cambiar_estado_orden`(IN `pid_orden` INT(10), IN `pestado` VARCHAR(20))
    NO SQL
UPDATE tordenes
SET estado = pestado
WHERE id_orden = pid_orden$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_cancelar_reservacion`(IN `pNumReserva` INT(6))
    NO SQL
UPDATE treservas
SET estado='Cancelada'
WHERE pNumReserva=treservas.numero_reserva$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_bebidas`()
    NO SQL
SELECT *
FROM tplatos
WHERE tipo_plato = 'Coctel' OR tipo_plato = 'Refresco'$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_cola_ordenes`()
    NO SQL
SELECT id_item, id_orden, nombre_plato, estado, cantidad
FROM tplatos_x_orden
WHERE estado <> 'Entregado'$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_cola_ordenes_salonero`()
    NO SQL
SELECT id_item, id_orden, nombre_plato, estado, cantidad
FROM tplatos_x_orden
WHERE estado <> 'Entregado'$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_cola_pedidos`()
    NO SQL
SELECT id_item, id_orden, nombre_plato, estado, cantidad
FROM tplatos_x_pedido$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_comidas`()
    NO SQL
SELECT * FROM tplatos
WHERE tipo_plato = 'Plato fuerte' OR tipo_plato = 'Entrada' OR tipo_plato = 'Postre'$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_contrasena`(IN `pusername` VARCHAR(60))
    NO SQL
SELECT contrasena
FROM tusuarios
WHERE username = pusername$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_id_plato`(IN `pnombre_plato` VARCHAR(60))
    NO SQL
SELECT id_plato FROM inOrder.tplatos
WHERE nombre_plato = pnombre_plato$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_info_ordenes`(IN `pid_orden` INT(10))
    NO SQL
SELECT numero_mesa, username_salonero
FROM tordenes
WHERE id_orden = pid_orden$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_info_usuario`(IN `pusername` VARCHAR(60))
    NO SQL
SELECT primer_nombre, telefono, puntos
FROM tusuarios
WHERE username = pusername$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_medios_pago`(IN `pusername` VARCHAR(60), IN `pprioridad` VARCHAR(20))
    NO SQL
SELECT *
FROM tmedio_pagos
WHERE usuario = pusername AND prioridad = pprioridad$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_mesa`(IN `pNumeroMesa` INT(2))
    NO SQL
SELECT *
FROM tmesas
WHERE pNumeroMesa=tmesas.numero_mesa$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_mesas_disp_reservas`(IN `pfecha` DATE, IN `phora` INT(3))
    NO SQL
    COMMENT 'Busca las mesas disp. para reserv. a partir de fecha y hora'
SELECT B.numero_mesa
FROM treservas B
WHERE (B.fecha=pfecha)and(B.hora=phora)and(B.estado='Pendiente')$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_num_pedido`()
    NO SQL
SELECT id_pedido
FROM tpedidos_domicilio
ORDER BY 1 DESC
LIMIT 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_ordenes`()
    NO SQL
SELECT *
FROM tordenes$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_ordenes_activas`(IN `pnumero_mesa` INT(3))
    NO SQL
SELECT id_orden
FROM tordenes
WHERE numero_mesa = pnumero_mesa and estado = 'Activa'$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_ordenes_x_mesero`(IN `pusuario` VARCHAR(60))
    NO SQL
    COMMENT 'Todas las ordenes del mesero'
SELECT *
FROM tordenes A
WHERE A.username_salonero=pusuario$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_orden_id`(IN `pnumero_mesa` INT(5))
    NO SQL
SELECT distinct id_orden
FROM tordenes
WHERE numero_mesa = pnumero_mesa
ORDER BY id_orden DESC
LIMIT 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_orden_mesa`(IN `pnumero_mesa` INT(2))
    NO SQL
SELECT cantidad, nombre_plato, precio
FROM tplatos_x_orden
WHERE id_orden = (
	SELECT DISTINCT id_orden
	FROM tordenes
	where numero_mesa = pnumero_mesa and estado = 'Activa'
	ORDER BY id_orden DESC
	LIMIT 1)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_parametros`()
    NO SQL
SELECT * from tparametros$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_platos`()
    NO SQL
SELECT * FROM tplatos$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_platos_orden`(IN `pid_orden` INT(20))
    NO SQL
SELECT cantidad, nombre_plato, precio, estado, id_item
FROM inOrder.tplatos_x_orden
WHERE id_orden = pid_orden$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_platos_x_orden`(IN `porden` INT(10))
    NO SQL
    COMMENT 'Consulta los platos a partir del numero de orden'
SELECT *
FROM tplatos_x_orden A
WHERE A.id_orden=porden$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_precio_plato`(IN `pnombre_plato` VARCHAR(60))
    NO SQL
SELECT precio
FROM tplatos
WHERE nombre_plato = pnombre_plato$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_puestos`()
    NO SQL
SELECT * FROM tpuestos$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_puntos`(IN `pusername` VARCHAR(60))
    NO SQL
SELECT `primer_nombre`,`primer_apellido`,`puntos`
FROM tusuarios
WHERE `username`=pusername$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_reservacion`(IN `pNumReserva` INT(6))
    NO SQL
SELECT *
FROM treservas A
WHERE pNumReserva=A.numero_reserva$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_reservaciones_diarias`(IN `pfecha` DATE)
    NO SQL
SELECT hora, numero_mesa, cantidad_personas
FROM treservas
WHERE fecha=pfecha$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_rol`(IN `pusername` VARCHAR(60), IN `pcontrasena` VARCHAR(60))
    NO SQL
SELECT tipo_usuario
FROM tusuarios
WHERE username = pusername AND contrasena = pcontrasena$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_todas_mesas`()
    NO SQL
SELECT *
FROM tmesas$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_todo_platos`()
    NO SQL
SELECT * FROM tplatos$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_ultima_reserva`(IN `pusuario` VARCHAR(60))
    NO SQL
    COMMENT 'Consulta la ultima reserva hecha por un usuario'
SELECT *
FROM treservas A
WHERE (SELECT MAX(A.numero_reserva)
       FROM treservas A
       WHERE pusuario=A.usuario)=A.numero_reserva$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_usuario`(IN `pusername` VARCHAR(60))
    NO SQL
SELECT *
FROM tusuarios
WHERE username = pusername$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_consultar_usuarios`()
    NO SQL
SELECT * FROM tusuarios$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_contar_platos_express`()
    NO SQL
SELECT estado, count(*) as cantidad
FROM tplatos_x_pedido
GROUP BY estado$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_contar_platos_locales`()
    NO SQL
SELECT estado, count(*) as cantidad
FROM tplatos_x_orden
GROUP BY estado$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_crear_reservacion`(IN `pFecha` DATE, IN `pHora` INT(3), IN `pPersonas` INT(3), IN `pNumMesa` INT(3), IN `pUsername` VARCHAR(10) CHARSET utf8)
    NO SQL
INSERT INTO treservas (fecha,hora,cantidad_personas,mesa,numero_mesa,usuario)
VALUES (pFecha,pHora,pPersonas,	(SELECT A.nombre_mesa
        						FROM tmesas A
        						WHERE pnumMesa=A.numero_mesa)
        ,pNumMesa,pUsername)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_eliminar_medio_pago`(IN `pusername` VARCHAR(60), IN `pprioridad` VARCHAR(60))
    NO SQL
DELETE FROM tmedio_pagos
WHERE usuario = pusername AND prioridad = pprioridad$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_eliminar_plato`(IN `pid_plato` INT(3))
    NO SQL
DELETE FROM tplatos
WHERE id_plato = pid_plato$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_eliminar_plato_orden`(IN `pid_item` INT(100))
    NO SQL
DELETE FROM tplatos_x_orden
WHERE id_item = pid_item$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_eliminar_puesto`(IN `pid_puesto` VARCHAR(50))
    NO SQL
DELETE FROM tpuestos
WHERE id_puesto = pid_puesto$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_eliminar_usuario`(IN `pid_usuario` INT(10))
    NO SQL
DELETE FROM tusuarios
WHERE id_usuario=pid_usuario$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_insertar_medio_pago`(IN `pprioridad` VARCHAR(20), IN `num_tarjeta` VARCHAR(40), IN `pnombre_titular` VARCHAR(60), IN `pcod_seguridad` INT(5), IN `pfecha_expiracion` DATE, IN `ptipo_tarjeta` VARCHAR(20), IN `pusuario` VARCHAR(60))
    NO SQL
INSERT INTO tmedio_pagos(prioridad, num_tarjeta, nombre_titular, cod_seguridad, fecha_expiracion, tipo_tarjeta, usuario)
VALUES(pprioridad, num_tarjeta, pnombre_titular, pcod_seguridad, pfecha_expiracion, ptipo_tarjeta, pusuario)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_insertar_mesa`(IN `pnumero` INT(2), IN `pnombre` VARCHAR(25), IN `pdescripcion` TEXT, IN `pcapacidad` INT(2), IN `ptipo` VARCHAR(25))
    NO SQL
INSERT INTO tmesas (numero_mesa, nombre_mesa, descripcion, capacidad, tipo_mesa)
VALUES (pnumero, pnombre, pdescripcion, pcapacidad, ptipo)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_insertar_parametros`(IN `pnombre_rest` VARCHAR(60), IN `ptelefono` VARCHAR(25), IN `pcedula_juridica` VARCHAR(25), IN `pcorreo_rest` VARCHAR(25), IN `pdireccion_rest` VARCHAR(60), IN `phorario` VARCHAR(60), IN `pimpuesto_ventas` VARCHAR(60), IN `pimpuesto_servicio` VARCHAR(60), IN `pprecio_domicilio` INT(25))
    NO SQL
INSERT INTO tparametros(nombre_rest,telefono_rest,cedula_juridica,correo_rest,
                        direccion_rest, horario_rest,impuesto_ventas,
                        impuesto_servicio,precio_domicilio)
VALUES(pnombre_rest,ptelefono,pcedula_juridica,pcorreo_rest,
                        pdireccion_rest, phorario,pimpuesto_ventas,
                        pimpuesto_servicio,pprecio_domicilio)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_insertar_pedido`(IN `pestado` VARCHAR(20), IN `pusername_cliente` VARCHAR(60), IN `pdireccion` TEXT)
    NO SQL
INSERT into tpedidos_domicilio(estado, username_cliente, direccion)
VALUES(pestado, pusername_cliente, pdireccion)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_insertar_plato`(IN `pnombre_plato` VARCHAR(60), IN `pnombre_ingles` VARCHAR(60), IN `pprecio` INT(6), IN `pingredientes` TEXT, IN `pcaracteristicas_especiales` TEXT, IN `pcalorias` INT(5), IN `ptipo_plato` VARCHAR(20))
    NO SQL
INSERT INTO tplatos(nombre_plato, nombre_ingles, precio, ingredientes, caracteristicas_especiales, calorias, tipo_plato)
VALUES(pnombre_plato, pnombre_ingles, pprecio, pingredientes, pcaracteristicas_especiales, pcalorias, ptipo_plato)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_insertar_platos_pedido`(IN `pnombre_plato` VARCHAR(60), IN `pestado` VARCHAR(20), IN `pcantidad` INT(3), IN `pprecio` INT(6))
    NO SQL
INSERT INTO tplatos_x_pedido(id_orden, nombre_plato, estado, cantidad, precio)
VALUES((SELECT id_pedido FROM tpedidos_domicilio ORDER BY id_pedido DESC LIMIT 1), pnombre_plato, pestado, pcantidad, pprecio)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_insertar_puesto`(IN `pnombre` VARCHAR(50), IN `pdescripcion` TEXT)
    NO SQL
INSERT INTO tpuestos(nombre, descripcion)
VALUES(pnombre, pdescripcion)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_insertar_usuario`(IN `pprimer_nombre` VARCHAR(60), IN `psegundo_nombre` VARCHAR(60), IN `pprimer_apellido` VARCHAR(60), IN `psegundo_apellido` VARCHAR(60), IN `pcorreo_electronico` VARCHAR(60), IN `pfecha_nacimiento` DATE, IN `pedad` INT(3), IN `ptelefono` VARCHAR(60), IN `pnacionalidad` VARCHAR(60), IN `pcontrasena` VARCHAR(60), IN `pusername` VARCHAR(60), IN `pfecha_ingreso` DATE, IN `ptipo_usuario` VARCHAR(60), IN `pestado` VARCHAR(60), IN `ppuesto` VARCHAR(50))
    NO SQL
INSERT INTO tusuarios(primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo_electronico, fecha_nacimiento, edad, telefono, nacionalidad, contrasena, username, fecha_ingreso, tipo_usuario, estado, puesto)
VALUES(pprimer_nombre, psegundo_nombre, pprimer_apellido, psegundo_apellido, pcorreo_electronico, pfecha_nacimiento, pedad, ptelefono, pnacionalidad, pcontrasena, pusername, pfecha_ingreso, ptipo_usuario, pestado, ppuesto)$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_modificar_cliente`(IN `pusername` VARCHAR(60), IN `pprimer_nombre` VARCHAR(60), IN `psegundo_nombre` VARCHAR(60), IN `pprimer_apellido` VARCHAR(60), IN `psegundo_apellido` VARCHAR(60), IN `pcorreo_electronico` VARCHAR(60), IN `pfecha_nacimiento` DATE, IN `pedad` INT(3), IN `ptelefono` VARCHAR(60), IN `pnacionalidad` VARCHAR(60))
    NO SQL
UPDATE tusuarios
SET primer_nombre=pprimer_nombre, segundo_nombre=psegundo_nombre, primer_apellido=pprimer_apellido, segundo_apellido=psegundo_apellido, correo_electronico=pcorreo_electronico, fecha_nacimiento=pfecha_nacimiento, edad=pedad, telefono=ptelefono, nacionalidad=pnacionalidad
WHERE username = pusername$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_modificar_estado_plato_orden`(IN `pestado` VARCHAR(20), IN `pid_item` INT(50))
    NO SQL
UPDATE tplatos_x_orden
SET estado = pestado
WHERE id_item = pid_item$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_modificar_estado_plato_pedido`(IN `pestado` VARCHAR(20), IN `pid_item` INT(50))
    NO SQL
UPDATE tplatos_x_pedido
SET estado = pestado
WHERE id_item = pid_item$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_modificar_mesa`(IN `pNumeroMesa` INT(2), IN `pNombreMesa` VARCHAR(25), IN `pDescripcion` TEXT, IN `pCapacidad` INT(2), IN `pTipoMesa` VARCHAR(25), IN `pEstado` VARCHAR(20))
    NO SQL
UPDATE tmesas
SET nombre_mesa=pNombreMesa, descripcion=pDescripcion, capacidad=pCapacidad, tipo_mesa=pTipoMesa, estado=pEstado
WHERE pNumeroMesa=tmesas.numero_mesa$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_modificar_parametros`(IN `pnombre_rest` VARCHAR(60), IN `ptelefono_rest` VARCHAR(25), IN `pcedula_juridica` VARCHAR(25), IN `pcorreo_rest` VARCHAR(25), IN `pdireccion_rest` VARCHAR(60), IN `phorario_rest` VARCHAR(60), IN `pimpuesto_ventas` VARCHAR(60), IN `pimpuesto_servicio` VARCHAR(60), IN `pprecio_domicilio` INT(25), IN `ptiempo_uno` VARCHAR(10), IN `ptiempo_dos` VARCHAR(10), IN `ptiempo_tres` VARCHAR(10))
    NO SQL
UPDATE `tparametros`
SET `nombre_rest`=pnombre_rest,
`telefono_rest`=ptelefono_rest,
`cedula_juridica`=pcedula_juridica,
`correo_rest`=pcorreo_rest,
`direccion_rest`=pdireccion_rest,
`horario_rest`=phorario_rest,
`impuesto_ventas`=pimpuesto_ventas,
`impuesto_servicio`=pimpuesto_servicio,
`precio_domicilio`=pprecio_domicilio,
`tiempo_uno`= ptiempo_uno,
`tiempo_dos`= ptiempo_dos,
`tiempo_tres`= ptiempo_tres

WHERE 1$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_modificar_plato`(IN `pid_plato` INT(3), IN `pnombre_plato` VARCHAR(60), IN `pnombre_ingles` VARCHAR(60), IN `pprecio` INT(6), IN `pingredientes` TEXT, IN `pcaracteristicas_especiales` TEXT, IN `pcalorias` INT(5), IN `ptipo_plato` VARCHAR(20))
    NO SQL
UPDATE tplatos
SET nombre_plato = pnombre_plato, nombre_ingles = pnombre_ingles, precio = pprecio, ingredientes = pingredientes, caracteristicas_especiales = pcaracteristicas_especiales, calorias = pcalorias, tipo_plato = ptipo_plato
WHERE id_plato = pid_plato$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_modificar_puesto`(IN `pnombre` VARCHAR(50), IN `pdescripcion` TEXT, IN `pid_puesto` INT(2))
    NO SQL
UPDATE tpuestos
SET nombre = pnombre, descripcion = pdescripcion
WHERE id_puesto = pid_puesto$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_modificar_puntos`(IN `ppuntos` INT(5), IN `pusername` VARCHAR(60))
    NO SQL
UPDATE tusuarios
SET puntos = ppuntos +(puntos)
WHERE username = pusername$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_modificar_usuario`(IN `pid_usuario` INT, IN `pprimer_nombre` VARCHAR(60), IN `psegundo_nombre` VARCHAR(60), IN `pprimer_apellido` VARCHAR(60), IN `psegundo_apellido` VARCHAR(60), IN `pcorreo_electronico` VARCHAR(60), IN `pfecha_nacimiento` DATE, IN `pedad` INT(3), IN `ptelefono` VARCHAR(60), IN `pnacionalidad` VARCHAR(60), IN `pcontrasena` VARCHAR(60), IN `pusername` VARCHAR(60), IN `pfecha_ingreso` DATE, IN `pestado` VARCHAR(60), IN `ppuesto` VARCHAR(50))
    NO SQL
UPDATE tusuarios
SET primer_nombre=pprimer_nombre, segundo_nombre=psegundo_nombre, primer_apellido=pprimer_apellido, segundo_apellido=psegundo_apellido, correo_electronico=pcorreo_electronico, fecha_nacimiento=pfecha_nacimiento, edad=pedad, telefono=ptelefono, nacionalidad=pnacionalidad, contrasena=pcontrasena, username=pusername, fecha_ingreso=pfecha_ingreso, estado=pestado, puesto=ppuesto
WHERE id_usuario=pid_usuario$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_redimir_reservacion`(IN `pNumReserva` INT(6))
    NO SQL
UPDATE treservas
SET estado='Redimida'
WHERE pNumReserva=treservas.numero_reserva$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `pa_ubicar_cliente`(IN `pNumMesa` INT(2), IN `pUsuario` VARCHAR(20))
    NO SQL
    COMMENT '***Ocupar mesa***'
UPDATE tmesas
SET estado='Ocupada', usuario_ocupando=pUsuario
WHERE pNumMesa=tmesas.numero_mesa$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbitacora`
--

CREATE TABLE IF NOT EXISTS `tbitacora` (
  `id_botacora` int(10) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `id_usuario` int(10) NOT NULL,
  `nombre` varchar(80) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `accion` varchar(60) NOT NULL,
  PRIMARY KEY (`id_botacora`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tfactura`
--

CREATE TABLE IF NOT EXISTS `tfactura` (
  `id_factura` int(10) NOT NULL AUTO_INCREMENT,
  `id_parametro` int(10) NOT NULL,
  `nombre_cliente` text NOT NULL,
  `id_orden` int(10) NOT NULL,
  `descuento` int(3) NOT NULL,
  `total` int(10) NOT NULL,
  PRIMARY KEY (`id_factura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tmedio_pagos`
--

CREATE TABLE IF NOT EXISTS `tmedio_pagos` (
  `id_medio_pago` int(10) NOT NULL AUTO_INCREMENT,
  `prioridad` varchar(20) NOT NULL,
  `num_tarjeta` varchar(40) NOT NULL,
  `nombre_titular` varchar(60) NOT NULL,
  `cod_seguridad` int(5) NOT NULL,
  `fecha_expiracion` date NOT NULL,
  `tipo_tarjeta` varchar(20) NOT NULL,
  `usuario` varchar(60) NOT NULL,
  PRIMARY KEY (`id_medio_pago`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=25 ;

--
-- Volcado de datos para la tabla `tmedio_pagos`
--

INSERT INTO `tmedio_pagos` (`id_medio_pago`, `prioridad`, `num_tarjeta`, `nombre_titular`, `cod_seguridad`, `fecha_expiracion`, `tipo_tarjeta`, `usuario`) VALUES
(20, 'Primario', '45489087654318', 'Samanta Mendez', 877, '2018-12-01', 'VISA', 'samanta1'),
(24, 'Primario', '123456789012345', 'Sebastían Matamoros', 123, '2015-08-31', 'American Express', 'semata');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tmesas`
--

CREATE TABLE IF NOT EXISTS `tmesas` (
  `numero_mesa` int(2) NOT NULL,
  `nombre_mesa` varchar(25) NOT NULL,
  `descripcion` text NOT NULL,
  `capacidad` int(2) NOT NULL,
  `tipo_mesa` varchar(60) NOT NULL DEFAULT 'Discapacitados',
  `estado` varchar(20) NOT NULL DEFAULT 'Libre',
  `usuario_ocupando` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`numero_mesa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tmesas`
--

INSERT INTO `tmesas` (`numero_mesa`, `nombre_mesa`, `descripcion`, `capacidad`, `tipo_mesa`, `estado`, `usuario_ocupando`) VALUES
(1, 'Abraxas', 'Nuestra mesa preferida por los clientes.', 4, 'Apta para discapacitados', 'Libre', ''),
(2, 'Arcanas', 'Excelente vista a las montañas de Sarapiquí.', 6, 'Apta para discapacitados', 'Libre', ''),
(3, 'Chakra', 'Excelente vista a las montañas de Sarapiquí.', 8, 'Apta para discapacitados', 'Libre', ''),
(4, 'Antares', 'Excelente vista a las montañas de Sarapiquí.', 10, 'Apta para discapacitados', 'Libre', ''),
(5, 'Virgo', 'Espacio acogedor para una cena romántica.', 4, 'Apta para discapacitados', 'Libre', ''),
(6, 'Médium', 'Excelente vista a las montañas de Sarapiquí.', 4, 'Apta para discapacitados', 'Libre', ''),
(7, 'Tantra', 'Espacio acogedor para una cena romántica.', 8, 'Apta para discapacitados', 'Libre', ''),
(8, 'Amanecer', 'Espacio acogedor para una cena romántica.', 2, 'No apta para discapacitad', 'Libre', ''),
(9, 'Tarot', 'Excelente vista a las montañas de Sarapiquí.', 6, 'No apta para discapacitad', 'Libre', ''),
(10, 'Acuario', 'Espacio acogedor para una cena romántica.', 7, 'No apta para discapacitad', 'Libre', ''),
(11, 'Aioria', 'Excelente ubicación.', 8, 'Apta para discapacitados', 'Libre', ''),
(12, 'Aldebarán', 'Cerca de los servicios sanitarios.', 12, 'Apta para discapacitados', 'Libre', ''),
(13, 'Shaka', 'Una de nuestras mesas mas solicitadas.', 5, 'Apta para discapacitados', 'Libre', ''),
(14, 'Mu', 'Se ubica en la entrada principal, muy fresca.', 7, 'Apta para discapacitados', 'Libre', ''),
(15, 'Shura', 'Le llegará el olor de los platillos por la cercanía a la cocina', 8, 'Apta para discapacitados', 'Libre', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tordenes`
--

CREATE TABLE IF NOT EXISTS `tordenes` (
  `id_orden` int(10) NOT NULL AUTO_INCREMENT,
  `numero_mesa` int(2) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `username_salonero` varchar(60) NOT NULL,
  PRIMARY KEY (`id_orden`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tparametros`
--

CREATE TABLE IF NOT EXISTS `tparametros` (
  `id_parametro` int(10) NOT NULL AUTO_INCREMENT,
  `nombre_rest` varchar(60) NOT NULL,
  `telefono_rest` varchar(25) NOT NULL,
  `cedula_juridica` varchar(25) NOT NULL,
  `correo_rest` varchar(25) NOT NULL,
  `direccion_rest` varchar(60) NOT NULL,
  `horario_rest` varchar(60) NOT NULL,
  `impuesto_ventas` varchar(60) NOT NULL,
  `impuesto_servicio` varchar(60) NOT NULL,
  `precio_domicilio` int(25) NOT NULL,
  `tiempo_uno` varchar(10) NOT NULL,
  `tiempo_dos` varchar(10) NOT NULL,
  `tiempo_tres` varchar(10) NOT NULL,
  PRIMARY KEY (`id_parametro`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=17 ;

--
-- Volcado de datos para la tabla `tparametros`
--

INSERT INTO `tparametros` (`id_parametro`, `nombre_rest`, `telefono_rest`, `cedula_juridica`, `correo_rest`, `direccion_rest`, `horario_rest`, `impuesto_ventas`, `impuesto_servicio`, `precio_domicilio`, `tiempo_uno`, `tiempo_dos`, `tiempo_tres`) VALUES
(16, 'Restaurante y Mirador La Ruta Astral', '5555-5556', '3-101-008765', 'info@ruta-astral.com', 'La Herediana de Siquirres', 'Lunes a Domingo, de 2:00 pm a 1:00 am', '0.13', '0.10', 2000, '5horas', '2horas', '3horas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tpedidos_domicilio`
--

CREATE TABLE IF NOT EXISTS `tpedidos_domicilio` (
  `id_pedido` int(5) NOT NULL AUTO_INCREMENT,
  `estado` varchar(20) NOT NULL,
  `username_cliente` varchar(60) NOT NULL,
  `direccion` text NOT NULL,
  PRIMARY KEY (`id_pedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tplatos`
--

CREATE TABLE IF NOT EXISTS `tplatos` (
  `id_plato` int(3) NOT NULL AUTO_INCREMENT,
  `nombre_plato` varchar(60) NOT NULL,
  `nombre_ingles` varchar(60) DEFAULT NULL,
  `precio` int(6) NOT NULL,
  `ingredientes` text NOT NULL,
  `caracteristicas_especiales` text,
  `calorias` int(5) DEFAULT NULL,
  `tipo_plato` varchar(20) NOT NULL,
  PRIMARY KEY (`id_plato`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=38 ;

--
-- Volcado de datos para la tabla `tplatos`
--

INSERT INTO `tplatos` (`id_plato`, `nombre_plato`, `nombre_ingles`, `precio`, `ingredientes`, `caracteristicas_especiales`, `calorias`, `tipo_plato`) VALUES
(1, 'Ñoquis (gnocchi) caseros', '', 4500, 'Pasta italiana cuyo ingrediente principal es la papa, sírvelos con tu salsa italiana favorita.', '', 1000, 'Plato fuerte'),
(2, 'Spaghetti a la boloñesa', '', 4800, 'Spagueti a la boloñesa con pocos ingredientes, pero mucho sabor.', '', 100, 'Plato fuerte'),
(3, 'Lasagne della casa', '', 4500, 'Tradicional con salsa boloñesa, queso parmesano y alcachofa.', '', 300, 'Plato fuerte'),
(4, 'I Piccolini di spinaci', NULL, 5120, 'Mini ravioles rellenos de ricotta y espinaca, gratinados con salsa blanca y aceite de trufa.', NULL, 700, 'Plato fuerte'),
(5, 'Aspagari e zafferano', NULL, 6100, 'Arroz arborio al estilo italiano con espárragos, azafrán y parmesano.', NULL, 500, 'Plato fuerte'),
(6, 'Pizza Margherita', NULL, 8500, 'Tomate, albahaca y mozzarella.', NULL, 800, 'Plato fuerte'),
(7, '4 Stagioni', NULL, 7320, 'Mozzarela, ricota, jamon de pavo, anchoas, aceituna negra, alcachofas y champiñón.', NULL, 1500, 'Plato fuerte'),
(8, 'Lomito de res a la plancha', '', 5260, '200 gramos de puro lomito de res de la mejor calidad, con hierbas, acompañado de puré y vegetales de temporada', '', 1200, 'Plato fuerte'),
(9, 'Olla de carne', NULL, 4000, 'Elote, tacaco, yuca papa, ayote, zanahoria, plátano verde, chayote, tiquisque, ñampí', NULL, 1700, 'Plato fuerte'),
(10, 'Martini de sandía', 'Watermelon martini', 1200, 'Skyy vodka / sandía / sirope de caña de azúcar', 'Servido en copa martini', 156, 'Coctel'),
(11, 'Martini con fruta de la pasión', 'Passion fruit martini', 1500, 'Skyy vodka / fruta de la pasión/ sirope de caña de azúcar', 'Servido en copa martini', 160, 'Coctel'),
(12, 'Eclipse', '', 1800, 'Ketel one vodka / shochu infusionado / azúcar /sandía', 'Servido en vaso alto con hielo', 142, 'Coctel'),
(13, 'Sexo en la playa', 'Sex on the beach', 2000, 'Vodka / 1 oz de jugo de naranja /½ oz de cóctel de arándanos', NULL, 175, 'Coctel'),
(14, 'Orgasmo chillón', 'Screaming orgasm', 2150, 'Hielo picado / 1 oz de vodka de calidad / 1 ½ oz de crema irlandesa de Bailey / ½ oz de kahlua', NULL, 200, 'Coctel'),
(15, 'Mojito caribeño', 'Caribbean mojito', 1350, 'Brugal ron / licor de naranja / angostura bitters / lima / naranja / menta / cava', 'Servido en vaso alto con hielo', 136, 'Coctel'),
(16, 'Squares delight', '', 1800, 'Gin mare ginebra / martini bianco / limón / azúcar / uva / albahaca / clara de huevo/ bitter de apio', 'Servido en copa martini', 174, 'Coctel'),
(17, 'Fraise clicquot', '', 1950, 'Veuve clicquot champagne / licor de sauco st germain / fresa / sirope de canela / bitter de Jerry thomas de naranja', 'Servido en flauta royal', 160, 'Coctel'),
(18, 'Aquí viene el sol', 'Here comes the sun', 2300, 'Beluga vodka /amareto disaronno / fruta de la pasión / zumo de lima / clara de huevo / azúcar', 'Servido en vaso alto con hielo', 150, 'Coctel'),
(19, 'Jardín picante', 'Spicy garden', 2500, 'Bombay original ginebra / frambuesa / lima / canela / agua de rosas / tabasco / ginger ale', 'Servido en copa gota', 130, 'Coctel'),
(20, 'Sinfonía de flores', 'Flower symphony', 2200, 'Sky vodka / licor st germain / cava juve camps / canela / menta / lima / pomelo', 'Servido en copa gota', 156, 'Coctel'),
(21, 'Cloudy window', '', 1750, 'Bacardi superior ron / sirope de canela / sirope de miel / lychee / granada / fresa / lavanda', 'Servido en vaso alto con hielo', 145, 'Coctel'),
(22, 'Summer pure', NULL, 1650, 'Belvedere / amareto disaronno / zumo de manzana / manzana fresca / lima / azúcar / clara de huevo', NULL, 160, 'Coctel'),
(23, 'Sinners future', '', 1820, 'Zacapa 23 ron / campari / sirope de canela / albahaca / bitter de pomelo / zumo de pomelo / cayena / lima', 'Servido en copa gota', 180, 'Coctel'),
(24, 'Moonlight San Francisco', '', 2150, 'Ciroc vodka / cointreau / sirope de chocolate / fresas / lima / clara de huevo', 'Servido en flauta royal con cacao', 178, 'Coctel'),
(25, 'Old tennese', '', 2500, 'Tanqueray ten ginebra / licor st. germain / miel / uva / clara de huevo / lima / angostura', 'Servido en copa martini', 200, 'Coctel'),
(26, 'Dama mediterránea', 'Mediterranean lady', 2100, 'London nº3 ginebra / cointreau / sirope de azucar / lima / albahaca / romero / menta', 'Servido en copa martini', 200, 'Coctel'),
(27, 'Pink Floyd', '', 2000, 'Belvedere vodka / licor de moras / moras frescas / melocotón / miel / cava juve camps', 'Servido en copa catalina', 250, 'Coctel'),
(28, 'Amalfi sour', '', 1720, 'Grey goose vodka / limoncello / sirope de fresa / miel / fresas / limón / clara de huevo / pimienta', 'Servido en flauta royal', 166, 'Coctel'),
(29, 'Esencia primaveral', 'Spring essence', 1650, 'Johnie Walker gold whisky / kway feh lychee / zumo de lychee / sirope de rosas / lima / clara de huevo', 'Servido en copa martini', 176, 'Coctel'),
(30, 'Sun Tzu', '', 1450, 'Grey goose vodka / aperol / kumquats / lima / pomelo / sirope de almendras', 'Servido en flauta royal', 164, 'Coctel'),
(31, 'Tentación oscura', 'Dark temptation', 2600, 'Brugal ron / passoa / veuve cliquot champagne / piña / vainilla / lima / menta / fruta de la pasión', 'Servido en vaso alto con hielo', 215, 'Coctel'),
(32, 'Mosquito', NULL, 2250, 'Menta / sirope de miel / lima / manzana / hielo picado', NULL, 150, 'Coctel'),
(33, 'Lunes', 'Monday', 1420, 'Zumo de arándanos / zumo de manzana / sirope de canela / fresas/ lima / servido en copa catalina', NULL, 190, 'Coctel'),
(34, 'Elixir natural', 'Natural elixir', 2000, 'Limón / zumo de naranja / piña/ sirope de canela / arándanos / jengibre/ hielo picado', NULL, 130, 'Coctel'),
(36, 'Sandwich de Hummus', '', 4950, 'Hummus, queso feta, pepino en un delicioso pan multigrano artesanal.', '', 0, 'Plato fuerte');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tplatos_x_orden`
--

CREATE TABLE IF NOT EXISTS `tplatos_x_orden` (
  `id_item` int(50) NOT NULL AUTO_INCREMENT,
  `id_orden` int(20) NOT NULL,
  `nombre_plato` varchar(60) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `cantidad` int(3) NOT NULL,
  `precio` int(6) NOT NULL,
  PRIMARY KEY (`id_item`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tplatos_x_pedido`
--

CREATE TABLE IF NOT EXISTS `tplatos_x_pedido` (
  `id_item` int(6) NOT NULL AUTO_INCREMENT,
  `id_orden` int(5) NOT NULL,
  `nombre_plato` varchar(60) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `cantidad` int(3) NOT NULL,
  `precio` int(6) NOT NULL,
  PRIMARY KEY (`id_item`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tpuestos`
--

CREATE TABLE IF NOT EXISTS `tpuestos` (
  `id_puesto` int(2) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text NOT NULL,
  PRIMARY KEY (`id_puesto`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- Volcado de datos para la tabla `tpuestos`
--

INSERT INTO `tpuestos` (`id_puesto`, `nombre`, `descripcion`) VALUES
(1, 'Gerente', 'Dueño y administrador del restaurante'),
(2, 'Salonero', 'Encargado de llevar las órdenes de los clientes.'),
(4, 'Cajero', 'Encargado de realizar la facturación de las órdenes.'),
(5, 'Técnico', 'Encargado del mantenimiento del equipo informático.'),
(6, 'Cocinero', 'Encargado de la preparación de los platos.'),
(11, 'Miscelaneo', 'Encargado de la limpieza del establecimiento.'),
(12, 'Contador', 'Encargado del control financiero del negocio.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `treservas`
--

CREATE TABLE IF NOT EXISTS `treservas` (
  `numero_reserva` int(6) NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `hora` int(3) NOT NULL,
  `cantidad_personas` int(3) NOT NULL,
  `mesa` varchar(20) NOT NULL,
  `numero_mesa` int(3) NOT NULL,
  `usuario` varchar(60) NOT NULL,
  `estado` varchar(20) NOT NULL DEFAULT 'Pendiente',
  PRIMARY KEY (`numero_reserva`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ttipos_platos`
--

CREATE TABLE IF NOT EXISTS `ttipos_platos` (
  `id_tipos_platos` int(2) NOT NULL AUTO_INCREMENT,
  `tipo_plato` varchar(20) NOT NULL,
  `descripcion` text CHARACTER SET utf32,
  PRIMARY KEY (`id_tipos_platos`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=6 ;

--
-- Volcado de datos para la tabla `ttipos_platos`
--

INSERT INTO `ttipos_platos` (`id_tipos_platos`, `tipo_plato`, `descripcion`) VALUES
(1, 'Plato fuerte', NULL),
(2, 'Coctel', NULL),
(3, 'Entrada', NULL),
(4, 'Postre', NULL),
(5, 'Refresco', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tusuarios`
--

CREATE TABLE IF NOT EXISTS `tusuarios` (
  `id_usuario` int(10) NOT NULL AUTO_INCREMENT,
  `primer_nombre` varchar(60) NOT NULL,
  `segundo_nombre` varchar(60) DEFAULT NULL,
  `primer_apellido` varchar(60) NOT NULL,
  `segundo_apellido` varchar(60) DEFAULT NULL,
  `correo_electronico` varchar(60) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `edad` int(3) NOT NULL,
  `telefono` varchar(60) NOT NULL,
  `nacionalidad` varchar(60) NOT NULL,
  `contrasena` varchar(60) NOT NULL,
  `username` varchar(60) NOT NULL,
  `fecha_ingreso` date NOT NULL,
  `tipo_usuario` varchar(60) NOT NULL,
  `estado` varchar(60) NOT NULL,
  `puesto` varchar(50) CHARACTER SET ucs2 NOT NULL,
  `puntos` int(5) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- Volcado de datos para la tabla `tusuarios`
--

INSERT INTO `tusuarios` (`id_usuario`, `primer_nombre`, `segundo_nombre`, `primer_apellido`, `segundo_apellido`, `correo_electronico`, `fecha_nacimiento`, `edad`, `telefono`, `nacionalidad`, `contrasena`, `username`, `fecha_ingreso`, `tipo_usuario`, `estado`, `puesto`, `puntos`) VALUES
(1, 'Victor', NULL, 'Garcia', NULL, 'vgarciax@webmasters.com', '1970-06-05', 45, '66554433', 'Costarricense', '1234qwe#', 'vgarciax', '2013-01-02', 'Administrador', 'Activo', 'Gerente', 0),
(2, 'Mariel', '', 'Ramirez', '', 'mex_506@hotmail.com', '1897-09-26', 27, '70143221', 'Costarricense', 'abcd1234', 'mramirezs', '2015-08-05', 'Salonero', 'Activo', 'Salonero', 0),
(3, 'Gabriel', '', 'Rios', '', 'griosm@ucenfotec.ac.cr', '1988-02-21', 27, '87073578', 'Costarricense', 'griosm1', 'griosm', '2015-08-05', 'Salonero', 'Activo', 'Salonero', 0),
(4, 'Rodrigo ', NULL, 'Paris', NULL, 'rparisp@ucenfotec.ac.cr', '1990-07-31', 25, '60494177', 'Costarricense', 'rparis1', 'rparisp', '2015-08-05', 'Cajero', 'Activo', 'Cajero', 0),
(5, 'Fabio', NULL, 'Flores', NULL, 'efloresm@webmasters.com', '1988-12-06', 26, '77665544', 'Costarricense', 'fab123', 'efloresm', '2015-08-01', 'Soporte', 'Activo', 'Técnico', 0),
(7, 'Sebastian', '', 'Matamoros', 'Sanchez', 'semata90@gemail.com', '1990-06-06', 25, '70605045', 'Costarricense', 'abc123**', 'semata', '2015-05-13', 'Cliente', 'Activo', 'N/A', 10),
(13, 'Luigi', '', 'Bongusto', '', 'luigi85@webmasters.com', '1985-08-22', 30, '71625340', 'Italiano', 'luigi85', 'lubongu', '2012-09-09', 'Cocinero', 'Activo', 'Cocinero', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
