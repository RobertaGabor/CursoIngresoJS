function mostrar()
{
	var primerNumero
	var segundoNumero
	var suma

	primerNumero=prompt("Ingrese numero","ej: 2");
	segundoNumero=prompt("Ingrese numero","ej: 3");


	if(primerNumero==segundoNumero)
	{
		alert(primerNumero+segundoNumero);
	}
	else
	{
		if(primerNumero>segundoNumero)
		{
			alert(primerNumero-segundoNumero);
		}
		else
		{
			primerNumero=parseInt(primerNumero);
			segundoNumero=parseInt(segundoNumero);
			suma=primerNumero+segundoNumero;
			alert(suma);
		}
	}

	if(suma>10)
	{
		alert("La suma es " + suma + " y supero el 10");
	}

}
