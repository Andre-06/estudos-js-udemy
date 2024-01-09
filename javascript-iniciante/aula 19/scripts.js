let __init__ = "__init__";

function criarPessoa (nome, sobrenome, idade, peso, altura) {
    return {
        nome,
        sobrenome,
        idade,
        peso,
        altura,
        imc: () => (peso / (altura/100) ** 2).toFixed(2),
        anoDeNascimento: () => 2023 - idade,
        apresentacao() {
            console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade}, sou nascido em ${this.anoDeNascimento()}`)
        }
    };
}



function actionForm(){
    const pessoas = [];
    const form = document.querySelector(".form");

    form.addEventListener('submit', function (event){
        event.preventDefault();

        const pessoa = criarPessoa(
            form.querySelector(".name").value,
            form.querySelector(".last-name").value,
            form.querySelector(".age").value,
            form.querySelector(".weight").value,
            form.querySelector(".height").value,
        );

        if (pessoas.push(pessoa) === 1){
            const section = document.querySelector(".section-form");
            section.style.gridTemplateColumns = "1fr 1fr";
        }

        const listaPessoas = document.querySelector(".pessoas-div");
        listaPessoas.innerHTML += `
            <p>
                ${pessoa.nome} ${pessoa.sobrenome}: ${pessoa.idade} anos ${pessoa.imc()} IMC
            </p>
        `;
    });

    console.log(pessoas);

}

if (__init__ === "__init__"){
    actionForm();
}