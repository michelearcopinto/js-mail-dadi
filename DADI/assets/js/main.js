let numeroGiocatore, numeroComputer;
let puntoGiocatore, puntoComputer;

const startButton = document.getElementById("startButton")
const resetButton = document.getElementById("resetButton")
const showPoints = document.getElementById("showPoints")

const diceOne = document.getElementById("diceOne");
const diceTwo = document.getElementById("diceTwo");

const winnerText = document.getElementById("winnerText")
const initialPathValue = diceOne.getAttribute('d');

let pointsGiocatore = []
let pointsComputer = []

const scoreBoard = document.getElementById("scoreBoard")
const scoreGiocatore = document.getElementById("scoreGiocatore")
const scoreComputer = document.getElementById("scoreComputer")

let divsGiocatoreArray = []
let divsComputerArray = []

const overlay = document.querySelector(".overlay")

startButton.addEventListener('click', function () {

    // Ciclo per generare i due numeri casuali per i dadi
    for (let i = 0; i < 2; i++) {

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        if (i === 0) {
            numeroGiocatore = getRandomNumber(1, 6);
        } else {
            numeroComputer = getRandomNumber(1, 6);
        }
    }

    pointsGiocatore.push(numeroGiocatore);
    pointsComputer.push(numeroComputer);

    console.log(numeroGiocatore, numeroComputer)

    const dicePaths = [
        'M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100z',
        'M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z',
        'M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm316.97 36.03A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zM256 206a50 50 0 0 1 0 100 50 50 0 0 1 0-100zM123.47 340.03A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z',
        'M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z',
        'M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z',
        'M74.5 36A38.5 38.5 0 0 0 36 74.5v363A38.5 38.5 0 0 0 74.5 476h363a38.5 38.5 0 0 0 38.5-38.5v-363A38.5 38.5 0 0 0 437.5 36h-363zm48.97 36.03A50 50 0 0 1 172 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 122a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm-268 268A50 50 0 0 1 172 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97zm268 0A50 50 0 0 1 440 390a50 50 0 0 1-100 0 50 50 0 0 1 51.47-49.97z',
    ];


    diceOne.setAttribute('d', dicePaths[numeroGiocatore - 1]);
    diceTwo.setAttribute('d', dicePaths[numeroComputer - 1]);

    // If statement che determina la vittoria o la sconfitta
    if (numeroGiocatore > numeroComputer) {
        winnerText.innerHTML = "IL VINCITORE È: GIOCATORE"
        console.log("Hai vinto")
        diceOne.classList = 'svg-win';
        diceTwo.classList = 'svg-fail';


    } else if (numeroComputer > numeroGiocatore) {
        winnerText.innerHTML = "IL VINCITORE È: COMPUTER"
        console.log("Hai perso")
        diceOne.classList = 'svg-fail';
        diceTwo.classList = 'svg-win';


    } else {
        winnerText.innerHTML = "IL VINCITORE È: NESSUNO - PAREGGIO"
        console.log("Pareggio")
        diceOne.classList = 'svg-tie';
        diceTwo.classList = 'svg-tie';

    }

    // Verifica se l'elemento ha la classe "d-block"
    if (scoreBoard.classList.contains("d-block")) {
        console.log("L'elemento è visibile (ha la classe d-block).");

        puntoGiocatore = document.createElement('div');
        puntoGiocatore.classList.add("text-center", "fs-3", "fw-bold", "d-flex", "justify-content-center", "align-items-center");
        puntoGiocatore.textContent = numeroGiocatore;
        scoreGiocatore.append(puntoGiocatore);

        puntoComputer = document.createElement('div');
        puntoComputer.classList.add("text-center", "fs-3", "fw-bold", "d-flex", "justify-content-center", "align-items-center");
        puntoComputer.textContent = numeroComputer;
        scoreComputer.append(puntoComputer);


        if (numeroGiocatore > numeroComputer) {

            puntoGiocatore.classList.add('score-win', 'border');
            puntoComputer.classList.add('score-fail', 'border');

        } else if (numeroComputer > numeroGiocatore) {

            puntoGiocatore.classList.add('score-fail', 'border');
            puntoComputer.classList.add('score-win', 'border');

        } else {

            puntoGiocatore.classList.add('score-tie', 'text-white', 'border');
            puntoComputer.classList.add('score-tie', 'text-white', 'border');
        }

    } else {
        console.log("L'elemento è nascosto (non ha la classe d-block).");
    }




});

