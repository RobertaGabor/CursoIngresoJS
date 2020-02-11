function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);


	if(edad>17)//proceso
	{
		alert("Mayor");
	}

	else//no es un proceso
	{
		if(edad<13)//proceso, en vez de 3 if y 4 procesos, van con else y se ahorra
		{
			alert("Menor");
		}
		else
		{
			alert("Adolescente");
		}
	}	
}//que los puntos toquen la llave