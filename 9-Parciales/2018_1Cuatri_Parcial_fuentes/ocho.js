function mostrar()
{
	var letra;
	var numero;
	var respuesta;
	var pares;
	var impares;
	var ceros;
	var contadorPositivo;
	var acumuladorPositivo;
	var maximo;
	var minimo;
	var letraMinimo;
	var letraMaxima;
	var i;

	acumuladorNegativo=0;
	i=0;
	contadorPositivo=0;
	acumuladorPositivo=0;
	ceros=0;
	impares=0;
	pares=0;
	respuesta="si";//si igualas 2, es doble comillas, si es no y si usar simples

	while(respuesta=="si")
	{
		letra=prompt("Ingrese una letra");

		while(!isNaN(letra))
		{
			letra=prompt("Ingrese una letra");
		}

		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		
		while(isNaN(numero)||numero<-100||numero>100)
		{
			numero=prompt("Ingrese un numero");
			numero=parseInt(numero);//parsear en ambos lados, porque sino no parsea
		}

		if(i==0)
		{
			maximo=numero;
			minimo=numero;
			letraMaxima=letra;
			letraMinimo=letra;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
				letraMaxima=letra;
			}
			else
			{
				if(numero<minimo)
				{
					minimo=numero;
					letraMinimo=letra;
				}
			}
		}

		if(numero%2==0)
		{
			if(numero==0)//un if que de los pares divida ceros con otros
			{
				ceros++
			}
			else
			{
				pares++
			}			
		}
		else
		{
			impares++
		}

		if(numero>0)
		{
			acumuladorPositivo=acumuladorPositivo+numero;
			contadorPositivo++;
		}
		else
		{
			if(numero<0)
			{
				acumuladorNegativo=acumuladorNegativo+numero;				
			}
		}
		i++;
		respuesta=prompt("ingrese si para continuar, sino finalizará","Ej: si");
	}

	console.info("Cantidad impares: "+impares);
	console.info("Cantidad pares: "+pares);
	console.info("Promedio de numeros positivos: "+acumuladorPositivo/contadorPositivo);
	console.info("Suma de negativos: "+acumuladorNegativo);
	console.info("Numero minimo: "+minimo+" letra del minimo: "+letraMinimo);
	console.info("Numero maximo: "+maximo+" letra del maximo: "+letraMaxima);
}

