function mostrar()
{
//tomo la edad  
var edad

edad = document.getElementById("edad").value;

if (edad <13) 
{
alert("Usted es niño")
}
else if (edad >=13 && edad<=17)
{
alert("Usted es adolescente")
}
else 
{
alert("Usted es adulto")
}

}//FIN DE LA FUNCIÓN