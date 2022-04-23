const Gameboard = require('../code/Gameboard'); 

// console.log(Gameboard().getBoard()); 


describe.skip('Gameboard', () => {
    test('contains property getBoard', () => {
        expect(Gameboard()).toHaveProperty('getBoard')
    })

    test('Initiall, board should be 10x10 null', () => {
        expect(Gameboard().getBoard()).toEqual(
            [
                [null, null, null,null, null, null,null, null, null,null],
                [null, null, null,null, null, null,null, null, null,null],
                [null, null, null, null, null, null,null, null, null,null],
                [null, null, null,null, null, null,null, null, null,null],
                [null, null, null,null, null, null,null, null, null,null],
                [null, null, null,null, null, null,null, null, null,null],
                [null, null, null,null, null, null,null, null, null,null],
                [null, null, null,null, null, null,null, null, null,null],
                [null, null, null,null, null, null,null, null, null,null],
                [null, null, null,null, null, null,null, null, null,null]
              ])
    })

    test('place ship in upper left corner', () => {
        let board = Gameboard(); 
        // console.log(board.getBoard()[0])
        board.placeShip(0,0,3); 
        // console.log(board.getBoard());
    //     expect(board.getBoard()).toEqual(
    //         [
    //             ['SHIP', 'SHIP', 'SHIP',null, null, null,null, null, null,null],
    //             [null, null, null,null, null, null,null, null, null,null],
    //             [null, null, null, null, null, null,null, null, null,null],
    //             [null, null, null,null, null, null,null, null, null,null],
    //             [null, null, null,null, null, null,null, null, null,null],
    //             [null, null, null,null, null, null,null, null, null,null],
    //             [null, null, null,null, null, null,null, null, null,null],
    //             [null, null, null,null, null, null,null, null, null,null],
    //             [null, null, null,null, null, null,null, null, null,null],
    //             [null, null, null,null, null, null,null, null, null,null]
    //           ])
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

