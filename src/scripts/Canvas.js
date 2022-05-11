function styleCanvas(loc) {
    let canvas = document.querySelectorAll(`${loc} canvas`); 
    let squareSize; 
    canvas.forEach(c => {
        let ctx = c.getContext("2d"); 
        if (window.innerWidth < 500) {
            c.height = '300';
            c.width = '300';
            squareSize = 30; 
        } else {
            c.height = '500';
            c.width = '500';
            squareSize = 50; 

        }

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