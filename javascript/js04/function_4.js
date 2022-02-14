// Expressões e Operadores

/* New

    * left-hand-side expression
    * criar um novo objeto
*/

/*let date = new Date('2022-02-11')
console.log(date.__proto__)*/

//---------------------------------

// Typeof delete
/*
    Operadores unários
    typeof
    delete
*/
/*const person = {
    name: 'Gustavo',
    age: 23,
}
delete person.age  

console.log(person)*/

//--------------------------

// Operadores Aritiméticos

// Multiplicação *
//console.log(3.2 * 5)

// Divisão /
//console.log(12/2)

// Soma +
//console.log(5+6)

// Subtração -
//console.log(8-2)

// Resto de divisão %
//let reminder
//reminder = 11 % 3
//console.log(reminder)

// Incremento + +
//let increment  = 0
//increment++
//console.log(increment)

// Decremento --
//let decrement = 5
//decrement--
//console.log(decrement)

// Exponencial **
//console.log(3 ** 2)

//-----------------------

// Grouping operator ( )

//let total = 2 + 5 * 5
//console.log(total)

//let total = (2 + 5) * 5
//console.log(total)

//------------------------------------------------------------------------

// Operadores de comparação

// Irá comparar valores e retornar um Boolean como resposta à comparação

//let one = 1
//let two = 2

// == igual a
//console.log( two == 1 ) false
//console.log( one == "1" ) true

// !=  diferente de
//console.log(one != two)
//console.log(one != 1)
//console.log(one != "1")

//-------------------------------------------------------------------------------

// Operadores de comparação estritamente

//let one = 1
//let two = 2

// === estritamente igual a
//console.log( one === "1" ) false
//console.log( one === 1 ) true

// !== estritamente diferente de (valor, tipo)
//console.log( two !== "2") true
//console.log( two !== 2) false

//---------------------------------------------------------------------------------

// Operadores de comparação maior e menor(igual)
 
//let one = 1
//let two = 2

// > Maior que
//console.log( one > two) false

// >= Maior igual a
//console.log( one >= 1) true

// < Menor que
//console.log( one < two) true

// <= Menor igual a
//console.log( one <= two ) true
//console.log ( one <= 1 ) true
//console.log( one <= 0 ) false

//-----------------------------------------------------------------------------------

// Operadores de atribuição (Assigment)
//let x
//x = 2

// assigment
//x = 1
//console.log(x)

// addition assigment ----> x= x + 2
//x += 2
//console.log(x)

// subtraction assigment ----> x = x - 1
//x -= 1
//console.log(x)

// multiplication assigment ---> x = x * 3
//x *= 3
//console.log(x)

// division assigment ---> x = x / 2
//x /= 2
//console.log(x)

// remainder, exponencial (resto , exponencial)
//x %= 2
//x **= 3
//console.log(x)

//-----------------------------------------------------------------------------------

// Operadores lógicos (logical operators)

// - 2 valores booleanos, quando verificados,
// resultará em verdadeiro ou falso

//let pao = true
//let queijo = false

// AND &&
// console.log(pao && queijo) false
// Caso se algum dos dois forem false sempre será false

//OR || 
//console.log(pao || queijo) true
// Se não possuísse ambos seria false

// NOT !
//console.log(!pao) 
//console.log(!queijo)
// trocará o valor: se era false vai ser true, se era true vai ser false

//-----------------------------------------------------------------------------------

// Operador condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2
// '?' = então, ':' = se não

// Exemplos
// Café da Manhã top
//let pao = true
//let queijo = false

//const niceBreakfast = pao || queijo ? 'Café Top ' : 'Café Ruim' ---------> Café Top

//console.log(niceBreakfast)

// Maior de 18

//let age = 16
//const canDrive = age >= 18 ? 'Can Drive' : "'Can't Drive"
//console.log(canDrive)

//-----------------------------------------------------------------------------------

// Operadores para String

// comparison (comparação)
//console.log('a' == 'a')

// concatenation (concatenação)
// Retorna a união de duas Strings
//let alpha = 'alpha'
//console.log(alpha + 'bet' + 's')------> ou
//console.log ( alpha += 'bets')

//-----------------------------------------------------------------------------------

// Falsy e Truthy

// Falsy
/* Quando um valor é considerado false em contextos onde um booleano é obrigatório ( condicionais e loops)

false
0
-0
""
null
undefined
NaN
*/

//console.log( 0 ? 'Verdadeiro' : 'Falso')

// Truthy
/* Quando um valor é considerado true em contextos onde um booleano é obrigatório ( condicionais e loops)

true
{}
[]
1
3.23
"0"
"false"
-1
Infinity
-Infinity
*/

// console.log( {} ? 'Verdadeiro' : 'Falso')

//-------------------------------------------------------------------------------

// Precedência dos operadores

// grouping                                        ( )
// negação e incremento                            ! ++ --
// multiplicação e divisão                         * /
// adição e subtração                              + -
// relacional                                      < <= > >=
// igualdade                                       == != === !==
// AND                                             &&
// OR                                              ||
// condicional                                     ? :
// assigment (atribuição)                          = += -= *=

//---------------------------------------------------------------------------------