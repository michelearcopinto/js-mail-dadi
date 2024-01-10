function generaNumeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const frutti = [
    'mela', 'banana', 'arancia', 'pera', 'fragola', 'melone', 'uva', 'kiwi', 'pesca', 'limone',
    'ananas', 'ciliegia', 'mango', 'cocco', 'ribes', 'mirtillo', 'pompelmo', 'limetta', 'papaya', 'prugna',
    'lampone', 'melograno', 'cachi', 'kiwi', 'mandarino', 'pomelo', 'clementina', 'nespola', 'susina', 'uvaSpina',
    'pescaNoce', 'albicocca', 'cacao', 'carambola', 'fico', 'guava', 'passiflora', 'dattero', 'cantalupo', 'dattero',
    'bananaPlantain', 'feijoa', 'ficoDIndia', 'jujube', 'litchi', 'maracuja', 'nespolaDelGiappone', 'rambutan', 'uvaPassa', 'zafferano',
    'avocado', 'noci', 'mandorle', 'nocciole', 'pistacchi', 'nociPecan', 'nociBrasiliane', 'coccoSecco', 'anacardi', 'arachidi',
    'zucca', 'zucchina', 'cetriolo', 'melanzana', 'pomodoro', 'patata', 'carota', 'peperone', 'cavolfiore', 'broccoli',
    'asparago', 'cipolla', 'spinaci', 'lattuga', 'rapa', 'radicchio', 'zuccaGialla', 'cavoloCinese', 'cavoloNero', 'cavoloRosso',
    'cavoloVerza', 'porro', 'sedano', 'finocchio', 'fagiolo', 'ceci', 'lenticchia', 'pisello', 'riso', 'grano', 'orzo'
];

const verdure = [
    'carota', 'broccolo', 'zucchina', 'cavolo', 'peperone', 'cetriolo', 'patata', 'pomodoro', 'spinaci', 'cipolla',
    'rapa', 'radicchio', 'barbabietola', 'fagiolino', 'zucca', 'lattuga', 'asparago', 'finocchio', 'cavolfiore', 'melanzana',
    'cavoloCinese', 'cavoloNero', 'cavoloRosso', 'cavoloVerza', 'porro', 'sedano', 'zuccaGialla', 'funghi', 'rucola',
    'prezzemolo', 'basilico', 'rosmarino', 'salvia', 'maggiorana', 'origano', 'timo', 'dragoncello', 'coriandolo', 'pepeNero',
    'pepeBianco', 'pepeRosa', 'pepeVerde', 'pepeDiSichuan', 'sale', 'saleMarino', 'saleNero', 'saleRosaDellHimalaya', 'saleAffumicato',
    'lenticchia', 'fagiolo', 'ceci', 'pisello', 'riso', 'grano', 'orzo', 'avena', 'miglio', 'farro',
    'quinoa', 'couscous', 'fregola', 'polenta', 'pane', 'pasta', 'risotto', 'gnocchi', 'tortellini', 'lasagne',
    'pizza', 'focaccia', 'paneIntegrale', 'paneAiCereali', 'paneAlleOlive', 'paneDiSegale', 'paneAiSemi', 'paneAiSemiDiGirasole', 'paneAiSemiDiLino'
];

const mailArrayAuthorized = []

// Ciclo for per creare le combinazioni
for (let i = 0; i < frutti.length; i++) {
    for (let j = 0; j < verdure.length; j++) {
        // Combinazione di frutta e verdura
        const combinazione = `${frutti[i]}.${verdure[j]}@orto.org`;

        // Aggiungi la combinazione all'array delle mail
        mailArrayAuthorized.push(combinazione);
    }
}

console.log(mailArrayAuthorized)


const emailInput = document.getElementById('emailInput');
const loginButton = document.getElementById('loginButton');
const hintButton = document.getElementById('hintButton');
const hintOutput = document.getElementById('hintOutput');
let emaiEntered, emailFound, emaiDisplayed;

loginButton.addEventListener('click', function () {

    emaiEntered = emailInput.value;
    console.log(emaiEntered)

    if (emaiEntered === "") {
        alert("Inserisci una mail valida")
    } else {
        emailFound = false;

        for (let i = 0; i < mailArrayAuthorized.length; i++) {
            if (mailArrayAuthorized[i] === emaiEntered) {
                emailFound = true;
                console.log('email trovata')
                break;
            } else {
                console.log('email NON trovata')
            }
        }

        if (emailFound === true) {
            alert("Accesso consentito. Benvenuto!");
        } else {
            alert("Accesso negato. L'email non è autorizzata.");
        }
    }
})

hintButton.addEventListener('click', function () {

    emaiDisplayed = mailArrayAuthorized[generaNumeroCasuale(0, 7006)]
    hintOutput.value = `${emaiDisplayed} - copiata`
    console.log(emaiDisplayed)

    navigator.clipboard.writeText(emaiDisplayed)

})