// function expression
// function anonymous

//parâmetros (parameters)
/*const sum = function(number1, number2) {
    total = number1 + number2
    return total
}

//sum(2, 3) // arguments - argumentos

let number1 = 34
let number2 = 25
sum(number1, number2)

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)*/

// Função é um liquidificador

/*function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)*/

// function scope

/*let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)*/

// function hoisting

/*sayMyName();

function sayMyName() {
    console.log('Gustavo')
}*/

// arrow function

/*const sayMyName = (name) => {
    console.log('Gustavo')
}

sayMyName('Gustavo')*/

// callback function

/*function sayMyName(name) {
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)*/

/* Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword


function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}
const gustavo =  new Person("Gustavo")
const mayk = new Person("Mayk")
console.log(gustavo.walk())
console.log(mayk.walk())
*/


    