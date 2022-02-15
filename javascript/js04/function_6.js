// Estruturas de repetição

// For (inicialização de uma variável; condição de cotinuação para o loop; expressão final)
// break -> para a execução do loop
// continue -> pula a execução do momento

/*for(let i = 10; i > 0; i--) {
    if(i === 5) {
        continue;
    }

    console.log(i)
}
*/

// While

/*let i = 500;
while(i > 10) {
    console.log(i)

    i /= 5;
}
*/

// For of

/*let name = 'Gustavo'
let names = ['Lucas', 'Guilherme', 'Bruno']

for(let name of names) {
    console.log(name)
}
*/

// For in

/*let person = {
    name: 'Gustavo',
    age: 22,
    weight: 74.5
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}
*/