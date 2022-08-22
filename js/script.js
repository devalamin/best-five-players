const players = [];

function showPlayerName(namePlayers) {
    const playerId = document.getElementById('player-id');
    playerId.innerHTML = '';

    for (let i = 0; i < namePlayers.length; i++) {
        const player = namePlayers[i].playerName;

        const li = document.createElement("li");
        li.innerText = player;
        playerId.appendChild(li);

    }

}

function playerAdding(element) {
    const playerName = element.parentNode.children[0].innerText;

    const name = {
        playerName: playerName,
    }
    players.push(name);
    showPlayerName(players);
}