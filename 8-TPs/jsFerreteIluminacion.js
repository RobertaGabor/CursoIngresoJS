function CalcularPrecio () 
{
	var cantidadLamparas;
	var marcaLampara;
	var precioBruto
	var porcentaje;
	var precioFinal;
	var precioConIIBB;

	cantidadLamparas=document.getElementById('Cantidad').value;
	cantidadLamparas=parseInt(cantidadLamparas);

	precioBruto=cantidadLamparas*35;
	precioBruto=parseInt(precioNeto);

	marcaLampara=document.getElementById('Marca').value;

	porcentaje=0;
	
	if(cantidadLamparas>5)
	{
		porcentaje=50;
	}
	else
	{
		if(cantidadLamparas==5)
		{	

			if(marcaLampara="ArgentinaLuz")
			{
				porcentaje=40;
			}
			else
			{
				porcentaje=30;
			}
		}
		else
		{
			if(cantidadLamparas==4)
			{
				if(marcaLampara="ArgentinaLuz"||marcaLampara="FelipeLamparas")
				{
					porcentaje=25;
				}
				else
				{
					porcentaje=20
				}
			}
			else
			{
				if(cantidadLamparas==3)
				{
					if(marcaLampara="ArgentinaLuz")
					{
						porcentaje=15;
					}
					else
					{
						if(marcaLampara="FelipeLamparas")
						{
							porcentaje=10
						}
						else
						{
							porcentaje=5
						}
					}
				}
				//else//podes poner descuento =0 o ponerlo arriba	
			}
		}
	}
	
	precioFinal=precioBruto-precioBruto*porcentaje/100;
	precioFinal=parseInt(precioFinal);
	
	if(precioFinal>120)
	{
		porcentaje=10;	
	}
	
	precioConIIBB=precioFinal+precioFinal*porcentaje/100;
	precioConIIBB=parseInt(precioConIIBB);

	document.getElementById('precioDescuento').value=precioConIIBB;	
}
