'use strict'
// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.
// I have a few pokemon while a wild pokemon appeared!

class Pokemon{
    constructor(name, type, effectiveAgainst){
        this.name = name;
        this.type = type;
        this.effectiveAgainst = effectiveAgainst;
    }

    isEffectiveAgainst(pokemon){
        return this.effectiveAgainst === pokemon.type;
    }
}

const myPokemon = () => {
    return [
        new Pokemon('Balbasaur', 'leaf', 'water'),
        new Pokemon('Pikatchu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'leaf'),
        new Pokemon('Balbasaur', 'water', 'fire'),
        new Pokemon('Kingler', 'water', 'fire')
    ]
}

const wildPokemon = new Pokemon('Oddish', 'leaf', 'water');


// Which pokemon should I use?
myPokemon().forEach(pokemon => {
    return pokemon.isEffectiveAgainst(wildPokemon)? console.log(`${pokemon.name}, I choose you!`) : 0
})