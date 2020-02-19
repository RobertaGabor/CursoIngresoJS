function mostrar()
{

	var numero; 
	var valorDeVerdad;
	numero=prompt("ingrese un número entre 0 y 10."); 
	numero=parseInt(numero);
	//valorDeVerdad=isNan(numero);//funcion todo lo que no es un numero
	//usar siempre isNaN siempre que pida solo numero o nombres.

	while(isNaN(numero) || numero<0||numero>9)//!isNan si no es un numero
	{
		numero = prompt("ingrese un número entre 0 y 10."); 
	}
	document.getElementById('Numero').value=numero;

}//FIN DE LA FUNCIÓN