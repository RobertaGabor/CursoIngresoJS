function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("Mayor");

	}
	else//sin logica
	{
		alert("Menor");
	}
}//FIN DE LA FUNCIÓN