function fibonacciCreate(n) {
    const sequenceFibonacci = [0, 1];
    while (sequenceFibonacci[sequenceFibonacci.length - 1] < n) {
        sequenceFibonacci.push(sequenceFibonacci[sequenceFibonacci.length - 1] + sequenceFibonacci[sequenceFibonacci.length - 2]);
    }

    document.querySelector('.sequenceFibo').innerHTML = `A sequência desse número séria assim: ${sequenceFibonacci}`
    console.log(sequenceFibonacci)
    return sequenceFibonacci;
}

function fibonacciVerify(number) {
    const sequenceFibonacci = fibonacciCreate(number);
    if (sequenceFibonacci.includes(number)) {
        let correctFibo = document.querySelector('.verifyFibo').innerHTML = `${number} pertence à sequência de Fibonacci.`
        return correctFibo;
    } else {
        let incorretFibo = document.querySelector('.verifyFibo').innerHTML = `${number} não pertence à sequência de Fibonacci.`;
        return incorretFibo;
    }
}

export function checkFibonacci() {
    document.getElementById('btnNumber').addEventListener('click', (e) => {
        e.preventDefault()
        let inputNumber = document.getElementById('inputNumber').value
        inputNumber = parseInt(inputNumber)
        console.log(inputNumber)
        console.log(fibonacciVerify(inputNumber));
    })
    
}


