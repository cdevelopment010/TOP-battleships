const Gameboard = require('../src/scripts/Gameboard'); 

// console.log(Gameboard().getBoard()); 


describe('Gameboard', () => {
    test('contains property getBoard', () => {
        expect(Gameboard()).toHaveProperty('getBoard')
    })

    test('Initiall, board should be 10x10 ""', () => {
        expect(Gameboard().getBoard()).toEqual(
            [
                ['', '', '','', '', '','', '', '',''],
                ['', '', '','', '', '','', '', '',''],
                ['', '', '', '', '', '','', '', '',''],
                ['', '', '','', '', '','', '', '',''],
                ['', '', '','', '', '','', '', '',''],
                ['', '', '','', '', '','', '', '',''],
                ['', '', '','', '', '','', '', '',''],
                ['', '', '','', '', '','', '', '',''],
                ['', '', '','', '', '','', '', '',''],
                ['', '', '','', '', '','', '', '','']
              ])
    })

    test('place ship in upper left corner', () => {
        let board = Gameboard(); 
        console.log(board.getBoard()[0])
        board.placeShip(0,0,3); 
        console.log(board.getBoard());
        expect(board.getBoard()).toEqual(
            [
                ['SHIP', 'SHIP', 'SHIP','', '', '','', '', '',''],
                ['', '', '','', '', '','', '', '',''],
                ['', '', '', '', '', '','', '', '',''],
                ['', '', '','', '', '','', '', '',''],
                ['', '', '','', '', '','', '', '',''],
                ['', '', '','', '', '','', '', '',''],
                ['', '', '','', '', '','', '', '',''],
                ['', '', '','', '', '','', '', '',''],
                ['', '', '','', '', '','', '', '',''],
                ['', '', '','', '', '','', '', '','']
              ])
    })


    test('attack ship in upper left corner', () => {
        let board = Gameboard(); 
        board.placeShip(0,0,3);
        board.receiveAttack(0,0);

    })
    test('miss attach for ship in upper left corner', () => {
        let board = Gameboard(); 
        board.placeShip(0,0,3);
        board.receiveAttack(9,9);

    })

    test('check gameover', () => {
        let board = Gameboard(); 
        board.placeShip(0,0,3);
        board.receiveAttack(0,0);
        board.receiveAttack(0,1);
        board.receiveAttack(0,2);

        expect(board.gameover()).toBeTruthy();
    })
    
})

