const Gameboard = require("./Gameboard");
// import Gameboard from "./Gameboard";

const Players = (name) => {
    return name;
}


const playerController = () => {

    let player1; 
    let player1Gameboard = Gameboard();
    let player2 = Players('AI');
    let player2Gameboard = Gameboard();
    let players;  
    let currentPlayer = 0; 
    let opponent = (currentPlayer + 1) % 2; 

    const createPlayer = (name) => {
        player1 = Players(name); 
        players = [{player: player1, gameboard: player1Gameboard}, {player: player2, gameboard: player2Gameboard} ];
        console.log(players); 
    }

    const getPlayers = () => {return players} ; 
    const updatePlayer = () => {
        currentPlayer = (currentPlayer + 1) % 2; 
        opponent = (currentPlayer + 1) % 2;
    } 
    const getCurrentPlayer = () => currentPlayer; 
    const checkWinner = () => {
        return players[opponent].gameboard.gameover() == true ? true : false
    }; 
    const randomAIMove = () => {
        let validCoords = false;
        let status; 
        let x = Math.floor(Math.random()*10); 
        let y = Math.floor(Math.random()*10); 
        // pause for one second 
        // setTimeout(()=> {
            while (!validCoords) {
                if(players[0].gameboard.getBoard()[x][y] == 'hit' | players[0].gameboard.getBoard()[x][y] == 'miss') {
                    console.log('try again AI...'); 
                    x = Math.floor(Math.random()*10); 
                    y = Math.floor(Math.random()*10); 
                } else {
                    validCoords = true;
                }
            }
            console.log("random AI coords",x, y); 
            status = players[0].gameboard.receiveAttack(x, y); 
            updatePlayer(); 
            return {aiStatus: status, xAi: x, yAi: y}; 
        // }, 1000)
        // update player turn 

    }

    const attack = (x, y) => {
        let validCoords = false;
        let status;
        if(players[opponent].gameboard.getBoard()[x][y] == 'hit' | players[opponent].gameboard.getBoard()[x][y] == 'miss') {
            //try again - coordinates aren't valid;
            console.log(`Try again! You have already attacked this spot ${x}, ${y}`); 
        } else {
            validCoords = true; 
            status = players[opponent].gameboard.receiveAttack(x, y);
            // update player
            updatePlayer(); 
            // AI turn
            let { aiStatus, xAi, yAi } = randomAIMove(); 
            console.log("player attack aiStatus",aiStatus)
            return {status, aiStatus, xAi, yAi};
        }
    }

    const showBoards = () => {
        console.log('playerBoard');
        console.table(players[0].gameboard.getBoard());
        console.log('AIBoard');
        console.table(players[1].gameboard.getBoard());
    }

    return {
        updatePlayer, 
        getCurrentPlayer, 
        randomAIMove, 
        checkWinner, 
        attack, 
        showBoards, 
        createPlayer, 
        getPlayers
    }

}


module.exports = playerController; 