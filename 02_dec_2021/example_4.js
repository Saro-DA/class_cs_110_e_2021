
function generateRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

console.log(rollDice());

function rollDice() {
    return generateRandom(6) + 1;
}

function rollDiceCheat() {
    const randomResult = generateRandom(100) + 1;

    if (randomResult >= 1 && randomResult <= 40) {
        return 1;
    }

    // Calculate the rest.
}