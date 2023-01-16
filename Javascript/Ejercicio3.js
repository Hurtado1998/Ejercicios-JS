/* Ejercicios javascript #3
Programa que ingresa la hora y devuelve un saludo segun sea la hora del dia
Ejemplo: "Buenas noches" a partir de cierto horario
Nota: La edad la recibe como String
*/

let hora = prompt("Ingrese la hora ");
if(hora>=6 && hora<=12){
    alert("Buenos dias")
}
else if(hora>12 && hora<=18){
    alert("Buenas tardes")
}
else {
    alert("Buenas noches")
}
