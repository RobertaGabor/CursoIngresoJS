function mostrar()
{
	/*var contador;
	contador=0;

	//while(contador>10)//primero evalua despues ejecuta
	do//entra minimo 1 vez aunque la logica este mal
	{
		contador=contador+1;//se puede poner como contador ++;
		console.log(contador);
	}
	while(contador<10); //VA CON PUNTO Y COMA
	//HACE QUE EL PRIMER PROMPT NO SE NECESITE*/

	var i//iteracion, indice, contador --> incrementa desde 0

	for(i=1/*variable*/;i<11/*logica*/;i++/*modificacion*/)
	{
		document.write("for: "+i+" <br>");//el br adentro hace que sea lineal para abajo
	}//asi te muestra de 0 a 9 si i:1 y i<10.

}