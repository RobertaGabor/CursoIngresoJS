function mostrar()
{

	var sexo; 
	sexo = prompt("ingrese f ó m .");//siempre que pida la negacion de un y/o hacer el otro.

	while(sexo!="f"&&sexo!="m")//si se niega algo incalculable de una forma ordenada ver diferencias de procesamientos en negacion.
	{
		sexo = prompt("ingrese f ó m .");
	}

	document.getElementById('Sexo').value=sexo;
}//FIN DE LA FUNCIÓN