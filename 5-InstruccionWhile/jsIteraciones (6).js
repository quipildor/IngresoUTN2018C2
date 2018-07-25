function mostrar()
{

	var contador = 1;
	var acumulador = 0;
	var numero;
	var promedio;

	while (contador < 6)
	{
		numero = parseInt(prompt(" Ingrese un numero "));

		acumulador = acumulador + numero;

		contador = contador +1;
	}

promedio = acumulador / 5;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN