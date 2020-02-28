/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares ()
{  
 	var numeroPar;
 	var i;
 	
 	numeroPar=document.getElementById('numero').value;
 	numeroPar=parseInt(numeroPar);

 	for(i=-1;numeroPar>i;numeroPar--)
 	{
 		if(numeroPar%2==0)
 		{
 			console.info("Numero par: "+numeroPar);
 		}
 	}
}
function NumerosImpares ()
{
	var numeroImpar;
 	var i;
 	
 	numeroImpar=document.getElementById('numero').value;
 	numeroImpar=parseInt(numeroImpar);

 	for(i=-1;numeroImpar>i;numeroImpar--)
 	{
 		if(numeroImpar%2!=0)//me toma 0 como numero par
 		{
 			console.info("Numero impar: "+numeroImpar);
 		}
 	}
}
function NumerosDivisibles ()
{
	var numeroDivisible;
	var i;
	
	numeroDivisible=document.getElementById('numero').value;
 	numeroDivisible=parseInt(numeroDivisible);

 	for(i=1;i<101;i++)
 	{
 		if(i%numeroDivisible==0)
 		{
 			console.info("El numero: "+i+" es divisible por "+numeroDivisible);
 		}	
 	}
}
function VerificarPrimo ()
{
	var numeroIngresado
	var i;
	var bandera;
	
	numeroIngresado=document.getElementById('numero').value;
 	numeroIngresado=parseInt(numeroIngresado);
 	bandera=0;

 	for(i=2;numeroIngresado>i;i++)
 	{
 		if(numeroIngresado%i==0)
 		{
 			bandera=1;
 			break;
 		}
 	}
 	if(bandera==0)
 	{
 		console.info("El numero: "+numeroIngresado+" es primo");
 	}
 	else
 	{
 		console.info("El numero: "+numeroIngresado+" no es primo");		
 	}
}
function NumerosPrimos ()
{
	var numeroIngresado;
	var i;
	var contador;
	var bandera;
	
	numeroIngresado=document.getElementById('numero').value;
 	numeroIngresado=parseInt(numeroIngresado);

 	for(i=0;numeroIngresado>i;numeroIngresado--)
 	{
 		bandera=0;//se reinicia con un numero nueva cada vez (de los de adentro)
 		for(contador=numeroIngresado-1;contador>1;contador--)//SE DIVIDE EL NUMERO POR LOS ANTERIORES
 		{
 			if(numeroIngresado%contador==0)
 			{
 				bandera=1;
 				break;
 			}
 		}
 		if(bandera==0)
 		{
 			console.info("El numero: "+numeroIngresado+" es primo");
 		}	
 	}
}