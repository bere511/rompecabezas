<?php
    $server = "localhost";
    $user = "root";
    $pass = "";
    $conexion = mysqli_connect($server, $user, $pass);
    if(!$conexion) 
    {
echo "No se ha podido conectar con el servidor" . mysql_error();
    }
    else
    {
    	echo "<br>Hemos conectado al servidor <br>" ;
    }
$db = "registrosdbla";
$datab = mysqli_select_db($conexion,$db);
if (!$datab)
    {
    echo "<br>No se ha podido encontrar la base de datosbr>";
    }
    else
    {
    	echo "<br>Base de datos seleccionada<br>" ;
    }
?>