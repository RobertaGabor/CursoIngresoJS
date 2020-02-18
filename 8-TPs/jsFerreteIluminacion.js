function CalcularPrecio () 
{
	var cantidadLamparas;
	var marcaLampara;
	var precioBruto;
	var descuento;
	var precioConDescuento;
	var iibb;
	var precioConIibb;

	cantidadLamparas=document.getElementById('Cantidad').value;
	cantidadLamparas=parseInt(cantidadLamparas);

	marcaLampara=document.getElementById('Marca').value;

	precioBruto=cantidadLamparas*35;
	console.info("Este es bruto",precioBruto);

	descuento=0;
	switch(cantidadLamparas)
	{
		case 5:
		switch(marcaLampara)
		{
			case "ArgentinaLuz":
			descuento=40;
			break;
			default:
			descuento=30;
		}
		break;
		case 4:
		switch(marcaLampara)
		{
			case "ArgentinaLuz":
			case "FelipeLamparas":
			descuento=25;
			break;
			default:
			descuento=20;
		}
		break;
		switch(marcaLampara)
		{
			case "ArgentinaLuz":
			descuento=15;
			break;
			case "FelipeLamparas":
			descuento=10;
			break;
			default:
			descuento=5;
		}
		break;
		case 1:
		case 2:
		descuento=0;
		break;
		default:
		descuento=50;
		break;
	}

	/*if(cantidadLamparas>5)
	{
		descuento=50;
	}
	else
	{
		if(cantidadLamparas==5)
		{
			if(marcaLampara=="ArgentinaLuz")
			{
				descuento=40;
			}
			else
			{
				descuento=30;
			}
		}
		else
		{
			if(cantidadLamparas==4)
			{
				if(marcaLampara=="ArgentinaLuz"||marcaLampara=="FelipeLamparas")
				{
					descuento=25;
				}
				else
				{
					descuento=20;
				}
			}
			else
			{
				if(cantidadLamparas==3)
				{
					if(marcaLampara=="ArgentinaLuz")
					{
						descuento=15;
					}
					else
					{
						if(marcaLampara=="FelipeLamparas")
						{
							descuento=10;
						}
						else
						{
							descuento=5;
						}
					}
				}
			}
		}
	}*/


	precioConDescuento=precioBruto-precioBruto*descuento/100;
	console.info("Este es con descuento",precioConDescuento);
	
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
