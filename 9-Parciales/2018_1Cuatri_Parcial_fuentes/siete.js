function mostrar()
{
	var i;
	var nota;
	var sexo;
	var acumulador;
	var minima;
	var varones;
	var sexoMinima;

	acumulador=0;
	varones=0;

	for(i=0;i<5;i++)
	{
		nota=prompt("Ingrese la nota");//primero pide condicion
		nota=parseInt(nota);

		while(nota<0||nota>10)//se fija la logica y SOLO SI ENTRA puede bajar
		{
			nota=prompt("Ingrese la nota");
			nota=parseInt(nota);
		}	

		sexo=prompt("Ingrese sexo m o f","Ej: f");//si bajó pide sexo

		while(sexo!="m"&&sexo!="f")//solo si entra baja y acumula
		{
			sexo=prompt("Ingrese sexo m o f","Ej: f");
		}
		
		acumulador=acumulador+nota;
		
		if(nota>5)
		{
			if(sexo=="m")
			{
				varones++;
			}		
		}
		if(i==0)//adentro de for, porque no guarda informacion el seguir entrando
		{
			minima=nota;
			sexoMinima=sexo;
		}
		else
		{
			if(nota<minima)
			{
				minima=nota;
				sexoMinima=sexo;
			}
		}
	}
	console.info("promedio: " +acumulador/i);
	console.info("cantidad de varones con nota mayor igual a 6: "+varones);
	console.info("La menor nota es: "+minima+" de sexo: "+sexoMinima);
}
//el for si pones logica afuera te guarda solo lo ultimo que pusiste
