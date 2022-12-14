const players = [];

function showPlayerName(namePlayers) {
    const playerId = document.getElementById('player-id');
    playerId.innerHTML = '';


    for (let i = 0; i < namePlayers.length; i++) {
        const player = namePlayers[i].playerName;

        const li = document.createElement("li");
        li.innerText = (i + 1) + '. ' + player;
        playerId.appendChild(li);
    }

}

function playerAdding(element) {

    const playersLength = getPlayerLength('player-id');
    if (playersLength > 4) {
        alert("You Can't Add More Than 5 Player");
        return;
    }
    const playerName = element.parentNode.children[0].innerText;
    const name = {
        playerName: playerName,
    }
    players.push(name);
    showPlayerName(players);
    element.setAttribute('disabled', true);


}


document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerCost = getInputFieldValueById('per-player');
    if (isNaN(perPlayerCost)) {
        alert('Please Input A Number');
        return;

    }
    const PlayerPerName = getPlayerLength('player-id');

    const calculatePlayerCost = perPlayerCost * PlayerPerName;

    getTextElementValueById('player-cost', calculatePlayerCost);

})


document.getElementById('calculate-total').addEventListener('click', function () {
    const previousAmount = document.getElementById('player-cost');
    const previousAmountString = previousAmount.innerText;
    const previousAmountNumber = parseInt(previousAmountString);

    const managerSalary = getInputFieldValueById('manager');
    const directorSalary = getInputFieldValueById('director');
    if (isNaN(managerSalary) || isNaN(directorSalary)) {
        alert('Please Input A Number');
        return;
    }

    const bothSalary = managerSalary + directorSalary;

    const totalSalary = previousAmountNumber + bothSalary;

    const finalTotal = document.getElementById('final-total');
    finalTotal.innerText = totalSalary;


})

