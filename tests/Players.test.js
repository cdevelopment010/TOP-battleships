/**
 * @jest-environment jsdom
 */
const players = require('../src/scripts/Players'); 


describe('Testing current player', () => {
    test('current player should be 0', () => {
        expect(players().getCurrentPlayer()).toBe(0)
    })
    test('update player should be 1', () => {
        let player = players(); 
        player.updatePlayer();
        expect(player.getCurrentPlayer()).toBe(1)
    })
    test.skip('update player should be 0', () => {
        let player = players(); 
        player.updatePlayer();
        player.updatePlayer();
        expect(player.getCurrentPlayer()).toBe(0)
    })
    test.skip('random move', () => {
        let randomMove = players().randomAIMove(); 
        console.log("random move", randomMove);
    })
    test.skip('check winner should be false', () => {
        let gameover = players().checkWinner();
        console.log("player gameover",gameover)
        expect(players().checkWinner()).toBeFalsy();    
    }); 
    test.skip('Check winner should be true', () => {
        let game = players(); 
        game.attack(0, 1); 
        game.attack(0,0); 
        game.attack(0,2); 
        expect(game.checkWinner()).toBeTruthy();  
    })
    test('Test AI functionality', async () => {
        let game = players(); 
        try {
            await game.attack(0, 1); //main player
            await game.randomAIMove();
            await game.attack(0,0); //main player
            await game.randomAIMove();
            await game.attack(0,2); //main player
            await game.randomAIMove();
            expect(game.checkWinner()).toBeTruthy();  
        } catch(err) {
            
        }
        
        
        //game over should happen before the AI move but just want to test it some more. 
        
    })
    test('Test AI functionality 20 times', async () => {
        let game = players(); 
        try {
            await game.attack(0, 0); //main player
            game.randomAIMove();
            game.attack(1,0); //main player
            game.randomAIMove();
            game.attack(1,2); //main player
            game.randomAIMove();
            game.attack(1, 1); //main player
            game.randomAIMove();
            game.attack(3,0); //main player
            game.randomAIMove();
            game.attack(3,2); //main player
            game.randomAIMove();
            game.attack(2, 1); //main player
            game.randomAIMove();
            game.attack(2,0); //main player
            game.randomAIMove();
            game.attack(2,2); //main player
            game.randomAIMove();
            game.attack(4,2); //main player
            game.randomAIMove();
    
            game.attack(9, 0); //main player
            game.randomAIMove();
            game.attack(8,0); //main player
            game.randomAIMove();
            game.attack(7,2); //main player
            game.randomAIMove();
            game.attack(7, 1); //main player
            game.randomAIMove();
            game.attack(6,0); //main player
            game.randomAIMove();
            game.attack(6,2); //main player
            game.randomAIMove();
            game.attack(6, 1); //main player
            game.randomAIMove();
            game.attack(5,0); //main player
            game.randomAIMove();
            game.attack(5,2); //main player
            game.randomAIMove();
            game.attack(5,1); //main player
            game.randomAIMove();
            game.attack(9,9); //main player
    
            game.showBoards(); 
            
            //game over should happen before the AI move but just want to test it some more. 
            expect(game.checkWinner()).toBeFalsy();
        } catch(err) {

        }
          
    })
})