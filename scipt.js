// function soma(a, b) {
//    return a + b;
//   }
  
//   console.log(soma(2,3)); // 3
//   console.log(soma); 

//   lista = [1,2,3,5,6]
//   console.log(lista)

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function somar(item) {
    total += item; 
}

numeros.forEach(somar);
console.log(total);
