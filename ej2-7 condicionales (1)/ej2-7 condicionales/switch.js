let numero = parseInt(Math.random()*4);
// numero entre 7 y 19
let numero2 = parseInt(Math.random()*10)+21;// entre 21 y 30

switch(numero){
    case 0:
        console.log('Vale 0');
        break;
    case 1: 
        console.log('Vale 1');
        break;
    case 2:
        console.log('Vale 2');
        break;
    default:
        console.log('Otro');
        break;
}