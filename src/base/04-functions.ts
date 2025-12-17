/* function greetPerson( name: string ) {
    return `Hola, ${name} `;
}

console.log(greetPerson('Mario')) */

const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        power: 'Super Fuerza'
    },
]

const hero = heroes.find( (h) => h.id === 2);

console.log(hero?.name.toUpperCase());