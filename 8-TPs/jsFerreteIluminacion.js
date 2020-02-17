function CalcularPrecio () 
{
	var cantidadLamparas;
	var marcaLamparas;
	var precioBruto;
	var porcentaje;
	var precioConDescuento;
	var iibb;
	var precioConIibb;

	cantidadLamparas=document.getElementById('Cantidad').value;
	cantidadLamparas=parseInt(cantidadLamparas);

	marcaLamparas=document.getElementById('Marca').value;

	precioBruto=cantidadLamparas*35;
	precioBruto=parseInt(precioBruto);

	porcentaje=0;

	if(cantidadLamparas>5)
	{
		porcentaje=50;//va un solo igual para definir variable
	}
	else
	{
		if(cantidadLamparas==5)
		{
			if(marcaLamparas=="ArgentinaLuz")
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
				if(marcaLamparas=="ArgentinaLuz"||marcaLamparas=="FelipeLamparas")
				{
					porcentaje=25;
				}
				else
				{
					porcentaje=20;
				}
			}
			else
			{
				if(cantidadLamparas==3)
				{
					if(marcaLamparas=="ArgentinaLuz")
					{
						porcentaje=15;
					}
					else
					{
						if(marcaLamparas="FelipeLamparas")
						{
							porcentaje=10;
						}
						else
						{
							porcentaje=5;
						}
					}
				}
			}
		}
	}
	
	precioConDescuento=precioBruto-precioBruto*porcentaje/100;
	precioConDescuento=parseInt(precioConDescuento);

	if(precioConDescuento>120)
	{
		iibb=10;
		alert("IIBB Usted pago " +precioConDescuento*iibb/100);//se parsea?
	}
	else
	{
		iibb=0;
	}

	precioConIibb=precioConDescuento+precioConDescuento*iibb/100;
	precioConIibb=parseInt(precioConIibb);

	document.getElementById('precioDescuento').value=precioConIibb;
}	