resetButton.addEventListener('click', function () {

    showPoints.classList.remove("disabled")
    startButton.classList.remove("disabled")

    diceOne.setAttribute('d', initialPathValue);
    diceTwo.setAttribute('d', initialPathValue);

    diceOne.classList = [];
    diceTwo.classList = [];

    winnerText.innerHTML = "IL VINCITORE È:";
    scoreBoard.classList = "d-none"

    overlay.style.height = "100vh"


    for (let i = 0; i < divsGiocatoreArray.length; i++) {

        scoreGiocatore.removeChild(divsGiocatoreArray[i]);
        scoreComputer.removeChild(divsComputerArray[i]);
    }

    pointsGiocatore = []
    pointsComputer = []

    divsGiocatoreArray = [];
    divsComputerArray = [];


    console.log(pointsGiocatore)
    console.log(pointsComputer)

    console.log(divsGiocatoreArray)
    console.log(divsComputerArray)

});

showPoints.addEventListener('click', function () {

    showPoints.classList.add("disabled")
    startButton.classList.add("disabled")

    for (let i = 0; i < pointsGiocatore.length; i++) {

        puntoGiocatore = document.createElement('div');
        puntoGiocatore.classList.add("text-center", "fs-3", "fw-bold", "d-flex", "justify-content-center", "align-items-center");
        puntoGiocatore.textContent = pointsGiocatore[i];
        scoreGiocatore.append(puntoGiocatore);

        puntoComputer = document.createElement('div');
        puntoComputer.classList.add("text-center", "fs-3", "fw-bold", "d-flex", "justify-content-center", "align-items-center");
        puntoComputer.textContent = pointsComputer[i];
        scoreComputer.append(puntoComputer);


        if (pointsGiocatore[i] > pointsComputer[i]) {

            puntoGiocatore.classList.add('score-win', 'text-white', 'border');
            puntoComputer.classList.add('score-fail', 'text-white', 'border');

        } else if (pointsComputer[i] > pointsGiocatore[i]) {

            puntoGiocatore.classList.add('score-fail', 'text-white', 'border');
            puntoComputer.classList.add('score-win', 'text-white', 'border');

        } else {

            puntoGiocatore.classList.add('score-tie', 'text-white', 'border');
            puntoComputer.classList.add('score-tie', 'text-white', 'border');
        }
    }


    // Variabile per accumulare la somma
    let sommaGiocatore = 0;
    let sommaComputer = 0;

    // Ciclo per iterare attraverso gli elementi dell'array e sommarli
    for (let i = 0; i < pointsGiocatore.length; i++) {
        sommaGiocatore += pointsGiocatore[i];
    }

    for (let i = 0; i < pointsComputer.length; i++) {
        sommaComputer += pointsComputer[i];
    }

    puntoGiocatore = document.createElement('div');
    puntoGiocatore.classList.add("bg-secondary", "text-white", "text-center", "fs-3", "fw-bold", "d-flex", "justify-content-center", "align-items-center");
    puntoGiocatore.textContent = `Hai totalizzato ${sommaGiocatore} punti`;
    scoreGiocatore.append(puntoGiocatore);

    puntoComputer = document.createElement('div');
    puntoComputer.classList.add("bg-secondary", "text-white", "text-center", "fs-3", "fw-bold", "d-flex", "justify-content-center", "align-items-center");
    puntoComputer.textContent = `Ha totalizzato ${sommaComputer} punti`;
    scoreComputer.append(puntoComputer);

    console.log(sommaGiocatore)
    console.log(sommaComputer)

    divsGiocatoreArray = Array.from(scoreGiocatore.querySelectorAll('div'));
    divsComputerArray = Array.from(scoreComputer.querySelectorAll('div'));

    console.log(pointsGiocatore)
    console.log(pointsComputer)

    console.log(divsGiocatoreArray)
    console.log(divsComputerArray)


    scoreBoard.classList = "d-block"

    overlay.style.height = "100%"

});