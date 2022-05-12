const getElLoc = require('./getEl'); 

function styleCanvas(loc) {
    let canvas = document.querySelectorAll(`${loc} canvas`); 
    let squareSize; 
    canvas.forEach((c, key) => {
        

        let ctx = c.getContext("2d"); 
        if (window.innerWidth < 700) {
            c.height = '300';
            c.width = '300';
            squareSize = 30; 
        } else {
            c.height = '500';
            c.width = '500';
            squareSize = 50; 
            
        }


        const overlay = document.querySelectorAll(`${loc} .overlay`); 
        overlay[key].classList.add('hidden'); 
        const {left, right, top, bottom} = getElLoc(c); 
        overlay[key].style.left = left + "px"; 
        overlay[key].style.height = c.height + "px"; 
        overlay[key].style.top = top + "px"; 
        overlay[key].style.width = c.width + "px"; 
        
        
        for (let i = 0; i <=9; i++){
            //columns
            ctx.moveTo(i*squareSize, 0); 
            ctx.beginPath(); 
            ctx.rect(i*squareSize, 0, squareSize, c.width); 
            ctx.strokeStyle = 'white'; 
            ctx.setLineDash([10]);
            ctx.stroke();

            //rows
            ctx.beginPath(); 
            ctx.rect(0,i*squareSize, c.height, squareSize); 
            ctx.strokeStyle = 'white'; 
            ctx.setLineDash([10]);
            ctx.stroke();
        }
    })
    
    return canvas; 
}

module.exports = styleCanvas; 