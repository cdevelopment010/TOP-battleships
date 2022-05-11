// import styleCanvas from "./Canvas";
// import canvasHit from "./CanvasHit";
const styleCanvas = require('./Canvas'); 
const canvasHit = require('./CanvasHit'); 
const Gameboard = require("./Gameboard");
// import Gameboard from "./Gameboard";

const Players = (name) => {
    return name;
}


const playerController = () => {
    const canvas = styleCanvas('.page3'); 
        
    const playerCanvas = canvas[0];
    const aiCanvas = canvas[1];

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


    const isValidAttack =  (x, y) => {
        let valid = false;

        if (players[opponent].gameboard.getBoard()[x][y] == 'hit' || players[opponent].gameboard.getBoard()[x][y] == 'miss') {
            return valid;
        } else {
            valid = true; 
        }

        return valid; 
    }

    const attack = (x, y) => {
        let validCoords = false;
        let status;
        if(players[opponent].gameboard.getBoard()[x][y] == 'hit' || players[opponent].gameboard.getBoard()[x][y] == 'miss') {
            //try again - coordinates aren't valid;
            console.log(`Try again! You have already attacked this spot ${x}, ${y}`); 
        } else {
            validCoords = true; 
            status = players[opponent].gameboard.receiveAttack(x, y);
            if (status == 'sunk') {
                let {shipIndex} = players[opponent].gameboard.shipIndex(x, y); 
                let shipSunk = players[opponent].gameboard.getShipIndex(shipIndex); 
                console.log("ship sunk", shipSunk); 
                shipSunk.coords.forEach(coord => {
                    canvasHit(coord[0], coord[1], aiCanvas, status);
                })
            }
            canvasHit(x, y, aiCanvas, status); 
            // update player
            updatePlayer(); 
            // AI turn
            let { aiStatus, xAi, yAi } = randomAIMove(); 
            if (aiStatus == 'sunk') {
                let {shipIndex} = players[0].gameboard.shipIndex(xAi, yAi); 
                let shipSunk = players[0].gameboard.getShipIndex(shipIndex); 
                shipSunk.coords.forEach(coord => {
                    canvasHit(coord[0], coord[1], playerCanvas, aiStatus);
                })
            }
            canvasHit(xAi, yAi, playerCanvas, aiStatus); 
            if (aiStatus == true) {
                status = aiStatus; 
            }
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