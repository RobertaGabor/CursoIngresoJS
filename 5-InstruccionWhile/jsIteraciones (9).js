function mostrar()
{

	var contador;
	var maximo;//no se inicializan
	var minimo;
	var numeroIngresado;
	var respuesta

	respuesta='si';
	contador=0; 

	while(respuesta!='no')
	{
		contador=contador+1
		numeroIngresado=prompt("Ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		respuesta=prompt("Ingrese no para finalizar, sino continuará");

		if(contador==1)//la primera ves el numero es maximo y minimo
		{
			maximo=numeroIngresado;
			minimo=numeroIngresado;
		}
		else
		{
			if(numeroIngresado>maximo)
			{
				maximo=numeroIngresado;
			}
			else
			{
				if(numeroIngresado<minimo)//maximo y minimo se evalua por separado
				{
					minimo=numeroIngresado;
				}
			}
		}
	}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
}//FIN DE LA FUNCIÓN