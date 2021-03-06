const inquirer = require('inquirer');
const {Pokemon, Trainer, Battle} = require('./index.js');
const player = require('play-sound')(opts = {})
const pokemonGif = require('pokemon-gif')

let playerInputArray = [];

player.play('theme.mp3', function(err){
    if (err) throw err
  })
  

inquirer.prompt([
    {
        type: 'input',
        name: 'trainerName',
        message: 'Type your trainer name',
        input: []
        
    }
    
]).then( trainerName =>   Promise.all([inquirer.prompt([
    {
        type: 'list',
        name: 'type',
        message: 'Choose your type of Pokemon',
        choices: ['fire', 'grass', 'water', 'luckyDip'],
        
    }
]), trainerName]).then(([{type}, {trainerName}]) => {

    //console.log(type, trainerName)

        const array = [type, trainerName];
        
       
        if (type === 'grass') {
          return Promise.all([inquirer.prompt([
                {
                    type: 'list',
                    name: 'pokemon',
                    message: 'Choose your Pokemon',
                    choices: ['Bulbasaur', 
                        'Ivysaur',
                        'Venusaur',
                        'Oddish',
                        'Gloom',
                        'Vileplume',
                        'Paras',
                        'Parasect',
                        'Bellsprout',
                        'Weepinbell',
                        'Victreebel',
                        'Exeggcute',
                        'Exeggutor',
                        'Tangela'
                        ]
                        
                    }])
                    
            , ...array])
      
        } else if (type === 'water') {
               return Promise.all([inquirer.prompt([
                    {
                        type: 'list',
                        name: 'pokemon',
                        message: 'Choose your Pokemon',
                        choices: ['Squirtle',
                        'Wartortle',
                        'Blastoise',
                        'Psyduck',
                        'Golduck',
                        'Poliwag',
                        'Poliwhirl',
                        'Poliwrath',
                        'Tentacool',
                        'Tentacruel',
                        'Slowpoke',
                        'Slowbro',
                        'Seel',
                        'Dewgong',
                        'Shellder',
                        'Cloyster',
                        'Krabby',
                        'Kingler',
                        'Horsea',
                        'Seadra',
                        'Goldeen',
                        'Seaking',
                        'Staryu',
                        'Starmie',
                        'Magikarp',
                        'Gyarados',
                        'Lapras',
                        'Vaporeon',
                        'Omanyte',
                        'Omastar',
                        'Kabuto',
                        'Kabutops']
                    }]), ...array]
                )
        } else if (type === 'luckyDip') {
            return Promise.all([inquirer.prompt([
                 {
                     type: 'list',
                     name: 'pokemon',
                     message: 'Choose your Pokemon',
                     choices: ['mysteryPokemon']
                 }]), ...array]
             )
        } else if (type === 'fire') {
                return Promise.all([inquirer.prompt([
                    {
                        type: 'list',
                        name: 'pokemon',
                        message: 'Choose your Pokemon',
                        choices: ['Charmander',
                        'Charmeleon',
                        'Charizard',
                        'Vulpix',
                        'Ninetales',
                        'Growlithe',
                        'Arcanine',
                        'Ponyta',
                        'Rapidash',
                        'Magmar',
                        'Flareon',
                        'Moltres']
                    }]), ...array]
                )
            }

}).then(([{pokemon}, type, name]) => {
       return Promise.all([inquirer.prompt([
        {
            type: 'list',
            name: 'pokemonMoves',
            message: 'Pick your Pokemons move',
            choices: ['punch', 'kick', 'bitchslap', 'hide', 'laserCannon', 'mysteryMove']
            
        }]), pokemon, type, name])
       
})).then(([{pokemonMoves}, pokemon, type, name]) => {
    return Promise.all([inquirer.prompt([
        {
            type: 'list',
            name: 'pokemonMoves2',
            message: 'Pick your Pokemons move',
            choices: ['punch', 'kick', 'bitchslap', 'hide', 'laserCannon', 'mysteryMove']
            
        }]), pokemonMoves, pokemon, type, name])
}).then(([{pokemonMoves2}, pokemonMoves, pokemon, type, name]) => {
    playerInputArray.push(pokemonMoves2, pokemonMoves, pokemon, type, name);
   // console.log(playerInputArray);
    trainerName1 = playerInputArray[4];
    pokeType = playerInputArray[3];
    pokeName = playerInputArray[2];
    pokeMove1 = playerInputArray[1];
    pokeMove2 = playerInputArray[0]; 
    HP = (Math.floor((Math.random() * 20)) + 80);
    attackDamage = (Math.floor((Math.random() * 15)) + 10);
    attackDamage2 = (Math.floor((Math.random() * 15)) + 10);
    playerOne = new Trainer(trainerName1);
    if (pokeType === 'fire'){
        playerOne.addPokemonF(pokeName, HP, attackDamage, attackDamage2, sound, pokeMove1, pokeMove2, pokeType);
    }else if (pokeType === 'water'){
        playerOne.addPokemonW(pokeName, HP, attackDamage, attackDamage2, sound, pokeMove1, pokeMove2, pokeType);
        if(pokemon === 'Blastoise'){
            player.play('blastoise.mp3', function(err){
                if (err) throw err
             })
        }
    }else if (pokeType === 'grass'){
        playerOne.addPokemonG(pokeName, HP, attackDamage, attackDamage2, sound, pokeMove1, pokeMove2, pokeType);
        if(pokemon === 'Bulbasaur'){
            player.play('bulbasaur.mp3', function(err){
                if (err) throw err
             })
        }
    }else if (pokeType === 'luckyDip') {
        playerOne.addPokemonD(pokeName, HP, attackDamage, attackDamage2, sound, pokeMove1, pokeMove2, pokeType);
        if(pokemon === 'mysteryPokemon'){
            player.play('diglett.mp3', function(err){
                if (err) throw err
             })
        }
    }
    // playerOne.catch('masterball');
    // playerOne.catch('masterball');
    // playerOne.catch('masterball');
    // playerOne.catch('masterball');
    // playerOne.catch('masterball');
    
    //console.log(playerOne);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'trainerName',
            message: 'Type your trainer name',
            input: []
            
        }
        
    ]).then( trainerName =>   Promise.all([inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'Choose your type of Pokemon',
            choices: ['fire', 'grass', 'water', 'luckyDip'],
            
        }
    ]), trainerName]).then(([{type}, {trainerName}]) => {
    
       // console.log(type, trainerName)
    
            const array = [type, trainerName];
            
           
            if (type === 'grass') {
              return Promise.all([inquirer.prompt([
                    {
                        type: 'list',
                        name: 'pokemon',
                        message: 'Choose your Pokemon',
                        choices: ['Bulbasaur', 
                            'Ivysaur',
                            'Venusaur',
                            'Oddish',
                            'Gloom',
                            'Vileplume',
                            'Paras',
                            'Parasect',
                            'Bellsprout',
                            'Weepinbell',
                            'Victreebel',
                            'Exeggcute',
                            'Exeggutor',
                            'Tangela'
                            ]
                        }])
    
                , ...array])
            
            } else if (type === 'water') {
                   return Promise.all([inquirer.prompt([
                        {
                            type: 'list',
                            name: 'pokemon',
                            message: 'Choose your Pokemon',
                            choices: ['Squirtle',
                            'Wartortle',
                            'Blastoise',
                            'Psyduck',
                            'Golduck',
                            'Poliwag',
                            'Poliwhirl',
                            'Poliwrath',
                            'Tentacool',
                            'Tentacruel',
                            'Slowpoke',
                            'Slowbro',
                            'Seel',
                            'Dewgong',
                            'Shellder',
                            'Cloyster',
                            'Krabby',
                            'Kingler',
                            'Horsea',
                            'Seadra',
                            'Goldeen',
                            'Seaking',
                            'Staryu',
                            'Starmie',
                            'Magikarp',
                            'Gyarados',
                            'Lapras',
                            'Vaporeon',
                            'Omanyte',
                            'Omastar',
                            'Kabuto',
                            'Kabutops']
                        }]), ...array]
                    )
            } else if (type === 'luckyDip') {
                return Promise.all([inquirer.prompt([
                     {
                         type: 'list',
                         name: 'pokemon',
                         message: 'Choose your Pokemon',
                         choices: ['mysteryPokemon']
                     }]), ...array]
                 )
            } else if (type === 'fire') {
                    return Promise.all([inquirer.prompt([
                        {
                            type: 'list',
                            name: 'pokemon',
                            message: 'Choose your Pokemon',
                            choices: ['Charmander',
                            'Charmeleon',
                            'Charizard',
                            'Vulpix',
                            'Ninetales',
                            'Growlithe',
                            'Arcanine',
                            'Ponyta',
                            'Rapidash',
                            'Magmar',
                            'Flareon',
                            'Moltres']
                        }]), ...array]
                    )
                }
    
    }).then(([{pokemon}, type, name]) => {
           return Promise.all([inquirer.prompt([
            {
                type: 'list',
                name: 'pokemonMoves',
                message: 'Pick your Pokemons move',
                choices: ['punch', 'kick', 'bitchslap', 'hide', 'laserCannon', 'mysteryMove']
                
            }]), pokemon, type, name])
           
    })).then(([{pokemonMoves}, pokemon, type, name]) => {
        return Promise.all([inquirer.prompt([
            {
                type: 'list',
                name: 'pokemonMoves2',
                message: 'Pick your Pokemons move',
                choices: ['punch', 'kick', 'bitchslap', 'hide', 'laserCannon', 'mysteryMove']
                
            }]), pokemonMoves, pokemon, type, name])
    }).then(([{pokemonMoves2}, pokemonMoves, pokemon, type, name]) => {
        playerInputArray.push(pokemonMoves2, pokemonMoves, pokemon, type, name);
       // console.log(playerInputArray);

        trainerName1 = playerInputArray[9];
        pokeType = playerInputArray[8];
        pokeName = playerInputArray[7];
        pokeMove1 = playerInputArray[6];
        pokeMove2 = playerInputArray[5]; 
        HP = (Math.floor((Math.random() * 20)) + 80);
        attackDamage = (Math.floor((Math.random() * 15)) + 10);
        attackDamage2 = (Math.floor((Math.random() * 15)) + 10);
        playerTwo = new Trainer(trainerName1);
        if (pokeType === 'fire'){
            playerTwo.addPokemonF(pokeName, HP, attackDamage, attackDamage2, sound, pokeMove1, pokeMove2, pokeType);
        }else if (pokeType === 'water'){
            playerTwo.addPokemonW(pokeName, HP, attackDamage, attackDamage2, sound, pokeMove1, pokeMove2, pokeType);
            if(pokemon === 'Blastoise'){
                player.play('blastoise.mp3', function(err){
                    if (err) throw err
                 })
                }
        }else if (pokeType === 'grass'){
            playerTwo.addPokemonG(pokeName, HP, attackDamage, attackDamage2, sound, pokeMove1, pokeMove2, pokeType);
            if(pokemon === 'Bulbasaur'){
                player.play('bulbasaur.mp3', function(err){
                    if (err) throw err
                 })
                }
        } else if (pokeType === 'luckyDip') {
            playerTwo.addPokemonD(pokeName, HP, attackDamage, attackDamage2, sound, pokeMove1, pokeMove2, pokeType);
            if(pokemon === 'mysteryPokemon'){
                player.play('diglett.mp3', function(err){
                    if (err) throw err
                 })
            }
        }       
        // playerTwo.catch('masterball');
        // playerTwo.catch('masterball');
        // playerTwo.catch('masterball');
        // playerTwo.catch('masterball');
        // playerTwo.catch('masterball');
        theBattle = new Battle(playerOne,playerTwo);
        theBattle.fight();
      
        // player.play('victory.mp3', function(err){
        //     if (err) throw err
        //   })
       // console.log(playerTwo);
    })

})
let theBattle;
let playerOne;
let trainerName1;
let pokeType;
let pokeName;
let pokeMove1;
let pokeMove2;
let HP;
let attackDamage;
let attackDamage2;
let sound = 'mooooooooo'

let playerTwo;



