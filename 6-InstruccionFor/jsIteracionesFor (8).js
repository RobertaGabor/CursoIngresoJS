function mostrar()
{
	var numeroIngresado;//dividendo
	var i;//divisor
	var contador;

	contador=0;
	numeroIngresado=prompt("Ingrese numeroIngresado");
	numeroIngresado=parseInt(numeroIngresado);

	for(i=2;i<numeroIngresado;i++)//2 primer divisible xq 1 es divisible de los primos. y menor al numero (ej:15) sin tocar el 15 que es divisible x si mismo
	{
		console.log(i);
		if(numeroIngresado%i==0)
		{
			contador=1;
			break;//cuando encuentra un divisor sale
		}
	}
	if(contador==0)//si contador nunca cambio en if(no entró) significa que se pudo dividir
	{
		alert("es primo el numero: " +numeroIngresado);
	}
		


}//FIN DE LA FUNCIÓN