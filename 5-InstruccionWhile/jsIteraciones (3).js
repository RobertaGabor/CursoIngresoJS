function mostrar()
{

	var clave;
	
	clave = prompt("ingrese el número clave.");
	while(clave!="utn750")//como es palabrta puede ir solo un =
	{
		clave = prompt("ingrese el número clave.");
		console.info("Contraseña incorrecta");
	}
	console.info("Bienvenido");
}//FIN DE LA FUNCIÓN
