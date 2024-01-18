// Escreva uma função que receba um número e retorne o seguinte:
// Número divisível por 3 = Fizz
// Número divisível por 5 = Buzz
// Número divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 e 5 = Retorna o própio número
// Checar se o número é um número
// Use a função com números de 0 a 100

const fizzBuzz = (num) => {
    if (typeof num !== "number") return NaN;
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}