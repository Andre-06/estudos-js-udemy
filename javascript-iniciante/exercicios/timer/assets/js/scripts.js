const startButton = document.querySelector(".start-button");
const stopButton = document.querySelector('.stop-button');
const clearButton = document.querySelector('.clear-button');

const timeCard = document.querySelector(".time-card");
const clockTransparent = document.querySelector(".clock-transparent");
const clockBorder = document.querySelector(".clock-border");
const timeObject = new Date();

let timeCount;

const updateTimeCard = () => {
    timeCard.innerHTML = timeObject.toLocaleTimeString('pt-BR', {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    clockTransparent.style.background = `conic-gradient(
            white ${1.667 * timeObject.getSeconds()}%,
            transparent 0
    )`;
}
const clearTimeCount = () => timeObject.setHours(0, 0, 0, 0);
const stopTimeCount = () => {
    clearInterval(timeCount);
    timeCount = undefined;
}
const changeColor = (type) => {
    if (type === 0) {
        timeCard.style.color = "rgb(9, 48, 56)";
        clockBorder.style.borderColor = "rgb(9, 48, 56)";
    }
    if (type === 1){
        timeCard.style.color = "rgb(255,82,82)";
        clockBorder.style.borderColor = "rgb(255,82,82)";
    }
}

clearTimeCount();
timeObject.setHours(0, 1, 50, 0);
function buttonListeners() {
    startButton.addEventListener("click", function () {
        changeColor(0);

        if (timeCount !== undefined) return
        timeCount = setInterval(() => {
            timeObject.setSeconds(timeObject.getSeconds() + 1);
            updateTimeCard();
        }, 1000);
    })

    stopButton.addEventListener("click", function () {
        changeColor(1);
        stopTimeCount();
    })

    clearButton.addEventListener("click", function () {
        stopTimeCount();
        clearTimeCount();
        updateTimeCard();
    })
}

buttonListeners();