function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var respuesta;
	var temperaturasPares;
	var maximo;
	var i;
	var marcaMaximo;
	var contadorPeso;
	var acumuladorPeso;
	var productoBajoCero;

	contadorPeso=0;
	productoBajoCero=0;
	acumuladorPeso=0;
	respuesta='si';
	temperaturasPares=0;
	i=0;

	while(respuesta!='no')
	{
		marca=prompt("Ingrese la marca");
		peso=prompt("Ingrese el peso del producto");
		peso=parseInt(peso);

		while(isNaN(peso)||peso<1||peso>100)
		{
			peso=prompt("Ingrese el peso del producto");
			peso=parseInt(peso);			
		}

		temperatura=prompt("Ingrese la temperatura numerica","Ej: 30")
		temperatura=parseInt(temperatura);

		while(isNaN(temperatura)||temperatura<-30||temperatura>30)
		{
			temperatura=prompt("Ingrese la temperatura numerica","Ej: 30")
			temperatura=parseInt(temperatura);			
		}

		acumuladorPeso=acumuladorPeso+peso;
		contadorPeso++//DW

		if(temperatura%2==0)
		{
			temperaturasPares++;//DW
		}

		if(i==0)
		{
			minimo=peso
			maximo=peso;
			marcaMaximo=marca;
		}
		else
		{
			if(peso>maximo)
			{
				maximo=peso;//DW
				marcaMaximo=marca;//DW
			}
			else
			{
				if(peso<minimo)
				{
					minimo=peso;//DW
				}
			}
		}
		if(temperatura<0)
		{
			productoBajoCero++;//DW
		}
		
		i++;
		respuesta=prompt("Ingrese no para finalizar, sino continuará","Ej: no");
	}
	document.write("Cantidad de temperaturas pares: "+temperaturasPares+"<br>"+"Marca del producto mas pesado: "+marcaMaximo+"<br>"+"Cantidad de productos bajo cero: "+productoBajoCero+"<br>"+"Promedio de peso de todos los productos: "+(acumuladorPeso/contadorPeso)+"<br>"+"Peso maximo: "+maximo+"<br>"+"Peso minimo: "+minimo+"<br>");
}//dw en minuscula
