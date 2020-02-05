/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultadoDeSuma;//el resultado es un valor aparte

	numeroUno=document.getElementById('numeroUno').value;
	numeroUno=parseInt(numeroUno);//si saco el parseint los une como concatenaciones: 2+3=23
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);

	resultadoDeSuma=numeroUno+numeroDos;//la suma de dos parseint da una suma real matematica

	alert(resultadoDeSuma);



	





}

