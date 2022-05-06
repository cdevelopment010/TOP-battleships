import playerController from "./Players";
const game = () => {

    const form = document.querySelector('form'); 
    const formBtn = document.querySelector('form button'); 
    const playerControl = playerController();         
    let currentShip;
    let ships;

    // new game
    const newGame = (e) => {
        console.log('form submitted!'); 
        e.preventDefault(); //Stop the form refreshing; 
        playerControl.createPlayer(form.querySelector('input').value);  
        form.querySelector('input').value = ''; 
        createBoard(); 
        showShips(); 
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
                        cell.addEventListener('click', function(){
                            attack(i, j)
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

    function showShips() {
        let main = document.querySelector('main'); 
        const shipsContainer = document.createElement('article'); 
        const ships = [4,4,2,2,1,1,1]; 
        for(let i = 0; i < ships.length; i++) {
            const div = document.createElement('div'); 
            for (let j = 0; j < ships[i]; j++) {
                let square = document.createElement('div'); 
                square.className = 'square'; 
                div.append(square); 
            }
            div.className = `ship ship${ships[i]}`; 
            div.setAttribute('data-length', ships[i]); 
            shipsContainer.append(div); 
        }
        // shipsContainer.insertAdjacentElement("beforeend")
        main.insertAdjacentElement("afterend",shipsContainer); 
    }

    // randomly place ships (this is just for now)
    function placeShipsAI() {
        const ships = [4,4,2,2,1,1,1]; 
    }



    function placeShipOnClick() {
        // remove selected from all other ships;
        ships.forEach(ship => ship.classList.remove('selected')); 
        currentShip = this; 
        this.classList.add('selected'); 
    }

    const placeShips = () => {
        let players = playerControl.getPlayers(); 
        ships = document.querySelectorAll('article .ship'); 
        console.log(ships); 

        ships.forEach(ship => {
            ship.addEventListener('click', placeShipOnClick.bind(ship), {once: true})
        })


        const playerBoard = document.querySelector('.board1 .gameboard'); 
        console.log(playerBoard); 
        for (let i = 0; i <= 9; i++) {
            for(let j = 0; j <= 9; j++) {
                let cell = document.querySelector(`[data-key='0'][data-x='${i}'][data-y='${j}']`); 
                cell.addEventListener('click', function() {
                    if (cell.classList.contains('ship')) {
                        alert(`can't place ship here`); 
                    }
                    if (currentShip != null & !cell.classList.contains('ship')) {
                        console.log("place ship"); 
                        let len = currentShip.getAttribute('data-length');
                        players[0].gameboard.placeShip(i, j, len); 
                        currentShip.classList.remove('selected'); 
                        currentShip.classList.add('used'); 
                        // currentShip.removeEventListener('click', placeShipOnClick.bind(currentShip)); 
                        currentShip = null;
                        for(let k = 0; k < len; k++) {
                            document.querySelector(`[data-key='0'][data-x='${i+k}'][data-y='${j}']`).classList.add('ship');
                        } 
                    }
                })
            }
        }
    };

    // check winner




    // attack
    function attack(i, j) {
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
            console.log("check", document.querySelector(`[data-key='0'][data-x='${xAi}'][data-y='${yAi}']`)); 
        }
    }

    form.addEventListener('submit', newGame); 
    formBtn.addEventListener('click', newGame); 
    
}; 
game(); 