<?php
include("Conexion.php");
$Nombre=$_POST['Nombre'];
$Correo=$_POST['Correo'];
$Mensaje=$_POST['Mensaje'];
$Id=$_POST['Id'];
$query= "INSERT INTO opinion(Nombre,Correo,Mensaje,Id)
VALUES('$Nombre','$Correo','$Mensaje','$Id')";
$resultado= $conexion->query($query);
if ($resultado){header("Location: Index 4.php");}
else{echo "Registro fallido";}
?>