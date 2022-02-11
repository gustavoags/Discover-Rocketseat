// Manipulando Strings e Números

// String em número e número em string
/*let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))*/

// Contar quantos caracteres tem uma palavra e quantos digitos tem um número
/*let word = "Paralelepípedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)*/

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
/*let number = 435.21548558
console.log(number.toFixed(2).replace(".", ","))*/

// Transforme letras minúsculas em maiúsculas. Faça o contrário disso também
/*let word = "Programar é muito bacana!"
console.log(word.toLowerCase().toUpperCase())*/

//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
/*let phrase = "Eu quero muito aprender programação."
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())*/

// Verificar se o texto contém a plavra Amor
/*let phrase = "Eu quero viver o amor!"
console.log(phrase.includes("amor"))*/

// Manipulando Arrays

// Criar Array com construtor
/*let myArray = new Array('a', 'b', 'c')
console.log(myArray)*/

// Transformar uma cadeia de caracteres em elementos de um array
/*let word = "manipulação"
console.log(Array.from(word))*/

//let techs = ["html", "css", "js"]

// adicionar um item no fim
//techs.push("nodejs")
//adicionar no começo
//techs.unshift("sql")
// remover do fim
//techs.pop()
// remover do começo
//techs.shift()
// pegar somente alguns elementos do array
//console.log(techs.slice(1, 3))
// remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 2)
// encontrar a posição de um elemento no array
/*let index = techs.indexOf('html')
techs.splice(index, 1)

console.log(index)*/