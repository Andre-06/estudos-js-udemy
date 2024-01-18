function imcClassification(imcValue){
    if (imcValue < 18.5) {
        return "Abaixo do peso";
    } else if (imcValue < 25) {
        return "Peso normal";
    } else if (imcValue < 30) {
        return "Sobrepeso";
    } else if (imcValue < 35) {
        return "Obesidade grau 1";
    } else if (imcValue < 40) {
        return "Obesidade grau 2";
    } else if (imcValue >= 40) {
        return "Obesidade grau 3";
    }
}

function isValid(height, weight){
    if (!(weight && weight > 0.0)){
        return "Peso inválido";
    }
    if (!(height && height > 0.0)){
        return "Altura inválida";
    }
    return false;
}

function actionForm(){
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        console.log("disparou");

        const weight = Number(form.querySelector("#weight").value.replace(",", ".")).toFixed(2);
        const height = Number(form.querySelector("#height").value.replace(",", ".")).toFixed(2);
        const errorText =  document.querySelector(".error-text");

        const isValidConst = isValid(height, weight);
        console.log(weight);
        console.log(height);
        console.log(isValidConst);

        if (isValidConst) {
            errorText.style.display = "block";
            errorText.innerHTML = isValidConst;
            return;
        }
        errorText.style.display = "none";
        errorText.innerHTML = "";

        const imcValue = weight / height ** 2;

        const overlay = document.querySelector(".overlay");
        overlay.style.display = "flex";

        const textOverlay = overlay.querySelector(".text-overlay");
        textOverlay.innerHTML = `Seu IMC é ${Number(imcValue).toFixed(2)} (${imcClassification(imcValue)})`;
    })
}

function actionCloseButton(){
    const button = document.querySelector(".button-closed-overlay");
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const overlay = document.querySelector(".overlay");
        overlay.style.display = "none";
    })
}

actionForm();
actionCloseButton();