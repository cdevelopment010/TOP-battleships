const ship = require('../code/ship'); 
// console.log(ship(4)); 
// console.log("ship4 sunk? ", ship(4).isSunk()); 
// console.log("ship4 hit? ", ship(4).isHit()); 

describe('ship factory function', () => {
    test('hit function works with positive numbers', () => {
        expect(ship(4).hit(2)).toEqual();
    })

    test('isSunk should return true', () => {
        const ship2 = ship(2); 
        ship2.hit(0); 
        ship2.hit(1); 
        expect(ship2.isSunk()).toBeTruthy(); 
    })
})