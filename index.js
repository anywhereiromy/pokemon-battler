
function Pokemon(name, HP, attackDamage, sound, move, type = 'default') {
    this.name = name;
    this.HP = HP;
    this.attackDamage = attackDamage;
    this.sound = sound;
    this.move = move;       
    this.type = type;   
    if (this.type === 'fire') {
        this.strength = 'grass';    
        this.weakness = 'water'; 
    }   
    if (this.type === 'water') {
        this.strength = 'fire';    
        this.weakness = 'grass'; 
    }     
    if (this.type === 'grass') {
        this.strength = 'water';    
        this.weakness = 'fire'; 
    }     
    if (this.type === 'default') {
        this.strength = 'none';    
        this.weakness = 'none'; 
    }     
};

Pokemon.prototype.printDetails = function () {
    return this;
}

Pokemon.prototype.talk = function () {
    console.log(this.sound);
    return this.sound;
}

Pokemon.prototype.useYourMoves = function () {
    console.log(`${this.name} used ${this.move}!`);
    return `${this.name} used ${this.move}!`;
}


function Trainer(name) {
    this.name = name;
    this.pokedex = {};
    this.pokedex.numberOfPokemon = 0;
};

Trainer.prototype.catch = function (pokeballType) {
    if (pokeballType === 'pokeball') {
        if (Math.random() > 0.33) {
            console.log('Oh no... the Pokemon got away!')
        } else {
        let diglett = new Pokemon('diglett', 10, 10, 'squeaky child voice', 'dig');
        console.log(`${diglett.name} was caught`);
        this.pokedex.numberOfPokemon++;
        console.log(this.pokedex.numberOfPokemon);        
        this.pokedex[this.pokedex.numberOfPokemon] = diglett.name;
        console.log(this.pokedex);
        }
    }
    if (pokeballType === 'greatball') {
        if (Math.random() < 0.33) {
            console.log('Oh no... the Pokemon got away!')
        } else {
        let diglett = new Pokemon('diglett', 10, 10, 'squeaky child voice', 'dig');
        console.log(`${diglett.name} was caught`);
        this.pokedex.numberOfPokemon++;
        console.log(this.pokedex.numberOfPokemon);
        this.pokedex[this.pokedex.numberOfPokemon] = diglett.name;
        console.log(this.pokedex);
        }
    }
    if (pokeballType === 'masterball') {
        let diglett = new Pokemon('diglett', 10, 10, 'squeaky child voice', 'dig');
        console.log(`${diglett.name} was caught`);
        this.pokedex.numberOfPokemon++;
        console.log(this.pokedex.numberOfPokemon);
        this.pokedex[this.pokedex.numberOfPokemon] = diglett.name;
        console.log(this.pokedex);
    }
}

function Battle(trainer1, trainer2) {
    const pokemon1 = trainer1.pokedex[1];
    const pokemon2 = trainer2.pokedex[1];
};

Battle.prototype.fight = function () {
    let firstTurn;
    let secondTurn;
    if (Math.random() < 0.5) {
        console.log(`${trainer1.name} has won the coin toss!`);
        firstTurn = this.pokemon1;
        secondTurn = this.pokemon2;
    } else {
        console.log(`${trainer2.name} has won the coin toss!`);        
        firstTurn = this.pokemon2;
        secondTurn = this.pokemon1;
    }
    this.pokemon1;
    this.pokemon2;
}

module.exports = Pokemon;
module.exports = Trainer;
