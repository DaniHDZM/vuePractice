import heroes from "../data/heroes";

export const getHeroById = ( id: number ) => {
    return heroes.find( hero => hero.id === id);
}

console.log(getHeroById(1));

export const getHeroByOwner = (owner: string) => {
    return heroes.filter( hero => hero.owner === owner)
}

console.log(getHeroByOwner('DC'))