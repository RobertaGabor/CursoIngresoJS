function mostrar()
{
	/*var nombre;
	var localidad;

	nombre=document.getElementById('elNombre').value;
	localidad=document.getElementById('laLocalidad').value;

	alert("Usted es " +nombre + " y vive en la localidad de " +localidad);*/

	/*Pedir 
	edad mayor a 18 VALIDAR
	sexo f o m VALIDAR
	pasaje urbano/nacional/internacional VALIDAR
	nombre

	pedir:
	a)nombre del hombre con pasaje nacional mas joven
	b)sexo y pasaje del viajere mas viejo
	c)la cantidad de mujeres con pasaje urbano o nacional
	d)el promedio de edad entre mujeres
	e)promedio de edad entre hombres con pasaje internacional
	*/

	var nombre;
	var edad;
	var sexo;
	var pasaje;
	var respuesta;
	var i;
	var contadorHombreNacional;
	var edadHombreNacionalMasJoven;
	var edadHombreNacionalMasJovenNombre;
	var edadMasVieje;
	var edadMasViejeSexo;
	var edadMasViejePasaje;
	var contadorMujerPasaje;
	var acumuladorEdadMujeres;
	var contadorEdadMujeres;
	var acumuladorEdadHombres;
	var contadorEdadHombres;
	var promedioMujeres;
	var promedioVarones;

	respuesta="si";
	i=0;
	contadorHombreNacional=0;
	contadorMujerPasaje=0;
	acumuladorEdadMujeres=0;
	contadorEdadMujeres=0;
	acumuladorEdadHombres=0;
	contadorEdadHombres=0;

	while(respuesta=="si")
	{
		do
		{
			nombre=prompt("Ingrese el nombre");
		}
		while(!isNaN(nombre));

		do
		{
			edad=prompt("Ingrese la edad");
			edad=parseInt(edad);
		}
		while(isNaN(edad)||edad<18||edad>100);

		do
		{
			sexo=prompt("Ingrese sexo","f o m");
		}
		while(!isNaN(sexo)||sexo!="f"&&sexo!="m");

		do
		{
			pasaje=prompt("Ingrese tipo de pasaje","urbano,nacional,internacional");
		}
		while(!isNaN(pasaje)||pasaje!="urbano"&&pasaje!="nacional"&&pasaje!="internacional");

		
		if(sexo=="f")
		{
			acumuladorEdadMujeres=acumuladorEdadMujeres+edad;
			contadorEdadMujeres++;
			if(pasaje=="urbano"||pasaje=="nacional")
			{
				contadorMujerPasaje++;
			}
		}
		else
		{
			if(pasaje=="nacional")
			{
				if(contadorHombreNacional==0||edadHombreNacionalMasJoven>edad)
				{
					edadHombreNacionalMasJoven=edad;
					edadHombreNacionalMasJovenNombre=nombre;
				}
				contadorHombreNacional++;
			}
			else
			{
				if(pasaje=="internacional")
				{
					acumuladorEdadHombres=acumuladorEdadHombres+edad;
					contadorEdadHombres++;
				}
			}
		}

		if(i==0||edadMasVieje<edad)
		{
			edadMasVieje=edad;
			edadMasViejePasaje=pasaje;
			edadMasViejeSexo=sexo;
		}

		i++;
		respuesta=prompt("Ingrese si para continuar sino finalizará","si");
	}
	promedioMujeres=acumuladorEdadMujeres/contadorEdadMujeres;
	promedioVarones=acumuladorEdadHombres/contadorEdadHombres;
	
	document.write("<br> nombre del hombre con pasaje nacional mas joven: "+edadHombreNacionalMasJovenNombre);
	document.write("<br> sexo y pasaje del viajere mas viejo: "+edadMasViejeSexo +" y "+edadMasViejePasaje);
	document.write("<br> cantidad de mujeres con pasaje urbano o nacional: "+contadorMujerPasaje);
	document.write("<br> promedio de edad entre mujeres: "+promedioMujeres);
	document.write("<br> promedio de edad entre hombres con pasaje internacional: "+promedioVarones);
}
