import playerController from "./Players";
const game = (() => {
    const playerControl = playerController();      
    let usernameBtn = document.getElementById('btn-username');
    let username = document.getElementById('username'); 
    const gridPopulated = []; //use this to check coords of ship placement and to place on gameboard before screen 3; 

    usernameBtn.addEventListener('click', startGame); 



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

    //need to split this out into different functions
    function startGame() {
        console.log('btn clicked'); 
        let usernamePass = validateUsername(); 
        if (!usernamePass) {
            return; 
        }
        //create player 
        playerControl.createPlayer(username.value); 
        console.log("players:", playerControl.getPlayers()[0].gameboard); 

        // go to second screen; 
        let page1 = document.querySelector('.page1');
        let page2 = document.querySelector('.page2');

        page1.classList.add('hidden'); 
        page2.classList.remove('hidden'); 
        generateShips(); 
        let canvas = styleCanvas('.page2'); 
        // canvas.addEventListener('click', function( e ) {
        //     let x = Math.floor(e.offsetX / 50); 
        //     let y = Math.floor(e.offsetY / 50); 
        //     console.log("x:", x); 
        //     console.log("y:", y); 
        // })

        
    }


    function dropShip(x, y, size, canvas, direction) {
        console.log('drop ship')
        const ctx = canvas.getContext("2d")
        for (let i = 0; i < size; i++) {
            ctx.beginPath(); 
            if (direction === 'vertical') {
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
        shipContainer.forEach(container => {
            container.draggable = true; 
            container.classList.add('draggable'); 
            container.addEventListener('click', () => {
                container.classList.toggle('vertical'); 
            })
        })
        manageDrag(); 
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

        return grid; 
    }

    function manageDrag() {
        let draggables = document.querySelectorAll('.draggable'); 
        let canvas = document.querySelector('.page2 canvas'); 
        let x = 0, y = 0; 

        canvas.addEventListener('dragover', ( e ) => {
            e.preventDefault(); 
            console.log('drag over'); 
            x = Math.floor(e.offsetX / 50) * 50; 
            y = Math.floor(e.offsetY / 50) * 50; 
        })
        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', () => {
                console.log('drag start'); 
                //add class to tell we are currently dragging
                draggable.classList.add('dragging'); 
            })

            draggable.addEventListener('dragend', () => {
                console.log('drag end'); 
                //add class to tell we are currently dragging
                draggable.classList.remove('dragging'); 
                let canvas = document.querySelector('.page2 canvas'); 
                let direction = draggable.classList.contains('vertical') ? 'vertical' : 'horizontal'; 
                let size = draggable.childElementCount; 
                dropShip(x, y, size, canvas, direction); 
                let populated = populateGrid(x / 50, y/50, size, direction);
                gridPopulated.push(populated);  
                draggable.innerHTML = ''; 

            })
        })
    }


    function styleCanvas(loc) {
        let canvas = document.querySelector(`${loc} canvas`); 
        let ctx = canvas.getContext("2d"); 
        console.log(canvas); 
        canvas.height = '500';
        canvas.width = '500';

        for (let i = 0; i <=9; i++){
            //columns
            ctx.moveTo(i*50, 0); 
            ctx.beginPath(); 
            ctx.rect(i*50, 0, 50, 500); 
            ctx.strokeStyle = 'white'; 
            ctx.setLineDash([10]);
            ctx.stroke();

            //rows
            ctx.beginPath(); 
            ctx.rect(0,i*50, 500, 50); 
            ctx.strokeStyle = 'white'; 
            ctx.setLineDash([10]);
            ctx.stroke();
        }
        return canvas; 
    }
})(); 