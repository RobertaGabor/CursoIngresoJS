function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(!(edad<17&&edad>12))//if(edad>17||edad<12)
	{
		alert("No adolescente");
  	}
  	
}//FIN DE LA FUNCIÓN