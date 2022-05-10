/* 
NOTES:
- touch screen drag doesn't work
- go to final screen on game over
- if sunk change all squares to show ship has been sunk
- refactor code...
*/

import playerController from "./Players";
import styleCanvas from "./Canvas";
const game = (() => {
    const playerControl = playerController();      
    let usernameBtn = document.getElementById('btn-username');
    let btnToPage3 = document.getElementById('btn-to-page3');
    let username = document.getElementById('username'); 
    const gridPopulated = []; //use this to check coords of ship placement and to place on gameboard before screen 3; 
    const gridPopulatedAI = []; //use this to check coords of ship placement and to place on gameboard before screen 3; 
    const shipPlacement = {
        'ship0': {
            length: 0, 
            position: [], 
            direction: 1
        },
        'ship1': {
            length: 0, 
            position: [], 
            direction: 1
        },
        'ship2': {
            length: 0, 
            position: [], 
            direction: 1
        },
        'ship3': {
            length: 0, 
            position: [], 
            direction: 1
        },
        'ship4': {
            length: 0, 
            position: [], 
            direction: 1
        }
    }
    const shipPlacementAI = {
        'ship0': {
            length: 0, 
            position: [], 
            direction: 1
        },
        'ship1': {
            length: 0, 
            position: [], 
            direction: 1
        },
        'ship2': {
            length: 0, 
            position: [], 
            direction: 1
        },
        'ship3': {
            length: 0, 
            position: [], 
            direction: 1
        },
        'ship4': {
            length: 0, 
            position: [], 
            direction: 1
        }
    }

    usernameBtn.addEventListener('click', startGame); 
    btnToPage3.addEventListener('click', () => {
        nextScreen('page2', 'page3'); 
        battlePage(); 
    }); 


    // functions for screen 1 - username/welcome page 

    function validateUsername() {
        let pass = true; 
        if (username.value.length == 0) {
            alert('must input a username'); 
            pass = false;
        }
        if (username.value.length < 3){
            alert('username must be greater than 3'); 
            pass=false;
        }

        return pass; 
    }

    function createPlayer() {
        playerControl.createPlayer(username.value); 
        console.log("players:", playerControl.getPlayers()[0].gameboard); 
    }

    function startGame() {
        let usernamePass = validateUsername(); 
        if (!usernamePass) {
            return; 
        }
        //create player 
        createPlayer(); 
        // go to second screen; 
        nextScreen('page1', 'page2'); 
        //create 5 ships to user to place        
        generateShips(); 
        //create canvas to place ships
        let canvas = styleCanvas('.page2');    
    }


    // functions for screen 2 - user to place ships


    function generateShips() {
        let ships = [5,4,3,3,2]; 
        let shipContainer = document.querySelectorAll('.page2 .ship-container'); 
        console.log(shipContainer); 
        for(let i = 0; i < ships.length; i++) {
            for (let j = 0; j < ships[i]; j++) {
                const square = document.createElement('div'); 
                square.classList.add('square'); 
                shipContainer[i].append(square); 
            }
        }
        shipContainer.forEach((container, key) => {
            container.setAttribute('data-ship-number', key); 
            container.draggable = true; 
            container.classList.add('draggable'); 
            container.addEventListener('click', () => {
                container.classList.toggle('vertical'); 
            })
        })
        manageDrag(); 
    }


    function manageDrag() {
        let draggables = document.querySelectorAll('.draggable'); 
        let canvas = document.querySelector('.page2 canvas'); 
        let x = 0, y = 0; 

        canvas.addEventListener('dragover', ( e ) => {
            e.preventDefault(); 
            x = Math.floor(e.offsetX / 50) * 50; 
            y = Math.floor(e.offsetY / 50) * 50; 
        })

        draggables.forEach((draggable, key) => {


            // touch event
            // draggable.addEventListener('touchstart', () => {
            //     draggable.classList.add('dragging'); 
            // })
            draggable.addEventListener('dragstart', () => {
                //add class to tell we are currently dragging
                draggable.classList.add('dragging'); 
            })

            draggable.addEventListener('dragend', () => {
                //remove class to tell we are currently dragging
                draggable.classList.remove('dragging'); 
                let direction = draggable.classList.contains('vertical') ? 'vertical' : 'horizontal'; 
                let size = draggable.childElementCount; 


                //add check to see if drop ship is valid; 
                let check = checkPlacement(x/50, y/50, size, direction, gridPopulated); 
                if (check) {
                    dropShip(x, y, size, canvas, direction); 
                    updateShipObject(key, size, [x, y], direction, shipPlacement);
                    let populated = populateGrid(x / 50, y/50, size, direction);
                    gridPopulated.push(...populated);  
                    draggable.innerHTML = ''; 
                    finishShipPlacement(); 
                    
                } else {
                    return; 
                }

                
                
            })


            // draggable.addEventListener('touchend', () => {
            //     //remove class to tell we are currently dragging
            //     draggable.classList.remove('dragging'); 
            //     let direction = draggable.classList.contains('vertical') ? 'vertical' : 'horizontal'; 
            //     let size = draggable.childElementCount; 


            //     //add check to see if drop ship is valid; 
            //     let check = checkPlacement(x/50, y/50, size, direction); 
            //     if (check) {
            //         dropShip(x, y, size, canvas, direction); 
            //         updateShipObject(key, size, [x, y], direction);
            //         let populated = populateGrid(x / 50, y/50, size, direction);
            //         gridPopulated.push(...populated);  
            //         draggable.innerHTML = ''; 
            //         finishShipPlacement(); 
                    
            //     } else {
            //         return; 
            //     }

                
                
            // })
        })
    }

    function updateShipObject(key, size, coords, direct, obj) {
        obj[`ship${key}`].length = size;
        obj[`ship${key}`].position = coords;
        obj[`ship${key}`].direction = direct=='vertical' || direct == 0 ? 0 : 1;
    }

    function dropShip(x, y, size, canvas, direction) {
        const ctx = canvas.getContext("2d")
        for (let i = 0; i < size; i++) {
            ctx.beginPath(); 
            if (direction === 'vertical' || direction === 0 ) {
                ctx.rect(x, y+(50*i), 50, 50); 
            } else {
                ctx.rect(x+(50*i), y, 50, 50); 
            }
            ctx.strokeStyle = 'white'; 
            ctx.setLineDash([2]);
            ctx.lineWidth = 2; 
            ctx.stroke(); 
            ctx.fillStyle = '#8981BA'
            ctx.fill();
        }
    }

    function checkPlacement(x,y, size, direction, gridCheck) {
        let shipOK = true; 
        //ship goes off the board
        for (let k = 0; k < size; k++) {

            if ((direction === 'vertical' || direction == 0) && (x > 9 || x < 0 || y+k < 0 || y+k > 9)) {
                console.log("failed1:", x, y+k); 
                shipOK = false;
            }
            if ((direction !== 'vertical' || direction == 1) && (x+k > 9 || x+k < 0 || y < 0 || y >9)) {
                console.log("failed2")
                shipOK = false;
            }
        }

        // overlaps with ship already placed
        gridCheck.forEach(coord => {
            for (let i = 0; i < size; i++) {
                if (direction === 'vertical' || direction == 0) {
                    if(coord[0] == x && coord[1]== y+i) {
                        console.log("failed3")
                        shipOK = false;
                    }
                    
                } else {
                    if(coord[0] == x+i && coord[1]== y) {
                        console.log("failed4")
                        shipOK = false;
                    }
                    
                }
                }
                
            })

        
        // shipOK = false;
        return shipOK; 
    }
    

    function populateGrid(x, y, size, direction) {
        let grid = []
        for (let i = 0; i < size; i++) {
            if (direction === 'vertical') {
                grid.push([x,y+i]) 
            } else {
                grid.push([x+i,y]) 
            }
        }
        return [...grid]; 
    }

    

    function finishShipPlacement(){

        let shipsRemaining = document.querySelectorAll('.ship-container .square').length
        if (shipsRemaining === 0) {
            btnToPage3.classList.remove('hidden');  
            for(let ship in shipPlacement) {
                playerControl.getPlayers()[0].gameboard.placeShip(shipPlacement[ship].position[0]/50, 
                    shipPlacement[ship].position[1]/50, shipPlacement[ship].length, shipPlacement[ship].direction)
            }
            document.querySelector('.page2 .container').classList.add('hidden'); 
        }
    }




    // functions for screen 3 - main battle



    function battlePage() {
        const canvas = styleCanvas('.page3'); 
        const playerCanvas = canvas[0];
        const aiCanvas = canvas[1];
        let gameover = false; 


        // place player ships
        const playerShips = playerControl.getPlayers()[0].gameboard.getShips(); 
        playerShips.forEach(ship => {
            dropShip(ship.coords[0][0]*50, ship.coords[0][1]*50, ship.shipToPlace.length, playerCanvas, ship.shipToPlace.getDirection())

        })


        //set up random AI ship placement
        placeAIShips(); 
        aiShipsGameboard(); 

        //manage turns?
            //manage gameover status



        //on click to signal attack
        
        aiCanvas.addEventListener('click', e => {
            
            if (playerControl.getCurrentPlayer() == 0) {
                let x = Math.floor(e.offsetX / 50);
                let y = Math.floor(e.offsetY / 50);
                gameover = playerControl.attack(x, y); 
                // playerControl.updatePlayer(); 
                console.log(gameover.status); 
                if (gameover.status == true) {
                    nextScreen('page3', 'page4')
                }

            }    
        })


    }

    function placeAIShips() {

        let ships = [5,4,3,3,2]; 
        let key = 0; 

        while (ships.length > 0) {
            // vertical or horizontal
            let direction = Math.random() < 0.5 ? 1 : 0; 
            let size = ships[0]; 
            let x = Math.floor(Math.random() * 10)
            let y = Math.floor(Math.random() * 10)
            let check = checkPlacement(x, y, size, direction, gridPopulatedAI); 
            if (check) {
                let populated = populateGrid(x, y, size, direction);
                gridPopulatedAI.push(...populated); 
                updateShipObject(key, size, [x, y], direction, shipPlacementAI);
                ships.shift(); 
                key++; 
            }
        }

    }

    function aiShipsGameboard() {
        for(let ship in shipPlacementAI) {
            playerControl.getPlayers()[1].gameboard.placeShip(shipPlacementAI[ship].position[0], 
            shipPlacementAI[ship].position[1], shipPlacementAI[ship].length, shipPlacementAI[ship].direction)
        }
    }

    // General functions


    function nextScreen(curr, next) {
        document.querySelector(`.${curr}`).classList.add('hidden'); 
        document.querySelector(`.${next}`).classList.remove('hidden'); 
    }



    return {
        playerControl
    }
    
})(); 