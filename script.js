let fields = [];
let gameOver = false;
let currentShape = 'cross';
let counterPlayerCross = 0;
let counterPlayerCircle = 0;


function fillShape(id) {
    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            inactivePlayer1();
        } else {
            inactivePlayer2();
        }
        fields[id] = currentShape;
        draw();
        checkForWin();
    }
}

function inactivePlayer1(){
    currentShape = 'circle'
    document.getElementById('player-1').classList.add('player-inactive');
    document.getElementById('player-1').style.borderBottom = "none";
    document.getElementById('player-2').classList.remove('player-inactive');
    document.getElementById('player-2').style.borderBottom = "6px solid rgb(80, 80, 68)";
    document.getElementById('small-cross').classList.remove('d-none');            
    document.getElementById('small-circle').classList.add('d-none');            
    document.getElementById('active-player').innerHTML = 'ist an der Reihe';
}

function inactivePlayer2(){
    currentShape = 'cross'
    document.getElementById('player-1').classList.remove('player-inactive');
    document.getElementById('player-1').style.borderBottom = "6px solid rgb(80, 80, 68)";
    document.getElementById('player-2').classList.add('player-inactive');
    document.getElementById('player-2').style.borderBottom = "none";
    document.getElementById('small-circle').classList.remove('d-none')            
    document.getElementById('small-cross').classList.add('d-none')            
    document.getElementById('active-player').innerHTML = 'ist an der Reihe';
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {
    let winner;
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        counterWinner(winner);
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        counterWinner(winner);
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[4];
        counterWinner(winner);
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        counterWinner(winner);
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        counterWinner(winner);
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        counterWinner(winner);
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        counterWinner(winner);
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        counterWinner(winner);
    }

    if (fields.filter((value) => value).length == 9 && !(winner)) {
        winner = 'undecided';
    }

    finalWinner(winner);
}

function finalWinner(winner){
    if (winner) {
        gameOver = true;
        setTimeout(() => {
            winnerScreen(winner);
        }, 1000);
    }
}

function winnerScreen(winner){
    if(winner == 'circle'){
        document.getElementById('winner-player-circle').classList.remove('d-none');
    }
    if(winner == 'cross'){
        document.getElementById('winner-player-cross').classList.remove('d-none');

    } else{
        document.getElementById('undecided-winner').classList.remove('d-none');
    }
    for (let i = 0; i < 3; i++) {
        document.getElementById('game-over-circle-' +[i]).innerHTML = counterPlayerCircle;
        document.getElementById('game-over-cross-' +[i]).innerHTML = counterPlayerCross;
    }
}

function counterWinner(winner){
    if(winner == 'circle'){
        counterPlayerCircle++;
    } else{
        counterPlayerCross++;
    }
}

function restart(){
    gameOver = false;
    fields = [];
    document.getElementById('undecided-winner').classList.add('d-none');
    document.getElementById('winner-player-circle').classList.add('d-none');
    document.getElementById('winner-player-cross').classList.add('d-none');
    document.getElementById('player-circle').innerHTML = counterPlayerCircle;
    document.getElementById('player-cross').innerHTML = counterPlayerCross;
    document.getElementById('small-circle').classList.add('d-none')            
    document.getElementById('small-cross').classList.add('d-none')   
    document.getElementById('active-player').innerHTML = 'Beginne mit dem Spiel';

    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
}

