const number = Number(prompt('Digite um numero'));

document.getElementById('your-number').innerHTML += `Seu número é ${number}`;
const listNumber = document.getElementById('your-number-are');

listNumber.innerHTML += `<li> Raiz quadrada: <strong>${number ** 0.5}</strong> </li>`;
listNumber.innerHTML += `<li> ${number} é inteiro? <strong>${Number.isInteger(number)}</strong>  </li>`;
listNumber.innerHTML += `<li> É NaN: <strong>${Number.isNaN(number)}</strong> </li>`;
listNumber.innerHTML += `<li> Arredondado para baixo: <strong>${Math.floor(number)}</strong> </li>`;
listNumber.innerHTML += `<li> Arredondado para cima: <strong>${Math.ceil(number)}</strong> </li>`;
listNumber.innerHTML += `<li> Com duas casas decimais: <strong>${number.toFixed(2)}</strong> </li>`;