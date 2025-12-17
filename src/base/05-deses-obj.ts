interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

export const persona: Hero = {
    name: "Tony",
    age: 45,
    codeName: "Ironman",
}

// const {age, name, power = 'No tiene poder'} = persona;
// console.log({age, name, power})

interface CreateHeroArgs {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

const createHero = ({ name, age, codeName, power }: CreateHeroArgs )  => ({    
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder',
})

console.log( createHero( persona ) );