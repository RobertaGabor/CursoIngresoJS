function mostrar()
{	
	var numeroIngresado;
	var i;
	var contadorPares;

	contadorPares=0;
	numeroIngresado=prompt("Ingrese numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(i=2/*minimo divisor par*/;i<numeroIngresado;i=i+2)//i empieza de 2 porque si empieza de 1 y se agregan 2, cambia par e impar
	//i=1 con el i+1 cambia valor par, 1 y +2 es para impar porque 1 es el primer divisor impar. 
	{
		//if(i%2==0) ya se valida con el +2, si pongo 1 si necesito
		//{
			console.info("Par: "+i);
			contadorPares++;
		//}
	}
	
	console.info("Cantidad de pares: "+contadorPares);
}//FIN DE LA FUNCIÓN