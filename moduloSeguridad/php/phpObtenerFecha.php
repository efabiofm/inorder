<?php
    $fecha = getdate();
    
    $day=$fecha['mday'];
    $month = $fecha['mon'];
    $year = $fecha['year'];
    
    $fecha = array($day,$month,$year);
    
    echo json_encode($fecha);