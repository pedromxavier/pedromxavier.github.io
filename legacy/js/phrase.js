var PHRASES = [
    "Uma vista do chão do Universo.",
    "Uma história até que bem contada.",
    "Um retrato sereno demais.",
    "Não passa de uma goteira."
]

function randint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomPhrase() {
    let element = document.getElementById("randomphrase");
    element.innerHTML = PHRASES[randint(0, PHRASES.length - 1)];
}