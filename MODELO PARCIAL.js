/*
b)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en
una sola reserva.

la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva
*/
function mostrar()
{
	var nombreHuesped;
	var cantidadDePersonas;
	var cantidadDeDias;
	var formaDePago;
	var respuesta;
	var maximoDePersonas;
	var maximoDePersonasNombre;
	var contador;
	var acumulador;
	var promedio;
	var maximoDeDias;
	var maximoDeDiasCantidadPersonas;
	var contadorQr;
	var contadorTarjeta;
	var contadorEfectivo;
	var formaDePagoMasUtilizada;

	respuesta="si";
	contador=0;
	acumulador=0;
	contadorTarjeta=0;
	contadorQr=0;
	contadorEfectivo=0;

	while(respuesta=="si")
	{
		nombreHuesped=prompt("Ingrese nombre");//va en el while asi solo lo pide si pones si
		while(!isNaN(nombreHuesped))
		{
			nombreHuesped=prompt("Ingrese nombre");//va en el while asi solo lo pide si pones si
		}
		console.log("nombre: "+nombreHuesped);
		
		cantidadDePersonas=prompt("Ingrese cantidad de personas");
		cantidadDePersonas=parseInt(cantidadDePersonas);
		while(isNaN(cantidadDePersonas)||cantidadDePersonas<1)
		{
			cantidadDePersonas=prompt("Ingrese cantidad de personas");
			cantidadDePersonas=parseInt(cantidadDePersonas);

		}
		console.log("cantidad de personas: "+cantidadDePersonas);//
		
		cantidadDeDias=prompt("Ingrese cantidad de días");//primero asigno y despues while, y cada bloque por variable
		cantidadDeDias=parseInt(cantidadDeDias);
		while(isNaN(cantidadDeDias)||cantidadDeDias<0)
		{
			cantidadDeDias=prompt("Ingrese cantidad de días");
			cantidadDeDias=parseInt(cantidadDeDias);
		}
		console.log("cantidad de dias:" +cantidadDeDias);//

		formaDePago=prompt("Ingrese forma de pago","Qr, Efectivo, Tarjeta");
		while(!isNaN(formaDePago)||formaDePago!="Qr"&&formaDePago!="Efectivo"&&formaDePago!="Tarjeta")// si es numero o no es todos esos medios de pago
		{
			formaDePago=prompt("Ingrese forma de pago","Ej: Qr, Efectivo, Tarjeta de credito, Tarjeta de debito");
		}
		console.log("forma de pago: "+formaDePago);//

		if(contador==0||maximoDePersonas<cantidadDePersonas)
		{
			maximoDePersonas=cantidadDePersonas;
			maximoDePersonasNombre=nombreHuesped;
		}
		/*else
		{
			if(maximoDePersonas<cantidadDePersonas)
			{
				maximoDePersonas=cantidadDePersonas;
				maximoDePersonasNombre=nombreHuesped;
			}
			else
			{

			}
		}*/
		
		if(contador==0||maximoDeDias<cantidadDeDias)
		{
			maximoDeDias=cantidadDeDias;
			maximoDeDiasCantidadPersonas=cantidadDePersonas;
		}

		switch(formaDePago)
		{
			case "Efectivo":
				contadorEfectivo++;//separar de los cases
				break;
			case "Qr":
				contadorQr++;
				break;
			default:
				contadorTarjeta++;
				break;
		}

		acumulador=acumulador+cantidadDeDias;
		contador++,
		respuesta=prompt("Desea continuar","Ej: si");
	}
	if(contadorEfectivo>contadorTarjeta&&contadorEfectivo>contadorQr)
	{
		formaDePagoMasUtilizada="Efectivo";
	}
	else
	{
		if(contadorQr>contadorTarjeta/*&&contadorQr>contadorEfectivo ya lo pregunta antes*/)
		{
			formaDePagoMasUtilizada="Qr";
		}
		else
		{
			formaDePagoMasUtilizada="Tarjeta";//ya preguntaste antes si las otras son mayores 
		}//sino pide que no sean iguales no hacer if si son iguales
	}

	promedio=acumulador/contador;
	console.log("maximo personas nombre: "+maximoDePersonasNombre);//va despues de while asi toma hasta la ultima validacion
	console.log("cantidad de personas mas dias: "+maximoDeDiasCantidadPersonas);
	console.log("forma de pago mas usada: "+formaDePagoMasUtilizada);
	console.log("promedio: "+promedio)

	/*EN PARCIAL MOSTRAR CON DOCUMENT WRITE*/

	document.write("<br> nombre del huesped con mas invitado: "+maximoDePersonasNombre);
	document.write("<br> cantidad de huespuedes: "+maximoDePersonas);
	document.write("<br> forma de pago mas usada: "+formaDePagoMasUtilizada);
	document.write("<br> promedio: "+promedio);
}
