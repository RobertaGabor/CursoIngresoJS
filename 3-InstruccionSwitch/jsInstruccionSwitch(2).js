function mostrar()
{
	var mesDelAño;
	
	mesDelAño=document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Diciembre":
		case "Enero":
		case "Febrero":
		alert("Ya pasamos el frio, ahora calor!!!");
		break;

		case "Marzo":
		case "Abril":
		case "Mayo":
		alert("Falta para el invierno");
		break;

		case "Junio":
		case "Julio":
		case "Agosto":
		alert("Abrigate que hace frio");
		break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		alert("Ya pasamos el frio, ahora calor");
		break;
	}
}//FIN DE LA FUNCIÓN