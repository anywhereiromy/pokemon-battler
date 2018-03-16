
class Pokemon {
    constructor(name, HP, attackDamage, attackDamage2, sound, move, move2, type = 'default') {
        this.name = name;
        this.HP = HP;
        this.attackDamage = attackDamage;
        this.attackDamage2 = attackDamage2;        
        this.sound = sound;
        this.move = move;   
        this.move2 = move2;       
        this.type = type;
    }
    printDetails() {
        return this;
    }
            
    talk() {
        console.log(this.sound);
        return this.sound;
    }
            
    useYourMoves(chosenMove) {
        console.log(`${this.name} used ${this.chosenMove}!`);
        return `${this.name} used ${this.chosenMove}!`;
    }
}

class Fire extends Pokemon {
    constructor(name, HP, attackDamage, attackDamage2, sound, move, move2, type = 'default', strength, weakness) {
        super(name, HP, attackDamage, attackDamage2, sound, move, move2, type = 'default')
        this.type = 'fire';
        this.strength = 'grass';    
        this.weakness = 'water';     
    }
}

class Water extends Pokemon {
    constructor(name, HP, attackDamage, attackDamage2, sound, move, move2, type = 'default', strength, weakness) {
        super(name, HP, attackDamage, attackDamage2, sound, move, move2, type = 'default')
        this.type = 'water';
        this.strength = 'fire';    
        this.weakness = 'grass';      
    }
}

class Grass extends Pokemon {
    constructor(name, HP, attackDamage, attackDamage2, sound, move, move2, type = 'default', strength, weakness) {
        super(name, HP, attackDamage, attackDamage2, sound, move, move2, type = 'default')
        this.type = 'grass';
        this.strength = 'water';    
        this.weakness = 'fire';      
    }
}

class Default extends Pokemon {
    constructor(name, HP, attackDamage, attackDamage2, sound, move, move2, type = 'default', strength, weakness) {
        super(name, HP, attackDamage, attackDamage2, sound, move, move2, type = 'default')
        this.type = 'default';
        this.strength = 'none';    
        this.weakness = 'none';      
    }
}

class Trainer {
    constructor(name) {
        this.name = name;
        this.pokedex = {};
        this.pokedex.numberOfPokemon = 0;
    }

    catch(pokeballType) {
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

    addPokemon(name, HP = 70, attackDamage = 1, attackDamage2, sound = 'whine', move = 'struggle', move2 = 'struggle', type = 'default') {
        this.pokedex.numberOfPokemon++;
        this.pokedex[this.pokedex.numberOfPokemon] = new Pokemon(name, HP, attackDamage, attackDamage2, sound, move, move2, type);
    
    }
};


class Battle {
    constructor (trainer1, trainer2) {
        this.trainer1 = trainer1;
        this.trainer2 = trainer2;
        this.pokemon1 = trainer1.pokedex[1];
        this.pokemon2 = trainer2.pokedex[1];
        // console.log(this.pokemon1);
        // console.log(this.pokemon2)
    }
    fight () {
        let firstTurn;
        let secondTurn;
        if (Math.random() < 0.5) {
            console.log(`${this.trainer1.name} has won the coin toss!`);
            firstTurn = this.pokemon1;
            secondTurn = this.pokemon2;
        } else {
            console.log(`${this.trainer2.name} has won the coin toss!`);        
            firstTurn = this.pokemon2;
            secondTurn = this.pokemon1;
        }
        console.log(firstTurn);
        console.log(secondTurn)
        let effect;
        let effect2;
        let pokemon1Attack = firstTurn.attackDamage;
        let pokemon2Attack = secondTurn.attackDamage;
        if (firstTurn.type === secondTurn.weakness){pokemon1Attack *= 1.25; effect = 'It`s super effective!!'}
        if (firstTurn.type === secondTurn.strength){pokemon1Attack *= 0.75; effect = 'It`s not very effective :('};
        if (secondTurn.type === firstTurn.weakness){pokemon2Attack *= 1.25; effect2 = 'It`s super effective!!'}
        if (secondTurn.type === firstTurn.strength){pokemon2Attack *= 0.75; effect2 = 'It`s not very effective :('};
    
        while (firstTurn.HP > 0 && secondTurn.HP > 0){
           if (firstTurn.HP > 0){
            secondTurn.HP  =  secondTurn.HP - pokemon1Attack;
            console.log(`${firstTurn.name} used ${firstTurn.move}\n ${firstTurn.sound}.\n${effect}`)
            console.log(`${secondTurn.name} has dropped to ${secondTurn.HP} HP`)
        };
            if (secondTurn.HP > 0){    
          firstTurn.HP = firstTurn.HP - pokemon2Attack;
          console.log(`${secondTurn.name} used ${secondTurn.move}\n ${secondTurn.sound}.\n${effect2}`)
        //   let pokemonSound = new Sound(`/pokemonNoises/${secondTurn.name}.mp3`);
        //     pokemonSound.play();
          console.log(`${firstTurn.name} has dropped to ${firstTurn.HP} HP`)
            }
          if (secondTurn.HP <= 0) console.log(`${firstTurn.name} wins!!!!`);
           if (firstTurn.HP <= 0){ console.log(`${secondTurn.name} wins!!!`)};
        }
    
        };
    
    // pokemonNoise (name) {
    //     pokemonSound = new Sound(`/pokemonNoises/${name}.mp3`);
    //     mySound.play();
    // }
};


module.exports = {Pokemon, Trainer, Battle};
 

