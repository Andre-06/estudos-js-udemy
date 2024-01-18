const dateObject = new Date();
function showDate(cardElement) {
    const dayOfWeek = [
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira",
        "sábado"
    ];

    const monthOfYear = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
    ];

    const timeString = `${dateObject.getHours()}:${dateObject.getMinutes() < 10 ? `0${dateObject.getMinutes()}` : dateObject.getMinutes()}`;
    const dateString = `${dayOfWeek[dateObject.getDay()]}, ${dateObject.getDate()} de ${monthOfYear[dateObject.getMonth()]}` +
        ` de ${dateObject.getFullYear()}`;

    if (cardElement === undefined){
        cardElement = document.querySelector("#current-card");
    }

    cardElement.querySelector(".time-card").innerHTML = timeString;
    cardElement.querySelector(".date-card").innerHTML = dateString;
}

function arrowsEvent(){
    const container = document.body.querySelector(".container");

    container.addEventListener("click", function (evt) {
        const containerRect = container.getBoundingClientRect();
        const clickX = evt.clientX - containerRect.left;

        console.log(clickX);

        const overflowContainer = container.querySelector(".overflow-container");
        const currentCard = overflowContainer.querySelector("#current-card");
        const nextCard = currentCard.cloneNode(true);


        if (24 < clickX && clickX < 56) {
            dateObject.setDate(dateObject.getDate() + 1);
            showDate(nextCard);
            container.style.justifyContent = 'start';
            overflowContainer.appendChild(nextCard);

            currentCard.style.transform = "translateX(-100%)";
            setTimeout(() => nextCard.style.transform = "translateX(-100%)", 10);
            setTimeout(() => {
                overflowContainer.removeChild(currentCard);
                nextCard.style.transition = "none";
                nextCard.style.transform = "translateX(0%)";
            }, 750);

            nextCard.style.transition = "transform 0.75s ease-in-out";
            currentCard.style.transition = "transform 0.75s ease-in-out";

        } else if (582 < clickX && clickX < 614) {
            dateObject.setDate(dateObject.getDate() - 1);
            showDate(nextCard);
            container.style.justifyContent = 'end';
            overflowContainer.prepend(nextCard);

            currentCard.style.transform = "translateX(100%)";
            setTimeout(() => nextCard.style.transform = "translateX(100%)", 10);
            setTimeout(() => {
                overflowContainer.removeChild(currentCard);
                nextCard.style.transition = "none";
                container.style.justifyContent = 'start';
                nextCard.style.transform = "translateX(0%)";
            }, 750);

            nextCard.style.transition = "transform 0.75s ease-in-out";
            currentCard.style.transition = "transform 0.75s ease-in-out";
        }

    })
}

arrowsEvent()
showDate();