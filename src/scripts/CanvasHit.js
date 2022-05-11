function canvasHit(x, y, canvas, status) {
    let ctx = canvas.getContext("2d"); 
    let style = status == 'miss' ? '#EAEBAC' : '#DE7272'; 
    let squareSize; 

    if (window.innerWidth < 500) {
        squareSize = 30; 
    } else {
        squareSize = 50; 

    }

    ctx.strokeStyle = 'black'; 
    ctx.fillStyle = style; 
    ctx.setLineDash([0]); 

    ctx.beginPath(); 
    ctx.fillStyle = style; 
    ctx.rect(x*squareSize, y*squareSize, squareSize, squareSize);
    ctx.fill(); 
    ctx.stroke(); 

    if (status == 'hit') {
        ctx.beginPath();
        ctx.moveTo((x*squareSize) + squareSize, (y*squareSize)); 
        ctx.lineTo((x*squareSize), (y*squareSize) + squareSize);
        ctx.strokeStyle = 'black'; 
        ctx.lineStyle = 'solid'; 
        ctx.stroke(); 
    }

    if (status == 'sunk') {
        ctx.beginPath();
        ctx.moveTo((x*squareSize) + squareSize, y*squareSize); 
        ctx.lineTo(x*squareSize, (y*squareSize) + squareSize);
        ctx.strokeStyle = 'black'; 
        ctx.stroke(); 

        ctx.beginPath();
        ctx.moveTo((x*squareSize), (y*squareSize)); 
        ctx.lineTo((x*squareSize) + squareSize, (y*squareSize) + squareSize);
        ctx.strokeStyle = 'black'; 
        ctx.stroke(); 
    }
}

module.exports = canvasHit; 