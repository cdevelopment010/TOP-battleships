import playerController from "./Players";
const game = (() => {

    let usernameBtn = document.getElementById('btn-username');



    usernameBtn.addEventListener('click', startGame); 

    function startGame() {
        console.log('btn clicked'); 
        // go to second screen; 
        let page1 = document.querySelector('.page1');
        let page2 = document.querySelector('.page2');

        page1.classList.add('hidden'); 
        page2.classList.remove('hidden'); 
        let canvas = styleCanvas('.page2'); 
        canvas.addEventListener('click', function( e ) {
            let x = Math.floor(e.offsetX / 50); 
            let y = Math.floor(e.offsetY / 50); 


            console.log("x:", x); 
            console.log("y:", y); 
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