const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'list',
        name: 'pokemonTypes',
        message: 'Choose your type of Pokemon',
        choices: ['fire', 'grass', 'water'],
        
    }]).then(answer => {
        console.log(answer);
        if (answer.pokemonTypes === 'grass') {
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'Grass Pokemon Names',
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
                    }]
            )
        } else if (answer.pokemonTypes === 'water') {
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'Water Pokemon Names',
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
                    }]
                )
        } else if (answer.pokemonTypes === 'fire') {
                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'Fire Pokemon Names',
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
                    }]
                )
            }    
    }).then(answer => {console.log(answer)})




    