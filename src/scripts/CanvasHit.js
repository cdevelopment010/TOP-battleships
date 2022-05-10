function canvasHit(x, y, canvas, status) {
    let ctx = canvas.getContext("2d"); 
    let style = status == 'miss' ? '#EAEBAC' : '#DE7272'; 

    ctx.fillStyle = style; 
    ctx.setLineDash([0]); 

    ctx.beginPath(); 
    ctx.fillStyle = style; 
    console.log("rect to place", x*50, y*50);
    ctx.rect(x*50, y*50, 50, 50);
    ctx.fill(); 
    ctx.stroke(); 

    if (status == 'hit') {
        ctx.beginPath();
        ctx.moveTo((x*50) + 50, (y*50)); 
        ctx.lineTo((x*50), (y*50) + 50);
        ctx.strokeStyle = 'black'; 
        ctx.lineStyle = 'solid'; 
        ctx.stroke(); 
    }

    if (status == 'sunk') {
        ctx.beginPath();
        ctx.moveTo((x*50) + 50, y*50); 
        ctx.lineTo(x*50, (y*50) + 50);
        ctx.strokeStyle = 'black'; 
        ctx.stroke(); 

        ctx.beginPath();
        ctx.moveTo((x*50), (y*50)); 
        ctx.lineTo((x*50) + 50, (y*50) + 50);
        ctx.strokeStyle = 'black'; 
        ctx.stroke(); 
    }
}

module.exports = canvasHit; 