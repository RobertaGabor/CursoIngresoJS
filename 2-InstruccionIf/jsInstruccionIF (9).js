function mostrar() 
{
	var random;

	random=Math.floor(Math.random() * 10) + 1;//random es de 0 a 1 (0,999) multiplicado por 10 o 100 etc es de 0 a 10(9,999) y ese 1 agarra al 10 y al 0 conevrtido en 1 (1 a 10)
	random=parseInt(random);
	
	console.log(random);
}//FIN DE LA FUNCIÓN