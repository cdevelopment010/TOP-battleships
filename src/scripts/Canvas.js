function styleCanvas(loc) {
    let canvas = document.querySelectorAll(`${loc} canvas`); 
    canvas.forEach(c => {
        let ctx = c.getContext("2d"); 
        c.height = '500';
        c.width = '500';

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
    })
    
    return canvas; 
}

module.exports = styleCanvas; 