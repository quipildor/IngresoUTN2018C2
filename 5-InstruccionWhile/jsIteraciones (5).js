function mostrar()
{

var sexo = prompt("ingrese f ó m .");
   sexo.toLowerCase("f" "m");

while (sexo != "m" && sexo != "f")
{
    sexo = prompt("Error, ingrese f ó m .");
     sexo.toLowerCase();
}
    
document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN