<?php
include("Conexion.php");
$Id=$_POST['Id'];
$username=$_POST['username'];
$email=$_POST['email'];
$password=$_POST['password'];
$Telefono=$_POST['Telefono'];
$Mensaje=$_POST['Mensaje'];
$query= "INSERT INTO usuario(Id,username,email,password,Telefono,Mensaje)
VALUES('$Id','$username','$email','$password','$Telefono','$Mensaje')";
$resultado= $conexion->query($query);
if ($resultado){echo "ya se registro su cuenta";
	header("Location: Index 2.php");}
else{echo "Registro fallido";}
?>