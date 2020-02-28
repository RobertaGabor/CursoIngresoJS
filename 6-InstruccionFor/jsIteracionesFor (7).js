function mostrar()
{

	var numero;
	var i;
	var cantidadDivisores;

	numero=prompt("Ingrese numero");
	numero=parseInt(numero);
	cantidadDivisores=0;

	for(i=0;i<numero+1;i++)
	{
		if(numero%i==0)
		{
			console.info("Divisor: "+i);
			cantidadDivisores++;
	    }
	}
	console.info("Cantidad de divisores: "+ cantidadDivisores);
}//FIN DE LA FUNCIÓN