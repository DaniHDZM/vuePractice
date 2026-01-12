const characters = [
    'Goku', 
    'Vegeta', 
    'Trunks',
]

const [ g, ,t ] = characters

console.log(g, t)

const returnArray = () => {
    return [123, "ABC"] as const;
}

const [ numbers, letters ] = returnArray();

console.log(numbers, letters.toLowerCase()); 