console.log("Olá, JavaScript!");

var userName = "Nelson Mendes";

document.getElementById("user-name").innerHTML = userName;

// Variaveis //
// var nome = "Mestre Yoda";
// var idade = 100;
// var jedi = true;

// Operadores matematicos //

// somar +
// subtrair -
// multiplicar *
// / dividir

// var n1 = 5
// var n2 = 5

// var total = n1 + n2

// console.log("Total: " + total)

// Operadores de comparação //
// Igual (==)
// Retorna verdadeiro se os valores comparados forem iguais.
// 1=='1' //true

// Não igual (!=)
// Retorna verdadeiro se os valores comparados não forem iguais. Esse operador também pode ser chamado de diferente de.
// 4!=1 //true

// Igual estrito (===)
// Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais.
// 3==='3' //false
// 3===3 //true

// Não igual estrito (!==)
// Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes
// 3!=='3' //true
// 3!==3 //false
// 3!==4 //true

// Maior que (>)
// Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro
// 1>2 //false
// 5>3 //true
// 4>'1' //true

// Maior ou igual que (>=)
// Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro
// 1>=2 //false
// 5>=3 //true
// 4>='1' //true
// 2>=2 // true

// Menor que (<)
// Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro

// 1<2 //true
// 5<3 //false
// 4<'1' //false

// Menor ou igual que (<=)
// Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro

// 1<=2 //true
// 5<=3 //false
// 4<='1' //false
// 2<=2 // true

// function soma(n1, n2) {
//   console.log(n1 + n2);
// }
// soma(6,6)

// function boasVindas(nome){
//     alert(nome + ', seja bem vindo(a)!')
// }
// boasVindas("Nelson")

// function somar(n1, n2) {
//     return n1 + n2;
// }

// var resultado = somar(7,7)

// console.log(resultado)

// Controle de fluxos //

// Arrays //

// var personagens = ["Yoda", "Luke Skywalker", "Princesa Leia", "Darth Vader"];

// personagens.push("Han Solo");
// personagens.push("C3pO");
// personagens.push("R2D2");
// // personagens.pop()

// personagens = personagens.filter(function (p) {
//   return p !== "Darth Vader";
// });

// personagens = personagens.filter(function (p) {
//   return p === "Yoda";
// });

// console.log(personagens);


// Controles de repetição (loops) //

// var personagens = ["Yoda", "Luke Skywalker", "Princesa Leia", "Darth Vader"];

// personagens.forEach(function (p){
//     console.log(p)
// })


// for (var i in personagens) {
//     console.log(personagens[i])
// }

// for(var i = 0; i < personagens.length; i++){
//     console.log(personagens[i])
// }


// Objetos //

// var yoda = {}

// yoda.nome = 'Mestre Yoda'
// yoda.idade = 100
// yoda.jedi = true

// console.log(yoda)

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostrarIdade: function() {
//         console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
//     }
// }

// console.log(yoda)
// yoda.mostrarIdade()

// Constantes //
