<!DOCTYPE html>
<html>
<head>
	<title>Contacto</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="estilo 1.css">
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


	<!-----------------------CONTACTO-------------------------------------->
	<center>
	<h2>Contactanos en nuestra redes sociales:</h2>

	<p>rombecabezas65@gmail.com</p>


	<h2>o<br><br>Mandanos tu comentario u opinion</h2>
	
	<div class="ms1"><br><br>
	<form action="SaveMessage.php" method="post">
	<input type="text" name="Nombre" id="campo1" maxlength="45" placeholder="Nombre" required><br><br>
	<input type="text" name="Correo" id="campo1" maxlength="45" placeholder="Correo" required><br><br>
	<textarea name="Mensaje" placeholder="Esciba aquí su mensaje" maxlength="100" id="campo1" required></textarea><br>
	<input type="submit" value="Enviar" id="btn"><br><br>
    </form>
    </div>
    </center>
    
</body>
</html>