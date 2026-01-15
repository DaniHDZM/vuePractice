/* 
console.log('Inicio');

new Promise( ( resolve, reject ) => {
    setTimeout(() => {
        const ok = true;
        
        if (ok) {
            resolve('cumplio la promesa')
        } else {
            reject('No cumplio la promesa')
        }
    }, 1000);
})
.then((message) => console.log(message))
.catch( errorMessage => console.log(errorMessage))
.finally(() => console.log('Fin de la promesa'))

console.log('Fin'); 
*/

import { getHeroById } from "./07-imp-exp";
import type { Hero } from "../data/heroes";

const getHeroByIdAsync = (id:number): Promise<Hero> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const hero = getHeroById(id);
            
            if (hero) {
                resolve(hero)
            } else {
                reject('Heroe no encontrado')
            }

        }, 1500);
    })
}

getHeroByIdAsync(3)
    .then( hero => console.log('El nombre es', hero.name))
    .catch( error => console.log(error))