// Condicionais e controle de fluxo

// Controle de fluxo da aplicação
// If and Else

/*let temperature = 36.5

if( temperature >= 37) { 
    console.log('Febre')}
else {
    console.log('Saudável')
}
*/

/*let temperature = 36.9
let hightTemperature = temperature >= 37.5
let mediumTemperature = temperature >= 37.0 && temperature < 35.7

if(hightTemperature) {
    console.log('Febre alta')
}
else if(mediumTemperature) {
    console.log('Febre moderada')
}
else {
    console.log('Saudável')
}
*/

//---------------------------------------------------------------------------------

// Switch

/*let expression = 'a'

switch (expression) {
    case 'a':
        // código
        console.log('a')
        break
    case 'b':
        // código para expression b
        console.log('b')
        break
    default:
        console.log('default')
        break
}
*/

/*function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 /  number2
            break 
        case '%':
            result = number1 % number2
            break     
        default:
            console.log('Não implementado')            
    }

    return result
}

console.log(calculate(4, '%', 8))
*/

//--------------------------------------------------------------------------------

// Throw 

/*function sayMyName(name = '') {
    if (name === '') {
        throw "Nome é necessário"
    }

    console.log(name)
}
*/

// Try/Catch

/*try {
    sayMyName('Gustavo')

} catch(e) {
    console.log(e)

}

console.log('Após o Try/Catch')
*/