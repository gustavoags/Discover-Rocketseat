// Consolidando com exercícios

// Sistemas de notas escolares

/*
function getScore (score) {
let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score <= 89
let scoreC = score >= 70 && score <= 79
let scoreD = score >= 60 && score <= 69
let scoreF = score >= 50 && score <= 59

let scoreFinal;

if (scoreA) {
    scoreFinal = "A"
} else if (scoreB) {
    scoreFinal = "B"
} else if (scoreC) {
    scoreFinal = "C"
} else if (scoreD) {
    scoreFinal = "D"
} else if (scoreF) {
    scoreFinal = "F"
} else {
    scoreFinal ="Boa sorte na recuperação!"
}

return scoreFinal
}

console.log(getScore(60))
*/

//--------------------------------------------------------------------------------------------

// Fluxo de caixa familiar
/*
let familiarExpenses = {
    incomes: [4000, 3000, 1400],
    expenses: [3200, 1100, 450]
}

function sum (array) {
    let total = 0;
    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(familiarExpenses.incomes)
    const calculateExpenses = sum(familiarExpenses.expenses)

    const total = calculateIncomes - calculateExpenses
    const itsPositive = total >=0
    const itsNegative = total < 0

    let balanceText = "negativo!"
    if(itsPositive) {
        balanceText = "positivo!"
    } else {
        balanceText = "negativo"
    }

    console.log(`Seu saldo é ${balanceText} : ${total}`)
}

calculateBalance()
*/

//-----------------------------------------------------------------------------------------------

// Celsius to Fahrenheit
/*
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error("Grau não identificado")
    }

    // Fluxo ideal, F para C

    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    if(celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) => (celsius * 9/5 + 32)
        degreeSign = 'F'
    }  

    return formula(updateDegree) + degreeSign
}

try {
    console.log(transformDegree('100C'))
    //transformDegree('50Z')
} catch(error) {
    console.log(error.message)
}
*/

//----------------------------------------------------------------------------------


// Buscando e encontrando dados de um Array

/*
const booksByCategory = [
    { 
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Classon",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },

        ],
    },
    { 
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title : "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },

        ],
    },
];

const totalCategory = booksByCategory.length

//console.log(totalCategories)
for(let category of booksByCategory) {
    console.log('Total de livors da categoria: ', category.category)
    console.log(category.books.length)   
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books){
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}: ${books.join(', ')}`)
}

booksOfAuthor('George S. Classon')
*/