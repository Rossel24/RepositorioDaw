const A = 6,
    B = 4;

var operator;// declaramos como variable var sin inicializar para poder utilizarla de forma global dentro de la funcion
chooseOperator();
//operate(operator); si lo ponemos asi al poner otra letra distinta all operador, por eso le metemos la funcion operate dentro de chooseOperator



function chooseOperator() {
    console.log('Eligiendo operador...');
   // let operator = prompt('Indica la operación deseada escribiendo + , -, * o /', '+');
   operator = prompt('Indica la operación deseada escribiendo + , -, * o /', '+');
    console.log('La operación es ' + operator);
    operate(operator);

}


function operate(operator) {
    console.log('Operando...');
    switch (operator) {
        case '+':
            result = A + B;
            console.log('La suma es: ' + result);
            break;
        case '-':
            result = A - B;
            console.log('La diferencia es: ' + result);
            break;
        case '*':
            result = A * B;
            console.log('El producto es: ' + result);
            break;
        case '/':
            result = A / B;
            console.log('El cociente es: ' + result);
            break;
        default:
            chooseOperator();
    }
}



