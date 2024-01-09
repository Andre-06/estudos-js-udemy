let num1 = 50;

console.log(num1 ** 0.5);

let num2 = 1;
num2 **= 6;
console.log(num2++);
console.log(num2);

num2 += num1;
console.log(num2**2);

const string = 'Lorem ipsum dolor et si um not'
    .split("")
    .map(parseInt)
    .filter(a => a);

console.log(string);

let a = 'A';
let b = 'B';
let c = 'C';

const temp = a;

a = b; // a = B

b = c; // b = C

c = temp; // c = B

console.log(a, b, c);

num1 = 0.7;
num2 = 0.1;

console.log((num1 + num2).toFixed(1));

const numbers = [1, 2, 3, 4];
console.log(numbers.slice(2, 1));
12.
console.log()

function fib(n = 1){
    n = Number(n);
    if (n <= 2){
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

function fac(n = 1){
    n = Number(n);
    if (n <= 1 ){
        return 1;
    } else {
        return n * fac(n - 1);
    }
}

console.log(fac(0));

const sqrt = (n) => n ** 0.5;

console.log(sqrt(81));

function criarPessoa (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        anoDeNascimento: () => 2023 - idade,
        apresentacao() {
            console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade}, sou nascido em ${this.anoDeNascimento()}`)
        }
    };
}

const pessoa1 = criarPessoa('André', 'Araújo Silva', 17);
pessoa1.apresentacao();
