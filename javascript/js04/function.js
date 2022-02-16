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