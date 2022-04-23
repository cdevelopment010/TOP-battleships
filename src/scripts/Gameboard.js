//import ship from "./ship";//jest doesn't like import
const ship = require('./ship');
const Gameboard = () => {

    // Create 10x10 grid
    //NOTE: I may make this adjustable in the future?
    let board = Array(10).fill(null).map(x => Array(10).fill(null)); 
    const getBoard = () => board;
    const ships = []



    const getShips = () => ships;

    //placeShip

    const placeShip = (x, y, len) => {
        let shipToPlace = ship(len); 
        let coords = [];
        for (let i = 0; i < len; i++) {
            board[x][y] = 'SHIP';
            coords.push([x, y]); 
            y++;
        }
        ships.push({coords, shipToPlace}); 
    }

    //ReceiveAttack 
    const receiveAttack = (x,y) => {
        let status = 'miss'; 
        let coordIndex = -1; 
        let shipIndex = -1;
        // check if it hasn't already been in that spot
        if (board[x][y] == 'hit' || board[x][y] == 'miss') {
            console.log('try again...'); 
            return; 
        }
        // check if that spot contains a ship
        if (board[x][y] == null) {
            console.log('miss'); 
        } else {
            console.log('hit'); 
            status = 'hit'; 
            for(let i = 0; i < ships.length; i++) {
                for(let j = 0; j < ships[i].coords.length; j++){
                    if (JSON.stringify([x, y])==JSON.stringify(ships[i].coords[j])) {
                        coordIndex = j;
                        shipIndex = i;
                        board[x][y] = 'hit'; 
                    }
                }
            }
        
        }


        if (coordIndex != -1 && shipIndex != -1) {
            ships[shipIndex].shipToPlace.hit(coordIndex); 
            // will need to add check for game over & sunk
        }

        return status; 
    }


    const gameover = () => {
        // check if each ship has been sunk
        return ships.every(ship => ship.shipToPlace.isSunk());
    }


    

    return {getBoard, placeShip, receiveAttack, gameover, getShips}
}


module.exports = Gameboard; 