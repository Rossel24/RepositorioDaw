let numero1= prompt("ingresa el primer numero");
let numero2= prompt("ingrese el segundo numero");

numero1= parseInt(numero1);
numero2= parseInt(numero2);

!isNaN(numero1 || numero2)
alert(" ingrese solo numeros")
if (numero1 === numero2) {
    alert ("los numeros son iguales");
} else if(numero1 > numero2){
    alert (" el numero 1 es mayor que numero 2");
}else{
    alert(" el numero 2 es mayor que el numero 1");
}

let x = 0;
for(let i = 0; i <= 10; i++) {
    x += i++;
}
console.log(x);


/*
isNaN(numero1 || numero2)

alert ("ingrese solo numeros")

? alert(" ingrese solo numeros")
: numero1 === numero2

alert(" los numeros son iguales")

: numero1 > numero2
? alert("El número 1 es mayor que el número 2.") 
: alert("El número 2 es mayor que el número 1.");

*/