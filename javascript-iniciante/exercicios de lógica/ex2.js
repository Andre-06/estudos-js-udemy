// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (número).
// Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (width, height) => width >= height;

console.log(ePaisagem(16, 9));
console.log(ePaisagem(3, 4));