const ship = (len) => {
    let position = Array(len).fill(0); 
    let direction = 1; //1 is horizontal, 0 is vertical
    const getPosition = () => position;
    const hit = (num) => {position[num] = 1; }
    const isHit = () => {
        return position.indexOf(1) == -1 ? false : true
    }
    const isSunk = () => {
        return position.every(pos => pos === 1);
    }
    const getDirection = () => direction; 
    const updateDirection = () => {
        direction = (direction + 1) % 2;
    }

    return {
        length: len, 
        hit, 
        isSunk,
        isHit,
        getPosition, 
        getDirection,
        updateDirection
    }
}

module.exports = ship;