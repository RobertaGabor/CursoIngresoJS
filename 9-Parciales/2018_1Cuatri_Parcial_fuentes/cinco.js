function mostrar()
{
	var planeta

	planeta=prompt("ingrese planeta","Ej:mercurio");

	switch(planeta)
	{
		case "tierra":
		console.info("Acá vivimos");
		break;
		case "mercurio":
		case "venus":
		console.info("Acá hace más calor");
		break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "pluton":
		console.info("acá hace más frio");
		break;
		default:
		console.info("No es un planeta");
	}

}
