function fibonacci(n) {
    let fib = [0, 1];
    while (fib.length <= n) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
}

function verificaFibonacci(num) {
    const fib = fibonacci(100);  // Calcula os primeiros 100 números
    if (fib.includes(num)) {
        console.log(`O número ${num} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
    }
}

// Teste com um número
verificaFibonacci(13);  // Você pode testar com outros números