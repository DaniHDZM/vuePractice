export const person = {
    lastName: 'Stark',
    age: 33,
    address: {
        city: 'Colima',
        zip: 28055,
        lat: 12.24123,
        lng: 23.2239,
    }
} // as const la vuelve solo de lectura

const person2 = structuredClone(person);

person2.lastName = 'Parker';

console.log({person});
console.log({person2});