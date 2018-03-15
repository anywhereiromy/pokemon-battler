const {expect} = require('chai');
const {Pokemon, Trainer, Battle} = require('../index.js');

//const Battle = require('../index.js');

describe('Pokemon', function () {
    it('creates a Pokemon object with a name property', function () {
        const bulbasaur = new Pokemon('bulbasaur');
        expect(bulbasaur).to.hasOwnProperty('name');
        expect(bulbasaur.name).to.equal('bulbasaur');
    });
    it('creates a Pokemon object with the correct HP, attackDamage, sound and move property', function () {
        const bulbasaur = new Pokemon('bulbasaur', 100, 50, 'bulba-growl', 'vine whip');
        expect(bulbasaur).to.hasOwnProperty('HP');
        expect(bulbasaur.HP).to.equal(100);        
        expect(bulbasaur).to.hasOwnProperty('attackDamage');
        expect(bulbasaur.attackDamage).to.equal(50);        
        expect(bulbasaur).to.hasOwnProperty('sound');
        expect(bulbasaur.sound).to.equal('bulba-growl');        
        expect(bulbasaur).to.hasOwnProperty('move');
        expect(bulbasaur.move).to.equal('vine whip');
        console.log(bulbasaur);     
    });
    it('creates a Pokemon object with the correct strength, weakness and type', function () {
        const bulbasaur = new Pokemon('bulbasaur', 100, 25, 'bulba-growl', 'vine whip', 'grass');
        expect(bulbasaur).to.hasOwnProperty('strength');
        expect(bulbasaur.strength).to.equal('water');        
        expect(bulbasaur).to.hasOwnProperty('weakness');
        expect(bulbasaur.weakness).to.equal('fire');        
        expect(bulbasaur).to.hasOwnProperty('type');
        expect(bulbasaur.type).to.equal('grass'); 
        const blastoise = new Pokemon('blastoise', 100, 12, 'deep rumbling noise', 'water cannon', 'water')    
        expect(blastoise).to.hasOwnProperty('strength');
        expect(blastoise.strength).to.equal('fire');        
        expect(blastoise).to.hasOwnProperty('weakness');
        expect(blastoise.weakness).to.equal('grass');        
        expect(blastoise).to.hasOwnProperty('type');
        expect(blastoise.type).to.equal('water');       
    });
    it('printDetails method prints a Pokemon object', function () {
        const bulbasaur = new Pokemon('bulbasaur', 100, 50, 'bulba-growl', 'vine whip', 'grass');      
        expect(typeof bulbasaur.printDetails()).to.equal('object');          
    });
    it("talk method returns Pokemon's sound", function () {
        const bulbasaur = new Pokemon('bulbasaur', 100, 50, 'bulba-growl', 'vine whip', 'grass');      
        expect(bulbasaur.talk()).to.equal('bulba-growl');          
    });
    it("useYourMoves method returns Pokemon's sound", function () {
        const bulbasaur = new Pokemon('bulbasaur', 100, 50, 'bulba-growl', 'vine whip', 'grass');      
        expect(bulbasaur.useYourMoves()).to.equal('bulbasaur used vine whip!');          
    });
});

describe('Trainer', function () {
   it('creates a Trainer object with a name property', function () {
        const ash = new Trainer('ash');
        expect(ash).to.hasOwnProperty('name');
        expect(ash.name).to.equal('ash');
    });

    it('creates a set within the Trainer object to store Pokemon in', function () {
        const ash = new Trainer('ash');
        expect(ash).to.hasOwnProperty('pokeballs');
        expect(typeof ash.pokedex).to.equal('object');
    });
    it('catch method potentially catches a pokemon depending on odds and stores pokemon object in pokedex', function () {
        const ash = new Trainer('ash');
        ash.catch('masterball');
        expect(ash.pokedex.numberOfPokemon).to.equal(1);
        ash.catch('masterball');
        expect(ash.pokedex.numberOfPokemon).to.equal(2);
        expect(ash.pokedex).to.hasOwnProperty('1');
        expect(ash.pokedex).to.hasOwnProperty('2');        
    });
    it('add pokemon to trainers pokedex without them having to be caught', function () {
        const ash = new Trainer('ash');
        const misty = new Trainer('misty')
        ash.addPokemon('bulbasaur', 100, 25, 'bulba-growl', 'vine whip', 'grass');
        expect(ash.pokedex.numberOfPokemon).to.equal(1);
        misty.addPokemon('blastoise', 100, 12, 'deep rumbling noise', 'water cannon', 'water');
        expect(misty.pokedex.numberOfPokemon).to.equal(1);
        expect(ash.pokedex).to.hasOwnProperty('1');
        //console.log(ash.pokedex)
        expect(misty.pokedex).to.hasOwnProperty('2');     
        //console.log(misty.pokedex)   
    });

});


    describe.only('Battle', function() {
        it('creates a Trainer object with a name property', function () {
            const ash = new Trainer('ash');
            const misty = new Trainer('misty');
            ash.addPokemon('bulbasaur', 100, 25, 'bulba-growl', 'vine whip', 'grass');
            misty.addPokemon('blastoise', 100, 12, 'deep rumbling noise', 'water cannon', 'water');
            const battleOff = new Battle(ash, misty);
            //console.log(battleOff)
            battleOff.fight()
        });
    });

    




// name, HP, attackDamage, sound, move, strength = 'none', weakness = 'none', type = 'default'