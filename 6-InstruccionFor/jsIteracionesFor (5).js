function mostrar()
{

 	var i;
 	var numero;
 	numero=prompt("ingrese numero");
 	numero=parseInt(numero);

 	for(i=0;numero!=9;)
 	{
 		if (numero==9)
 		{
 			break;
 		}
 		numero=prompt("ingrese numero");
 		numero=parseInt(numero);
 	}
}//FIN DE LA FUNCIÓN