function getInputFieldValueById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputValueString = inputField.value;
    const inputValueNumber = parseInt(inputValueString);

    return inputValueNumber;
}

function getPlayerLength(playerId) {
    const playerLength = document.getElementById(playerId).children.length;
    return playerLength;

}

function getTextElementValueById(elementId, value) {
    const textElement = document.getElementById(elementId);
    const textElementString = (textElement.innerText = value);
    const textElementNumber = parseInt(textElementString);
    return textElementNumber;
}