function mostrar()
{ 
	var respuesta;
	var numero;
	var sumaPositiva;
	var sumaNegativa;
	var diferencia;
	var contadorCero;
	var contadorPositivo;
	var contadorNegativo;
	var contadorPares;
	var promedioPositivo;
	var promedioNegativo;

	promedioPositivo=0;
	promedioNegativo=0;
	contadorCero=0;
	contadorPares=0;
	contadorPositivo=0;
	contadorNegativo=0;
	respuesta="si";
	sumaPositiva=0;
	sumaNegativa=0;

	while(respuesta!="no")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		respuesta=prompt("Si quiere terminar la ecuacion escribir no, sino continuará","ej: no");
		//dijo validar numero???
		if(numero>0)
		{
			sumaPositiva=sumaPositiva+numero;
			contadorPositivo=contadorPositivo+1;
		}
		else
		{
			if(numero<0)
			{
				sumaNegativa=sumaNegativa+numero;
				contadorNegativo=contadorNegativo+1;

			}
			else
			{
				contadorCero=contadorCero+1;
			}
		}
		if(numero % 2 == 0)//va a dar 0 como si fuera par, chequear
		{
			contadorPares=contadorPares+1;
		}
	}
	
	diferencia=sumaPositiva-sumaNegativa;
	promedioPositivo=sumaPositiva/contadorPositivo;
	promedioPositivo=parseInt(promedioPositivo);
	promedioNegativo=sumaPositiva-sumaNegativa/contadorNegativo;
	promedioNegativo=parseInt(promedioNegativo);
	
	document.write("Promedio de Positivos: " + promedioPositivo+"<br>"+	"Promedio de Negativos: " + promedioNegativo+"<br>"+"Contador Positivo: " + contadorPositivo+"<br>"+"Contador de Negativos: " + contadorNegativo+"<br>"+"Contador Cero: " + contadorCero+"<br>"+"Suma Negativa: " + sumaNegativa+"<br>"+"Suma Positiva: " + sumaPositiva+"<br>"+"Diferencia de Positivos y Negativos: " + diferencia+"<br>"+"Cantidad de numeros pares: " + contadorPares+"<br>")
}