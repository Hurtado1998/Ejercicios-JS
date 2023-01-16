//Ejercicios javascript

/*
Programa que calcule la suma de 2 numeros


let a;
let b;
let c;

a=1;
b=2;
c=a+b;
*/

let a,b,c;
a=1;b=2;c = a + b; 

//Ejercicios if

/*
IF con 1 condicion
Sintaxis:
if ( ) {
    /condicion
}

*/

if(1<5){
alert("El numero es menor que 5")
}

/*
IF con 2 condiciones
Sintaxis:
if(){
/condicon
}
else {
/condicion
}

*/

if(5<1){
alert("El numero es menor")
}
else {
    alert("El numero es mayor")
}

/*
IF-ELSE-IF

if(condicion){

}

else if(condicion){

}

else {

}

*/

let hora = prompt("Ingrese la hora");
if(hora>=6 && hora<=12){
    alert("Buenos dias")
}



let hora = prompt("Ingrese la hora");
if(hora>=6 && hora<=12){
    alert("Buenos dias")
} else if(hora>12 && hora<=18){
    Buenas tardes;
}
else {
    alert("Buenas noches")
}

/*
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




if(condicion){
    cuerpo if
}


if(condicion){
cuerpo if
}
else {
    cuerpo else
}


if(condicion){
    cuerpo if
}
else if(condicion){
    cuerpo if
} else {
    cuerpo else
}


*/