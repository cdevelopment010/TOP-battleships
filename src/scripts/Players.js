const styleCanvas = require('./Canvas'); 
const canvasHit = require('./CanvasHit'); 
const Gameboard = require("./Gameboard");

const Players = (name) => {
    return name;
}

const playerController = () => { 
        // this seems to call the canvas twice? 
    const canvas2 = styleCanvas('.page3');
    const playerCanvas = canvas2[0];
    const aiCanvas = canvas2[1];

    let player1; 
    let player1Gameboard = Gameboard();
    let player2 = Players('AI');
    let player2Gameboard = Gameboard();
    let players;  
    let currentPlayer = 0; 
    let opponent = (currentPlayer + 1) % 2; 


    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }

    const createPlayer = (name) => {
        player1 = Players(name); 
        players = [{player: player1, gameboard: player1Gameboard}, {player: player2, gameboard: player2Gameboard} ];
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
        while (!validCoords) {
            if(!isValidAttack(x,y)) {
                console.log('try again AI...'); 
                x = Math.floor(Math.random()*10); 
                y = Math.floor(Math.random()*10); 
            } else {
                validCoords = true;
            }
        }
        status = players[0].gameboard.receiveAttack(x, y); 
        updatePlayer(); 
        return {aiStatus: status, xAi: x, yAi: y}; 
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

    const attack = async (x, y) => {
        let validCoords = false;
        let status;
        if(!isValidAttack(x,y)) {
            return;
        } else {
            validCoords = true; 
            status = players[opponent].gameboard.receiveAttack(x, y);
            //If the ship is sunk need the index to update the canvas 
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
            document.querySelector('.player .overlay').classList.add('hidden')
            document.querySelector('.AI .overlay').classList.remove('hidden')
            await delay(250); 
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

            await delay(350); 
            document.querySelector('.player .overlay').classList.remove('hidden')
            document.querySelector('.AI .overlay').classList.add('hidden')

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