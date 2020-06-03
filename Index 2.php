<!DOCTYPE html>
<html>
<head>
	<title>Iniciar Sección</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="estilo 2.css">
</head>
<body>

	<!-----------------------MENU-------------------------------------->

	<ul class="menu">
	<center>
		<li ><a href="index.html"><img id="img1" src="https://image.flaticon.com/icons/png/512/8/8811.png" width="20" height="20"> Inicio</a></li>

		<li ><a href="Index 2.php"><img id="img1" src="https://image.flaticon.com/icons/png/512/64/64572.png" width="20" height="20"> Iniciar Sección</a></li>

		<li ><a href="index 3.html"><img id="img1" src="https://image.flaticon.com/icons/png/512/0/709.png" width="20" height="20"> Jugar</a></li>

		<li ><a href="Index 4.php"><img src="https://image.flaticon.com/icons/png/512/49/49972.png" width="20" height="20"> Contacto</a></li>
	</center>
	</ul>


	<!-----------------------INICIAR SECCIÓN-------------------------------------->

	<br>
	<form action="Registros.php" method="post">
	<center><table class="tb1">
	<tr><td>
	<center><h1>Iniciar Sección</h1></center>
	<table class="con">
	<tr>
	<td>
	<input type="text" name="username"   placeholder="Nombre"   maxlength="50" id="campo1" required><br><br>
	<input type="text" name="email"      placeholder="Correo"   maxlength="40" id="campo1" required ><br><br>
	<input type="password" name="password" placeholder="Contraseña" maxlength="30" id="campo1" required><br><br>
	<input type="text"     name="Telefono" placeholder="Telefono"   maxlength="12" id="campo1" required><br><br>
	<textarea name="Mensaje" placeholder="Esciba aquí su mensaje"   maxlength="100" id="campo2" required></textarea><br>
	<input type="submit" value="Enviar" id="btn">
	</td>
	</tr>
	</table>
	</form>
</body>
</html>