import playerController from "./Players";
const game = () => {

    const form = document.querySelector('form'); 
    const formBtn = document.querySelector('form button'); 
    const playerControl = playerController(); 

    // new game
    const newGame = (e) => {
        console.log('form submitted!'); 
        e.preventDefault(); //Stop the form refreshing; 
        playerControl.createPlayer(form.querySelector('input').value);  
        form.querySelector('input').value = ''; 
        createBoard(); 
        placeShips(); 
    }

    const createBoard = () => {
        let boards = document.querySelectorAll('.board'); 

        boards.forEach((board, key) => {
            console.log("key", key);
            board.innerHTML = ''; 
            const container = document.createElement('div'); 
            for (let i = 0; i <= 9; i++){
                const row = document.createElement('div');
                for(let j = 0; j <= 9; j++) {
                    const cell = document.createElement('div'); 
                    cell.setAttribute('data-x', i); 
                    cell.setAttribute('data-y', j); 
                    cell.setAttribute('data-key', key);
                    if (key == 1) {
                        // event listener?
                        cell.addEventListener('click', function() {
                            console.log(this); 
                            let { status, aiStatus, xAi, yAi }= playerControl.attack(i, j); 
                            if (status == 'hit') {
                                document.querySelector(`[data-key='1'][data-x='${i}'][data-y='${j}']`).classList.add('hit'); 
                                console.log("check", document.querySelector(`[data-key='1'][data-x='${i}'][data-y='${j}']`)); 
                            } else if (status == 'miss') {
                                document.querySelector(`[data-key='1'][data-x='${i}'][data-y='${j}']`).classList.add('miss'); 
                            }

                            // update aiAttack
                            if (aiStatus == 'hit') {
                                document.querySelector(`[data-key='0'][data-x='${xAi}'][data-y='${yAi}']`).classList.add('hit'); 
                                console.log("check", document.querySelector(`[data-key='0'][data-x='${i}'][data-y='${j}']`)); 
                            } else if (aiStatus == 'miss') {
                                document.querySelector(`[data-key='0'][data-x='${xAi}'][data-y='${yAi}']`).classList.add('miss'); 
                                console.log("check", document.querySelector(`[data-key='0'][data-x='${i}'][data-y='${j}']`)); 
                            }
                        })
                    }
                    
                    row.append(cell); 
                }
                container.append(row);
            }
            container.className = 'gameboard'; 
            board.append(container);
        })
    }

    // randomly place ships (this is just for now)

    const placeShips = () => {
        const ships = [4,4,2,2,1,1,1]; 
        let players = playerControl.getPlayers(); 
        console.log(players[0].gameboard); 
        players.forEach(player => {
                
            player.gameboard.placeShip(0,0,4); 
            player.gameboard.placeShip(6,0,4); 
            player.gameboard.placeShip(2,2,2); 
            player.gameboard.placeShip(4,8,2); 
            player.gameboard.placeShip(0,9,1); 
            player.gameboard.placeShip(9,8,1); 
            player.gameboard.placeShip(6,5,1); 
        })

        players[0].gameboard.getBoard().forEach((row, rIndex) => {
            row.forEach((col, cIndex) => {
                if(col == 'SHIP'){
                    document.querySelector(`[data-x='${rIndex}'][data-y='${cIndex}']`).classList.add('ship'); 
                }
            })
        }); 
    }

    // check winner



    form.addEventListener('submit', newGame); 
    formBtn.addEventListener('click', newGame); 
    
}; 
game(); 