const inquirer = require('inquirer');
const {Pokemon, Trainer, Battle} = require('./index.js');

let playerInputArray = [];

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

    console.log(type, trainerName)

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
    console.log(playerInputArray);
})

let trainerName1 = playerInputArray[4];
let pokeType = playerInputArray[3];
let pokeName = playerInputArray[2];
let pokeMove1 = playerInputArray[1];
let pokeMove2 = playerInputArray[0];
let HP = (Math.floor((Math.random() * 20)) + 80);
let attackDamage = (Math.floor((Math.random() * 15)) + 10);
let attackDamage2 = (Math.floor((Math.random() * 15)) + 10);


const playerOne = new Trainer(trainerName1);
// playerOne.addPokemon(pokeName, HP, attackDamage, attackDamage2, sound, pokeMove1, pokeMove2, pokeType);

console.log(playerOne);