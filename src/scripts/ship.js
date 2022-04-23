const ship = (len) => {
    let position = Array(len).fill(0); 
    const getPosition = () => position;
    const hit = (num) => {position[num] = 1; }
    const isHit = () => {
        return position.indexOf(1) == -1 ? false : true
    }
    const isSunk = () => {
        return position.every(pos => pos === 1);
    }

    return {
        length: len, 
        hit, 
        isSunk,
        isHit,
        getPosition
    }
}

module.exports = ship;